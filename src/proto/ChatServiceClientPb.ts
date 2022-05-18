/**
 * @fileoverview gRPC-Web generated client stub for pixalquarks.terminalChatServer
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as proto_chat_pb from '../proto/chat_pb';


export class ServicesClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoChatService = new grpcWeb.MethodDescriptor(
    '/pixalquarks.terminalChatServer.Services/ChatService',
    grpcWeb.MethodType.SERVER_STREAMING,
    proto_chat_pb.StreamRequest,
    proto_chat_pb.FromServer,
    (request: proto_chat_pb.StreamRequest) => {
      return request.serializeBinary();
    },
    proto_chat_pb.FromServer.deserializeBinary
  );

  chatService(
    request: proto_chat_pb.StreamRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/pixalquarks.terminalChatServer.Services/ChatService',
      request,
      metadata || {},
      this.methodInfoChatService);
  }

  methodInfoSendMessage = new grpcWeb.MethodDescriptor(
    '/pixalquarks.terminalChatServer.Services/SendMessage',
    grpcWeb.MethodType.UNARY,
    proto_chat_pb.FromClient,
    google_protobuf_empty_pb.Empty,
    (request: proto_chat_pb.FromClient) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  sendMessage(
    request: proto_chat_pb.FromClient,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  sendMessage(
    request: proto_chat_pb.FromClient,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  sendMessage(
    request: proto_chat_pb.FromClient,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pixalquarks.terminalChatServer.Services/SendMessage',
        request,
        metadata || {},
        this.methodInfoSendMessage,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pixalquarks.terminalChatServer.Services/SendMessage',
    request,
    metadata || {},
    this.methodInfoSendMessage);
  }

  methodInfoCommandService = new grpcWeb.MethodDescriptor(
    '/pixalquarks.terminalChatServer.Services/CommandService',
    grpcWeb.MethodType.UNARY,
    proto_chat_pb.Command,
    google_protobuf_empty_pb.Empty,
    (request: proto_chat_pb.Command) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  commandService(
    request: proto_chat_pb.Command,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  commandService(
    request: proto_chat_pb.Command,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  commandService(
    request: proto_chat_pb.Command,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pixalquarks.terminalChatServer.Services/CommandService',
        request,
        metadata || {},
        this.methodInfoCommandService,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pixalquarks.terminalChatServer.Services/CommandService',
    request,
    metadata || {},
    this.methodInfoCommandService);
  }

  methodInfoGetClients = new grpcWeb.MethodDescriptor(
    '/pixalquarks.terminalChatServer.Services/GetClients',
    grpcWeb.MethodType.UNARY,
    google_protobuf_empty_pb.Empty,
    proto_chat_pb.Clients,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    proto_chat_pb.Clients.deserializeBinary
  );

  getClients(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<proto_chat_pb.Clients>;

  getClients(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: proto_chat_pb.Clients) => void): grpcWeb.ClientReadableStream<proto_chat_pb.Clients>;

  getClients(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: proto_chat_pb.Clients) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pixalquarks.terminalChatServer.Services/GetClients',
        request,
        metadata || {},
        this.methodInfoGetClients,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pixalquarks.terminalChatServer.Services/GetClients',
    request,
    metadata || {},
    this.methodInfoGetClients);
  }

  methodInfoCreateClient = new grpcWeb.MethodDescriptor(
    '/pixalquarks.terminalChatServer.Services/CreateClient',
    grpcWeb.MethodType.UNARY,
    proto_chat_pb.ClientName,
    proto_chat_pb.CreateClientResponse,
    (request: proto_chat_pb.ClientName) => {
      return request.serializeBinary();
    },
    proto_chat_pb.CreateClientResponse.deserializeBinary
  );

  createClient(
    request: proto_chat_pb.ClientName,
    metadata: grpcWeb.Metadata | null): Promise<proto_chat_pb.CreateClientResponse>;

  createClient(
    request: proto_chat_pb.ClientName,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: proto_chat_pb.CreateClientResponse) => void): grpcWeb.ClientReadableStream<proto_chat_pb.CreateClientResponse>;

  createClient(
    request: proto_chat_pb.ClientName,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: proto_chat_pb.CreateClientResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pixalquarks.terminalChatServer.Services/CreateClient',
        request,
        metadata || {},
        this.methodInfoCreateClient,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pixalquarks.terminalChatServer.Services/CreateClient',
    request,
    metadata || {},
    this.methodInfoCreateClient);
  }

  methodInfoRemoveClient = new grpcWeb.MethodDescriptor(
    '/pixalquarks.terminalChatServer.Services/RemoveClient',
    grpcWeb.MethodType.UNARY,
    proto_chat_pb.Client,
    google_protobuf_empty_pb.Empty,
    (request: proto_chat_pb.Client) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  removeClient(
    request: proto_chat_pb.Client,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  removeClient(
    request: proto_chat_pb.Client,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  removeClient(
    request: proto_chat_pb.Client,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pixalquarks.terminalChatServer.Services/RemoveClient',
        request,
        metadata || {},
        this.methodInfoRemoveClient,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pixalquarks.terminalChatServer.Services/RemoveClient',
    request,
    metadata || {},
    this.methodInfoRemoveClient);
  }

  methodInfoVerifyName = new grpcWeb.MethodDescriptor(
    '/pixalquarks.terminalChatServer.Services/VerifyName',
    grpcWeb.MethodType.UNARY,
    proto_chat_pb.ClientName,
    proto_chat_pb.Exists,
    (request: proto_chat_pb.ClientName) => {
      return request.serializeBinary();
    },
    proto_chat_pb.Exists.deserializeBinary
  );

  verifyName(
    request: proto_chat_pb.ClientName,
    metadata: grpcWeb.Metadata | null): Promise<proto_chat_pb.Exists>;

  verifyName(
    request: proto_chat_pb.ClientName,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: proto_chat_pb.Exists) => void): grpcWeb.ClientReadableStream<proto_chat_pb.Exists>;

  verifyName(
    request: proto_chat_pb.ClientName,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: proto_chat_pb.Exists) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pixalquarks.terminalChatServer.Services/VerifyName',
        request,
        metadata || {},
        this.methodInfoVerifyName,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pixalquarks.terminalChatServer.Services/VerifyName',
    request,
    metadata || {},
    this.methodInfoVerifyName);
  }

}

