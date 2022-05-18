import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class FromClient extends jspb.Message {
  getId(): number;
  setId(value: number): FromClient;

  getBody(): string;
  setBody(value: string): FromClient;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FromClient.AsObject;
  static toObject(includeInstance: boolean, msg: FromClient): FromClient.AsObject;
  static serializeBinaryToWriter(message: FromClient, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FromClient;
  static deserializeBinaryFromReader(message: FromClient, reader: jspb.BinaryReader): FromClient;
}

export namespace FromClient {
  export type AsObject = {
    id: number,
    body: string,
  }
}

export class FromServer extends jspb.Message {
  getName(): string;
  setName(value: string): FromServer;

  getBody(): string;
  setBody(value: string): FromServer;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FromServer.AsObject;
  static toObject(includeInstance: boolean, msg: FromServer): FromServer.AsObject;
  static serializeBinaryToWriter(message: FromServer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FromServer;
  static deserializeBinaryFromReader(message: FromServer, reader: jspb.BinaryReader): FromServer;
}

export namespace FromServer {
  export type AsObject = {
    name: string,
    body: string,
  }
}

export class Client extends jspb.Message {
  getName(): string;
  setName(value: string): Client;

  getId(): number;
  setId(value: number): Client;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Client.AsObject;
  static toObject(includeInstance: boolean, msg: Client): Client.AsObject;
  static serializeBinaryToWriter(message: Client, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Client;
  static deserializeBinaryFromReader(message: Client, reader: jspb.BinaryReader): Client;
}

export namespace Client {
  export type AsObject = {
    name: string,
    id: number,
  }
}

export class Clients extends jspb.Message {
  getClientList(): Array<Client>;
  setClientList(value: Array<Client>): Clients;
  clearClientList(): Clients;
  addClient(value?: Client, index?: number): Client;

  getCount(): number;
  setCount(value: number): Clients;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Clients.AsObject;
  static toObject(includeInstance: boolean, msg: Clients): Clients.AsObject;
  static serializeBinaryToWriter(message: Clients, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Clients;
  static deserializeBinaryFromReader(message: Clients, reader: jspb.BinaryReader): Clients;
}

export namespace Clients {
  export type AsObject = {
    clientList: Array<Client.AsObject>,
    count: number,
  }
}

export class Command extends jspb.Message {
  getType(): number;
  setType(value: number): Command;

  getValue(): string;
  setValue(value: string): Command;

  getId(): number;
  setId(value: number): Command;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Command.AsObject;
  static toObject(includeInstance: boolean, msg: Command): Command.AsObject;
  static serializeBinaryToWriter(message: Command, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Command;
  static deserializeBinaryFromReader(message: Command, reader: jspb.BinaryReader): Command;
}

export namespace Command {
  export type AsObject = {
    type: number,
    value: string,
    id: number,
  }
}

export class ClientName extends jspb.Message {
  getName(): string;
  setName(value: string): ClientName;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientName.AsObject;
  static toObject(includeInstance: boolean, msg: ClientName): ClientName.AsObject;
  static serializeBinaryToWriter(message: ClientName, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientName;
  static deserializeBinaryFromReader(message: ClientName, reader: jspb.BinaryReader): ClientName;
}

export namespace ClientName {
  export type AsObject = {
    name: string,
  }
}

export class CreateClientResponse extends jspb.Message {
  getCreated(): boolean;
  setCreated(value: boolean): CreateClientResponse;

  getId(): number;
  setId(value: number): CreateClientResponse;

  getRoomname(): string;
  setRoomname(value: string): CreateClientResponse;

  getDelay(): number;
  setDelay(value: number): CreateClientResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateClientResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateClientResponse): CreateClientResponse.AsObject;
  static serializeBinaryToWriter(message: CreateClientResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateClientResponse;
  static deserializeBinaryFromReader(message: CreateClientResponse, reader: jspb.BinaryReader): CreateClientResponse;
}

export namespace CreateClientResponse {
  export type AsObject = {
    created: boolean,
    id: number,
    roomname: string,
    delay: number,
  }
}

export class Exists extends jspb.Message {
  getExists(): boolean;
  setExists(value: boolean): Exists;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Exists.AsObject;
  static toObject(includeInstance: boolean, msg: Exists): Exists.AsObject;
  static serializeBinaryToWriter(message: Exists, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Exists;
  static deserializeBinaryFromReader(message: Exists, reader: jspb.BinaryReader): Exists;
}

export namespace Exists {
  export type AsObject = {
    exists: boolean,
  }
}

export class StreamRequest extends jspb.Message {
  getId(): number;
  setId(value: number): StreamRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StreamRequest): StreamRequest.AsObject;
  static serializeBinaryToWriter(message: StreamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamRequest;
  static deserializeBinaryFromReader(message: StreamRequest, reader: jspb.BinaryReader): StreamRequest;
}

export namespace StreamRequest {
  export type AsObject = {
    id: number,
  }
}

