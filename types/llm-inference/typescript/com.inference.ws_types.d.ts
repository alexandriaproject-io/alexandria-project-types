//
// Autogenerated by Thrift Compiler (0.13.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
import Int64 = require('node-int64');


export declare class WsInferenceRequest {
  prompts: SinglePrompt[];
  stream_response: boolean;
  only_new_tokens: boolean;
  generation_config: GenerationConfig;

    constructor(args?: { prompts: SinglePrompt[]; stream_response?: boolean; only_new_tokens?: boolean; generation_config?: GenerationConfig; });
}

export declare class WsInferenceAcceptedEvent {
  request_id: string;

    constructor(args?: { request_id: string; });
}

export declare class WsInferenceStartedEvent {
  request_id: string;

    constructor(args?: { request_id: string; });
}

export declare class WsInferenceInitializedEvent {
  request_id: string;
  text: string;

    constructor(args?: { request_id: string; text: string; });
}

export declare class WsInferenceProgressEvent {
  request_id: string;
  text: string;

    constructor(args?: { request_id: string; text: string; });
}

export declare class WsInferenceCompletionEvent {
  request_id: string;
  text: string;
  is_eos: boolean;
  new_tokens_count: number;
  execution_time: number;

    constructor(args?: { request_id: string; text: string; is_eos: boolean; new_tokens_count: number; execution_time: number; });
}

export declare class WsInferenceErrorEvent {
  request_id: string;
  error: string;

    constructor(args?: { request_id: string; error: string; });
}

export declare class WsErrorEvent {
  error: string;

    constructor(args?: { error: string; });
}

export declare class WsInferenceEvent {
  acceptedEvent: WsInferenceAcceptedEvent;
  startedEvent: WsInferenceStartedEvent;
  initializedEvent: WsInferenceInitializedEvent;
  progressEvent: WsInferenceProgressEvent;
  completionEvent: WsInferenceCompletionEvent;
  errorEvent: WsInferenceErrorEvent;
  wsErrorEvent: WsInferenceErrorEvent;

    constructor(args?: { acceptedEvent?: WsInferenceAcceptedEvent; startedEvent?: WsInferenceStartedEvent; initializedEvent?: WsInferenceInitializedEvent; progressEvent?: WsInferenceProgressEvent; completionEvent?: WsInferenceCompletionEvent; errorEvent?: WsInferenceErrorEvent; wsErrorEvent?: WsInferenceErrorEvent; });
}

export declare class WsInferenceResponse {
  events: WsInferenceEvent[];

    constructor(args?: { events: WsInferenceEvent[]; });
}
