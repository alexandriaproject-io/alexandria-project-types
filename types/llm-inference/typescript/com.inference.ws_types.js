//
// Autogenerated by Thrift Compiler (0.13.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
if (typeof Int64 === 'undefined' && typeof require === 'function') {
  var Int64 = require('node-int64');
}


WsInferenceRequest = function(args) {
  this.prompts = null;
  this.stream_response = null;
  this.only_new_tokens = null;
  this.generation_config = null;
  if (args) {
    if (args.prompts !== undefined && args.prompts !== null) {
      this.prompts = Thrift.copyList(args.prompts, [SinglePrompt]);
    }
    if (args.stream_response !== undefined && args.stream_response !== null) {
      this.stream_response = args.stream_response;
    }
    if (args.only_new_tokens !== undefined && args.only_new_tokens !== null) {
      this.only_new_tokens = args.only_new_tokens;
    }
    if (args.generation_config !== undefined && args.generation_config !== null) {
      this.generation_config = new GenerationConfig(args.generation_config);
    }
  }
};
WsInferenceRequest.prototype = {};
WsInferenceRequest.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.LIST) {
        this.prompts = [];
        var _rtmp31 = input.readListBegin();
        var _size0 = _rtmp31.size || 0;
        for (var _i2 = 0; _i2 < _size0; ++_i2) {
          var elem3 = null;
          elem3 = new SinglePrompt();
          elem3.read(input);
          this.prompts.push(elem3);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.BOOL) {
        this.stream_response = input.readBool().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.BOOL) {
        this.only_new_tokens = input.readBool().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRUCT) {
        this.generation_config = new GenerationConfig();
        this.generation_config.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

WsInferenceRequest.prototype.write = function(output) {
  output.writeStructBegin('WsInferenceRequest');
  if (this.prompts !== null && this.prompts !== undefined) {
    output.writeFieldBegin('prompts', Thrift.Type.LIST, 1);
    output.writeListBegin(Thrift.Type.STRUCT, this.prompts.length);
    for (var iter4 in this.prompts) {
      if (this.prompts.hasOwnProperty(iter4)) {
        iter4 = this.prompts[iter4];
        iter4.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.stream_response !== null && this.stream_response !== undefined) {
    output.writeFieldBegin('stream_response', Thrift.Type.BOOL, 2);
    output.writeBool(this.stream_response);
    output.writeFieldEnd();
  }
  if (this.only_new_tokens !== null && this.only_new_tokens !== undefined) {
    output.writeFieldBegin('only_new_tokens', Thrift.Type.BOOL, 3);
    output.writeBool(this.only_new_tokens);
    output.writeFieldEnd();
  }
  if (this.generation_config !== null && this.generation_config !== undefined) {
    output.writeFieldBegin('generation_config', Thrift.Type.STRUCT, 4);
    this.generation_config.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

WsInferenceAcceptedEvent = function(args) {
  this.request_id = null;
  if (args) {
    if (args.request_id !== undefined && args.request_id !== null) {
      this.request_id = args.request_id;
    }
  }
};
WsInferenceAcceptedEvent.prototype = {};
WsInferenceAcceptedEvent.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.request_id = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

WsInferenceAcceptedEvent.prototype.write = function(output) {
  output.writeStructBegin('WsInferenceAcceptedEvent');
  if (this.request_id !== null && this.request_id !== undefined) {
    output.writeFieldBegin('request_id', Thrift.Type.STRING, 1);
    output.writeString(this.request_id);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

WsInferenceStartedEvent = function(args) {
  this.request_id = null;
  if (args) {
    if (args.request_id !== undefined && args.request_id !== null) {
      this.request_id = args.request_id;
    }
  }
};
WsInferenceStartedEvent.prototype = {};
WsInferenceStartedEvent.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.request_id = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

WsInferenceStartedEvent.prototype.write = function(output) {
  output.writeStructBegin('WsInferenceStartedEvent');
  if (this.request_id !== null && this.request_id !== undefined) {
    output.writeFieldBegin('request_id', Thrift.Type.STRING, 1);
    output.writeString(this.request_id);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

WsInferenceInitializedEvent = function(args) {
  this.request_id = null;
  this.text = null;
  if (args) {
    if (args.request_id !== undefined && args.request_id !== null) {
      this.request_id = args.request_id;
    }
    if (args.text !== undefined && args.text !== null) {
      this.text = args.text;
    }
  }
};
WsInferenceInitializedEvent.prototype = {};
WsInferenceInitializedEvent.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.request_id = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.text = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

WsInferenceInitializedEvent.prototype.write = function(output) {
  output.writeStructBegin('WsInferenceInitializedEvent');
  if (this.request_id !== null && this.request_id !== undefined) {
    output.writeFieldBegin('request_id', Thrift.Type.STRING, 1);
    output.writeString(this.request_id);
    output.writeFieldEnd();
  }
  if (this.text !== null && this.text !== undefined) {
    output.writeFieldBegin('text', Thrift.Type.STRING, 3);
    output.writeString(this.text);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

WsInferenceProgressEvent = function(args) {
  this.request_id = null;
  this.text = null;
  if (args) {
    if (args.request_id !== undefined && args.request_id !== null) {
      this.request_id = args.request_id;
    }
    if (args.text !== undefined && args.text !== null) {
      this.text = args.text;
    }
  }
};
WsInferenceProgressEvent.prototype = {};
WsInferenceProgressEvent.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.request_id = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.text = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

WsInferenceProgressEvent.prototype.write = function(output) {
  output.writeStructBegin('WsInferenceProgressEvent');
  if (this.request_id !== null && this.request_id !== undefined) {
    output.writeFieldBegin('request_id', Thrift.Type.STRING, 1);
    output.writeString(this.request_id);
    output.writeFieldEnd();
  }
  if (this.text !== null && this.text !== undefined) {
    output.writeFieldBegin('text', Thrift.Type.STRING, 3);
    output.writeString(this.text);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

WsInferenceCompletionEvent = function(args) {
  this.request_id = null;
  this.text = null;
  this.is_eos = null;
  this.new_tokens_count = null;
  this.execution_time = null;
  if (args) {
    if (args.request_id !== undefined && args.request_id !== null) {
      this.request_id = args.request_id;
    }
    if (args.text !== undefined && args.text !== null) {
      this.text = args.text;
    }
    if (args.is_eos !== undefined && args.is_eos !== null) {
      this.is_eos = args.is_eos;
    }
    if (args.new_tokens_count !== undefined && args.new_tokens_count !== null) {
      this.new_tokens_count = args.new_tokens_count;
    }
    if (args.execution_time !== undefined && args.execution_time !== null) {
      this.execution_time = args.execution_time;
    }
  }
};
WsInferenceCompletionEvent.prototype = {};
WsInferenceCompletionEvent.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.request_id = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.text = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.BOOL) {
        this.is_eos = input.readBool().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.I32) {
        this.new_tokens_count = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.DOUBLE) {
        this.execution_time = input.readDouble().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

WsInferenceCompletionEvent.prototype.write = function(output) {
  output.writeStructBegin('WsInferenceCompletionEvent');
  if (this.request_id !== null && this.request_id !== undefined) {
    output.writeFieldBegin('request_id', Thrift.Type.STRING, 1);
    output.writeString(this.request_id);
    output.writeFieldEnd();
  }
  if (this.text !== null && this.text !== undefined) {
    output.writeFieldBegin('text', Thrift.Type.STRING, 3);
    output.writeString(this.text);
    output.writeFieldEnd();
  }
  if (this.is_eos !== null && this.is_eos !== undefined) {
    output.writeFieldBegin('is_eos', Thrift.Type.BOOL, 4);
    output.writeBool(this.is_eos);
    output.writeFieldEnd();
  }
  if (this.new_tokens_count !== null && this.new_tokens_count !== undefined) {
    output.writeFieldBegin('new_tokens_count', Thrift.Type.I32, 5);
    output.writeI32(this.new_tokens_count);
    output.writeFieldEnd();
  }
  if (this.execution_time !== null && this.execution_time !== undefined) {
    output.writeFieldBegin('execution_time', Thrift.Type.DOUBLE, 6);
    output.writeDouble(this.execution_time);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

WsInferenceErrorEvent = function(args) {
  this.request_id = null;
  this.error = null;
  if (args) {
    if (args.request_id !== undefined && args.request_id !== null) {
      this.request_id = args.request_id;
    }
    if (args.error !== undefined && args.error !== null) {
      this.error = args.error;
    }
  }
};
WsInferenceErrorEvent.prototype = {};
WsInferenceErrorEvent.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.request_id = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.error = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

WsInferenceErrorEvent.prototype.write = function(output) {
  output.writeStructBegin('WsInferenceErrorEvent');
  if (this.request_id !== null && this.request_id !== undefined) {
    output.writeFieldBegin('request_id', Thrift.Type.STRING, 1);
    output.writeString(this.request_id);
    output.writeFieldEnd();
  }
  if (this.error !== null && this.error !== undefined) {
    output.writeFieldBegin('error', Thrift.Type.STRING, 3);
    output.writeString(this.error);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

WsErrorEvent = function(args) {
  this.error = null;
  if (args) {
    if (args.error !== undefined && args.error !== null) {
      this.error = args.error;
    }
  }
};
WsErrorEvent.prototype = {};
WsErrorEvent.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.error = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

WsErrorEvent.prototype.write = function(output) {
  output.writeStructBegin('WsErrorEvent');
  if (this.error !== null && this.error !== undefined) {
    output.writeFieldBegin('error', Thrift.Type.STRING, 3);
    output.writeString(this.error);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

WsInferenceEvent = function(args) {
  this.acceptedEvent = null;
  this.startedEvent = null;
  this.initializedEvent = null;
  this.progressEvent = null;
  this.completionEvent = null;
  this.errorEvent = null;
  this.wsErrorEvent = null;
  if (args) {
    if (args.acceptedEvent !== undefined && args.acceptedEvent !== null) {
      this.acceptedEvent = new WsInferenceAcceptedEvent(args.acceptedEvent);
    }
    if (args.startedEvent !== undefined && args.startedEvent !== null) {
      this.startedEvent = new WsInferenceStartedEvent(args.startedEvent);
    }
    if (args.initializedEvent !== undefined && args.initializedEvent !== null) {
      this.initializedEvent = new WsInferenceInitializedEvent(args.initializedEvent);
    }
    if (args.progressEvent !== undefined && args.progressEvent !== null) {
      this.progressEvent = new WsInferenceProgressEvent(args.progressEvent);
    }
    if (args.completionEvent !== undefined && args.completionEvent !== null) {
      this.completionEvent = new WsInferenceCompletionEvent(args.completionEvent);
    }
    if (args.errorEvent !== undefined && args.errorEvent !== null) {
      this.errorEvent = new WsInferenceErrorEvent(args.errorEvent);
    }
    if (args.wsErrorEvent !== undefined && args.wsErrorEvent !== null) {
      this.wsErrorEvent = new WsInferenceErrorEvent(args.wsErrorEvent);
    }
  }
};
WsInferenceEvent.prototype = {};
WsInferenceEvent.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.acceptedEvent = new WsInferenceAcceptedEvent();
        this.acceptedEvent.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRUCT) {
        this.startedEvent = new WsInferenceStartedEvent();
        this.startedEvent.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRUCT) {
        this.initializedEvent = new WsInferenceInitializedEvent();
        this.initializedEvent.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRUCT) {
        this.progressEvent = new WsInferenceProgressEvent();
        this.progressEvent.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRUCT) {
        this.completionEvent = new WsInferenceCompletionEvent();
        this.completionEvent.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.STRUCT) {
        this.errorEvent = new WsInferenceErrorEvent();
        this.errorEvent.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.STRUCT) {
        this.wsErrorEvent = new WsInferenceErrorEvent();
        this.wsErrorEvent.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

WsInferenceEvent.prototype.write = function(output) {
  output.writeStructBegin('WsInferenceEvent');
  if (this.acceptedEvent !== null && this.acceptedEvent !== undefined) {
    output.writeFieldBegin('acceptedEvent', Thrift.Type.STRUCT, 1);
    this.acceptedEvent.write(output);
    output.writeFieldEnd();
  }
  if (this.startedEvent !== null && this.startedEvent !== undefined) {
    output.writeFieldBegin('startedEvent', Thrift.Type.STRUCT, 2);
    this.startedEvent.write(output);
    output.writeFieldEnd();
  }
  if (this.initializedEvent !== null && this.initializedEvent !== undefined) {
    output.writeFieldBegin('initializedEvent', Thrift.Type.STRUCT, 3);
    this.initializedEvent.write(output);
    output.writeFieldEnd();
  }
  if (this.progressEvent !== null && this.progressEvent !== undefined) {
    output.writeFieldBegin('progressEvent', Thrift.Type.STRUCT, 4);
    this.progressEvent.write(output);
    output.writeFieldEnd();
  }
  if (this.completionEvent !== null && this.completionEvent !== undefined) {
    output.writeFieldBegin('completionEvent', Thrift.Type.STRUCT, 5);
    this.completionEvent.write(output);
    output.writeFieldEnd();
  }
  if (this.errorEvent !== null && this.errorEvent !== undefined) {
    output.writeFieldBegin('errorEvent', Thrift.Type.STRUCT, 6);
    this.errorEvent.write(output);
    output.writeFieldEnd();
  }
  if (this.wsErrorEvent !== null && this.wsErrorEvent !== undefined) {
    output.writeFieldBegin('wsErrorEvent', Thrift.Type.STRUCT, 7);
    this.wsErrorEvent.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

WsInferenceResponse = function(args) {
  this.events = null;
  if (args) {
    if (args.events !== undefined && args.events !== null) {
      this.events = Thrift.copyList(args.events, [WsInferenceEvent]);
    }
  }
};
WsInferenceResponse.prototype = {};
WsInferenceResponse.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.LIST) {
        this.events = [];
        var _rtmp36 = input.readListBegin();
        var _size5 = _rtmp36.size || 0;
        for (var _i7 = 0; _i7 < _size5; ++_i7) {
          var elem8 = null;
          elem8 = new WsInferenceEvent();
          elem8.read(input);
          this.events.push(elem8);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

WsInferenceResponse.prototype.write = function(output) {
  output.writeStructBegin('WsInferenceResponse');
  if (this.events !== null && this.events !== undefined) {
    output.writeFieldBegin('events', Thrift.Type.LIST, 1);
    output.writeListBegin(Thrift.Type.STRUCT, this.events.length);
    for (var iter9 in this.events) {
      if (this.events.hasOwnProperty(iter9)) {
        iter9 = this.events[iter9];
        iter9.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

