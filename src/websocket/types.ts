import {
  FileUrlPayloadType,
  JoinPayloadType,
  MessagePayloadType,
} from "./payload";

export type OnConnectCallback = () => void;
export type OnDisconnectCallback = () => void;
export type OnErrorCallback = (error: Error) => void;
export type OnMessageCallback = (payload: MessagePayloadType) => void;
export type OnJoinCallback = (payload: JoinPayloadType) => void;
export type OnFileUrlCallback = (payload: FileUrlPayloadType) => void;

export type ChatSocketBaseConfig = {
  onConnect: OnConnectCallback;
  onDisconnect: OnDisconnectCallback;
  onError: OnErrorCallback;
  onJoin: OnJoinCallback;
  onReceiveMessage: OnMessageCallback;
  onReceiveFileUrl: OnFileUrlCallback;
};

export type ChatSocketConfig = Partial<ChatSocketBaseConfig>;

export type SocketConnectConfig = ChatSocketConfig & {
  url?: string;
};
