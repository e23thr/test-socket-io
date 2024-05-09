import { io, ManagerOptions, Socket } from "socket.io-client";

import {
  EVENT_FILEURL,
  EVENT_JOIN,
  EVENT_MESSAGE,
  ROOM_STORAGE_NAME,
} from "./constants";
import {
  JoinPayloadType,
  MessagePayloadType,
  FileUrlPayloadType,
} from "./payload";

import { ChatSocketConfig, SocketConnectConfig } from "./types";

// let manager: Manager;
let socket: Socket;
let room: string = window.localStorage.getItem(ROOM_STORAGE_NAME) || "";

// callback functions for basic events

let socketConnectConfig: SocketConnectConfig;

const SOCKET_IO_CONFIG: Partial<ManagerOptions> = {
  autoConnect: false,
  reconnection: true,
  // retries: Infinity,
  reconnectionDelay: 1000,
  reconnectionDelayMax: 5000,
  reconnectionAttempts: Infinity,
  timeout: 5000,
  forceNew: true,

  transports: ["websocket"],
};

function _prepareSocket() {
  if (!socketConnectConfig.url) {
    throw new Error("Websocket URL is not set");
  }

  // manager = new Manager(SOCKET_IO_CONFIG);

  // socket = manager.socket(socketConnectConfig.url);
  socket = io(socketConnectConfig.url, { ...SOCKET_IO_CONFIG, forceNew: true });

  socket.on("connect", () => {
    socketConnectConfig?.onConnect?.();
  });

  socket.on("disconnect", () => {
    socketConnectConfig?.onDisconnect?.();
  });
  socket.on("error", (error) => {
    socketConnectConfig?.onError?.(error);
  });

  socket.on(EVENT_JOIN, (payload: JoinPayloadType) => {
    room = payload.room;
    socketConnectConfig?.onJoin?.(payload);
  });

  socket.on(EVENT_MESSAGE, (payload: MessagePayloadType) => {
    socketConnectConfig?.onReceiveMessage?.(payload);
  });

  socket.on(EVENT_FILEURL, (payload: FileUrlPayloadType) => {
    socketConnectConfig?.onReceiveFileUrl?.(payload);
  });
  socket.connect();
}

export function connect(option: SocketConnectConfig) {
  socketConnectConfig = { ...option };

  _prepareSocket();

  return socket;
}

export function sendMessage(message: string) {
  const data: MessagePayloadType = {
    type: EVENT_MESSAGE,
    room: room,
    message: message,
  };
  socket.emit(EVENT_MESSAGE, data);
}

export function connectAsGuest(apiKey: string, guestName: string) {
  // const data: 
}
// export { connect, sendMessage };
