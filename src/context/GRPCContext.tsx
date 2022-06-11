import React, {useState} from 'react';
import { ServicesClient } from '../proto/ChatServiceClientPb';
import { Client, ClientName, FromClient, FromServer, StreamRequest } from '../proto/chat_pb';
import { ClientHandle, message } from '../react-app-env';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';

export const GRPCContext = React.createContext({});

const client: ClientHandle = {
    client: null,
    stream: null,
    clientName:  "",
    roomName: "",
    delay:  -1,
    uid:  "",}


interface Props {
    children: React.ReactNode;
}

interface Empty {

}



export const GRPCProvider: React.FC<Props> = ({children}) => {
    const [address, setAddress] = useState("");
    const [username, setUsername] = useState("");
    const [messages, setMessages] = useState([] as message[]);
    const [members, setMembers] = useState([] as Client[]);
    const [err, setErr] = useState(false);

    const onAddressEnter = (input: string) => {
        if (client.client != null) return;
        setAddress(input);
        const addr = "http://" + input;
        console.log(addr);
        client.client = new ServicesClient(addr);
    }

    const onUsernameEnter = async (input: string) => {
        if (!client.client) return;
        setUsername(input);
        console.log(address, username, input);
        const clientName = new ClientName();
        clientName.setName(input);
        const res = await client?.client.verifyName(clientName, {});
        if (res?.getExists()) {
            console.log("Username taken");
            return;
        }
        console.log("Username available");
        console.log("Creating Client");
        const resp = await client.client.createClient(clientName, {});
        console.log("response received");
        if (resp.getCreated()) {
            console.log("Client created");
            client.clientName = input;
            client.uid = resp.getId();
            client.roomName = resp.getRoomname();
            client.delay = resp.getDelay();
        }

        const streamRequest = new StreamRequest();
        streamRequest.setId(client.uid);

        client.stream = await client.client.chatService(streamRequest);
        client.stream.on('data', (data: FromServer) => {onMessageReceive(data)});
        client.stream.on('end', () => {console.log("Stream ended")});
        client.stream.on('error', (err: Error) => {console.log("Stream error", err); setErr(true)});
        await updateMembersList(setMembers);
    }

    const sendMessage = async (message: string) => {
        if (!client.client) return;
        const newMsg = new FromClient();
        newMsg.setBody(message);
        newMsg.setId(client.uid);
        const t = Math.trunc(Date.now() / 1000);
        console.log(new Date(t));
        newMsg.setTimestamp(t)
        console.log(newMsg);
        await client.client.sendMessage(newMsg, {});
        setMessages((prev) => [...prev, {name: client.clientName, body: message, timeStamp: new Date(t * 1000)}]);
    }

    const onMessageReceive = (message: FromServer) => {
        if (message.getName() === 'server') {
            (async () => {
                await updateMembersList(setMembers);
            })();
        }
        setMessages((prev) => [...prev, {name: message.getName(), body: message.getBody(), timeStamp: new Date(message.getTimestamp() * 1000)}]);
    }

    const log = () => {
        console.log("message from log");
    }

    return (
        <GRPCContext.Provider value={{ 
            messages,
            members,
            address,
            setAddress,
            username,
            setUsername,
            onAddressEnter, 
            onUsernameEnter, 
            sendMessage}}>
            {children} </GRPCContext.Provider>
    )
}

async function updateMembersList(setMembers: React.Dispatch<React.SetStateAction<Client[]>>) {
    if (!client.client) return Promise.reject();
    const mems = await client.client.getClients(new google_protobuf_empty_pb.Empty(), {});
    const memberList =  mems.getClientList()
    console.log(memberList);
    setMembers(memberList);
}
