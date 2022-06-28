import React, { useState } from "react";
import { ServicesClient } from "../proto/ChatServiceClientPb";
import {
  Client,
  ClientName,
  FromClient,
  FromServer,
  StreamRequest,
} from "../proto/chat_pb";
import { ClientHandle, message } from "../react-app-env";

import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import { toast } from "react-toastify";

export const GRPCContext = React.createContext({});

const client: ClientHandle = {
  client: null,
  stream: null,
  clientName: "",
  roomName: "",
  delay: -1,
  uid: "",
};

interface Props {
  children: React.ReactNode;
}

export const GRPCProvider: React.FC<Props> = ({ children }) => {
  const [address, setAddress] = useState("");
  const [username, setUsername] = useState("");
  const [messages, setMessages] = useState([] as message[]);
  const [members, setMembers] = useState([] as Client[]);
  const [err, setErr] = useState(false);

  // TODO: unable to catch error while connecting to server
  const onAddressEnter = async (input: string) => {
    console.log("onAddressEnter called");
    if (client.client != null) return;
    const addr = "http://" + input;
    console.log(addr);
    try {
      await ConnectToServer(addr);
    } catch (e: any) {
      toast.error(`${e}`);
    } finally {
      console.log("finally block");
    }
  };

  const onUsernameEnter = async (input: string) => {
    if (!client.client) {
      toast.error("Please connect to the server first");
      return;
    }
    console.log(address, username, input);
    try {
      await CreateUser(input);
      RequestMessageStream();
      await updateMembersList(setMembers);
    } catch (e: any) {
      toast.error(`${e}`);
    }
  };

  const Retry = async () => {
    console.log("Checking For client");
    try {
      if (!client.client) {
        await ConnectToServer(address);
      }
      console.log("Retrying");
      setErr(false);
      await CreateUser(username);
      RequestMessageStream();
      await updateMembersList(setMembers);
    } catch (e: any) {
      toast.error(`${e}`);
    }
  };

  const Relogin = () => {
    client.client = null;
    setAddress("");
    setUsername("");
    setMessages([]);
    setErr(false);
  };

  const ConnectToServer = async (addr: string) => {
    const tempClient = new ServicesClient(addr);
    try {
      await tempClient.pingServer(new google_protobuf_empty_pb.Empty(), {});
      setAddress(addr);
      toast.success("Successfully connected to the server");
      client.client = tempClient;
    } catch (err) {
      throw `Failed to connect to the server: ${err}`;
    }
  };

  const CreateUser = async (name: string) => {
    if (!client.client) {
      throw "Please connect to the server first";
    }
    try {
      console.log(name, username);
      const clientName = new ClientName();
      clientName.setName(name);
      const res = await client.client.verifyName(clientName, {});
      if (res?.getExists()) {
        throw "Username already taken";
      }

      const resp = await client.client.createClient(clientName, {});

      if (resp.getCreated()) {
        toast.success(`Successfully created client with name ${name}`);
        setUsername(name);
        console.log(name, username);
        client.clientName = name;
        client.uid = resp.getId();
        client.roomName = resp.getRoomname();
        client.delay = resp.getDelay();
      }
    } catch (err) {
      throw `Failed to create client: ${err}`;
    }
  };

  const RequestMessageStream = () => {
    if (!client.client)
      throw "Error while creating chat stream, Please connect to the server first";

    try {
      const streamRequest = new StreamRequest();
      streamRequest.setId(client.uid);

      client.stream = client.client.chatService(streamRequest);
      client.stream.on("data", (data: FromServer) => {
        onMessageReceive(data);
      });
      client.stream.on("end", () => {
        console.log("Stream ended");
      });
      client.stream.on("error", (err: Error) => {
        console.log("Stream error", err);
        setErr(true);
      });
    } catch (err) {
      throw `Failed to create chat stream: ${err}`;
    }
  };

  const sendMessage = async (message: string) => {
    if (!client.client) return;
    const newMsg = new FromClient();
    newMsg.setBody(message);
    newMsg.setId(client.uid);
    const t = Math.trunc(Date.now() / 1000);
    console.log(new Date(t));
    newMsg.setTimestamp(t);
    console.log(newMsg);
    await client.client.sendMessage(newMsg, {});
    setMessages((prev) => [
      ...prev,
      { name: client.clientName, body: message, timeStamp: new Date(t * 1000) },
    ]);
  };

  const onMessageReceive = (message: FromServer) => {
    if (message.getName() === "server") {
      (async () => {
        await updateMembersList(setMembers);
      })();
    }
    setMessages((prev) => [
      ...prev,
      {
        name: message.getName(),
        body: message.getBody(),
        timeStamp: new Date(message.getTimestamp() * 1000),
      },
    ]);
  };

  const log = () => {
    console.log("message from log");
  };

  return (
    <GRPCContext.Provider
      value={{
        messages,
        members,
        err,
        address,
        setAddress,
        username,
        setUsername,
        onAddressEnter,
        onUsernameEnter,
        sendMessage,
        Retry,
        Relogin,
      }}
    >
      {children}{" "}
    </GRPCContext.Provider>
  );
};

async function updateMembersList(
  setMembers: React.Dispatch<React.SetStateAction<Client[]>>
) {
  if (!client.client) return Promise.reject();
  const mems = await client.client.getClients(
    new google_protobuf_empty_pb.Empty(),
    {}
  );
  const memberList = mems.getClientList();
  console.log(memberList);
  setMembers(memberList);
}
