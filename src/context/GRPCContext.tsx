import React, {useState} from 'react';
import { isEmptyBindingElement } from 'typescript';
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
    uid:  -2,}


interface Props {
    children: React.ReactNode;
}

interface Empty {

}



export const GRPCProvider: React.FC<Props> = ({children}) => {
    const [messages, setMessages] = useState([] as message[]);
    const [members, setMembers] = useState([] as Client[]);

    const onAddressEnter = (address: string) => {
        if (client.client != null) return;
        address = "http://" + address;
        client.client = new ServicesClient(address);
    }

    const onUsernameEnter = async (username: string) => {
        if (!client.client) return;
        const clientName = new ClientName();
        clientName.setName(username);
        const res = await client?.client.verifyName(clientName, {});
        if (res?.getExists()) {
            console.log("Username taken");
            return;
        }
        const resp = await client.client.createClient(clientName, {});
        if (resp.getCreated()) {
            console.log("Client created");
            client.clientName = username;
            client.uid = resp.getId();
            client.roomName = resp.getRoomname();
            client.delay = resp.getDelay();
        }

        const streamRequest = new StreamRequest();
        streamRequest.setId(client.uid);

        client.stream = await client.client.chatService(streamRequest);
        client.stream.on('data', (data: FromServer) => {onMessageReceive(data)});
        await updateMembersList(setMembers);
    }

    const sendMessage = async (message: string) => {
        if (!client.client) return;
        const newMsg = new FromClient();
        newMsg.setBody(message);
        newMsg.setId(client.uid);
        await client.client.sendMessage(newMsg, {});
        setMessages((prev) => [...prev, {name: client.clientName, body: message}]);
    }

    const onMessageReceive = (message: FromServer) => {
        if (message.getName() === 'server') {
            (async () => {
                await updateMembersList(setMembers);
            })();
        }
        setMessages((prev) => [...prev, {name: message.getName(), body: message.getBody()}]);
    }

    const log = () => {
        console.log("message from log");
    }

    return (
        <GRPCContext.Provider value={{ 
            messages,
            members,
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
