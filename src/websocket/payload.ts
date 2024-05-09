import {
  EVENT_JOIN,
  EVENT_MESSAGE,
  EVENT_UPLOAD,
  EVENT_FILEURL,
  EVENT_AUTH_TOKEN,
  EVENT_ADVERTISE,
} from "./constants";

export type BasePayloadType = {
  type: typeof EVENT_JOIN | typeof EVENT_MESSAGE | typeof EVENT_UPLOAD | typeof EVENT_FILEURL;
};

export type AuthTokenPayloadType = BasePayloadType & {
  type: typeof EVENT_AUTH_TOKEN;
  token: string;
};

export type JoinPayloadType = BasePayloadType & {
  type: typeof EVENT_JOIN;
  room: string;
};

export type MessagePayloadType = BasePayloadType & {
  type: typeof EVENT_MESSAGE;
  room: string;
  message: string;
};

export type UploadPayloadType = BasePayloadType & {
  type: typeof EVENT_UPLOAD;
  room: string;
  file: File;
};

export type AdvertisePayloadType = BasePayloadType & {
  type: typeof EVENT_ADVERTISE;
  json: string;
};

export type FileUrlPayloadType = BasePayloadType & {
  type: typeof EVENT_FILEURL;
  room: string;
  url: string;
};

export type PayloadType =
  | JoinPayloadType
  | MessagePayloadType
  | UploadPayloadType
  | AuthTokenPayloadType;
