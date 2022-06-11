/// <reference types="react-scripts" />

import { ServicesClient } from "./proto/ChatServiceClientPb"

type GRPCContextType = {
    messages: message[]
    members: Client[]
    address: string
    setAddress: (address: string) => void
    username: string
    setUsername: (username: string) => void
    onAddressEnter: (address: string) => void
    onUsernameEnter: (username: string) => Promise<Void>
    sendMessage: (message: string) => Promise<Void>
}

type ClientHandle = {
    client: ServicesClient | null
    stream:     Services_ChatServiceClient
    clientName: string
    roomName:   string
    delay:      number
    uid:        string
}

type message = {
    name: string
    body: string
    timeStamp: Date
}
