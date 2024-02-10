//
// Autogenerated by Thrift Compiler (0.13.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
if (typeof Int64 === 'undefined' && typeof require === 'function') {
  var Int64 = require('node-int64');
}


ApiSinglePromptRequest = function(args) {
  this.request_id = null;
  this.prompt = null;
  this.stream_response = null;
  this.only_new_tokens = null;
  this.generation_config = null;
  if (args) {
    if (args.request_id !== undefined && args.request_id !== null) {
      this.request_id = args.request_id;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field request_id is unset!');
    }
    if (args.prompt !== undefined && args.prompt !== null) {
      this.prompt = args.prompt;
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
ApiSinglePromptRequest.prototype = {};
ApiSinglePromptRequest.prototype.read = function(input) {
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
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.prompt = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.BOOL) {
        this.stream_response = input.readBool().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.BOOL) {
        this.only_new_tokens = input.readBool().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
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

ApiSinglePromptRequest.prototype.write = function(output) {
  output.writeStructBegin('ApiSinglePromptRequest');
  if (this.request_id !== null && this.request_id !== undefined) {
    output.writeFieldBegin('request_id', Thrift.Type.STRING, 1);
    output.writeString(this.request_id);
    output.writeFieldEnd();
  }
  if (this.prompt !== null && this.prompt !== undefined) {
    output.writeFieldBegin('prompt', Thrift.Type.STRING, 2);
    output.writeString(this.prompt);
    output.writeFieldEnd();
  }
  if (this.stream_response !== null && this.stream_response !== undefined) {
    output.writeFieldBegin('stream_response', Thrift.Type.BOOL, 3);
    output.writeBool(this.stream_response);
    output.writeFieldEnd();
  }
  if (this.only_new_tokens !== null && this.only_new_tokens !== undefined) {
    output.writeFieldBegin('only_new_tokens', Thrift.Type.BOOL, 4);
    output.writeBool(this.only_new_tokens);
    output.writeFieldEnd();
  }
  if (this.generation_config !== null && this.generation_config !== undefined) {
    output.writeFieldBegin('generation_config', Thrift.Type.STRUCT, 5);
    this.generation_config.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

ApiSinglePromptStream = function(args) {
  this.text = null;
  if (args) {
    if (args.text !== undefined && args.text !== null) {
      this.text = args.text;
    }
  }
};
ApiSinglePromptStream.prototype = {};
ApiSinglePromptStream.prototype.read = function(input) {
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
        this.text = input.readString().value;
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

ApiSinglePromptStream.prototype.write = function(output) {
  output.writeStructBegin('ApiSinglePromptStream');
  if (this.text !== null && this.text !== undefined) {
    output.writeFieldBegin('text', Thrift.Type.STRING, 1);
    output.writeString(this.text);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

ApiBatchPromptRequest = function(args) {
  this.prompts = null;
  this.only_new_tokens = null;
  this.generation_config = null;
  if (args) {
    if (args.prompts !== undefined && args.prompts !== null) {
      this.prompts = Thrift.copyList(args.prompts, [SinglePrompt]);
    }
    if (args.only_new_tokens !== undefined && args.only_new_tokens !== null) {
      this.only_new_tokens = args.only_new_tokens;
    }
    if (args.generation_config !== undefined && args.generation_config !== null) {
      this.generation_config = new GenerationConfig(args.generation_config);
    }
  }
};
ApiBatchPromptRequest.prototype = {};
ApiBatchPromptRequest.prototype.read = function(input) {
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
        this.only_new_tokens = input.readBool().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
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

ApiBatchPromptRequest.prototype.write = function(output) {
  output.writeStructBegin('ApiBatchPromptRequest');
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
  if (this.only_new_tokens !== null && this.only_new_tokens !== undefined) {
    output.writeFieldBegin('only_new_tokens', Thrift.Type.BOOL, 2);
    output.writeBool(this.only_new_tokens);
    output.writeFieldEnd();
  }
  if (this.generation_config !== null && this.generation_config !== undefined) {
    output.writeFieldBegin('generation_config', Thrift.Type.STRUCT, 3);
    this.generation_config.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

ApiBatchPrompt = function(args) {
  this.request_id = null;
  this.prompt = null;
  this.response = null;
  if (args) {
    if (args.request_id !== undefined && args.request_id !== null) {
      this.request_id = args.request_id;
    }
    if (args.prompt !== undefined && args.prompt !== null) {
      this.prompt = args.prompt;
    }
    if (args.response !== undefined && args.response !== null) {
      this.response = args.response;
    }
  }
};
ApiBatchPrompt.prototype = {};
ApiBatchPrompt.prototype.read = function(input) {
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
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.prompt = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.response = input.readString().value;
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

ApiBatchPrompt.prototype.write = function(output) {
  output.writeStructBegin('ApiBatchPrompt');
  if (this.request_id !== null && this.request_id !== undefined) {
    output.writeFieldBegin('request_id', Thrift.Type.STRING, 1);
    output.writeString(this.request_id);
    output.writeFieldEnd();
  }
  if (this.prompt !== null && this.prompt !== undefined) {
    output.writeFieldBegin('prompt', Thrift.Type.STRING, 2);
    output.writeString(this.prompt);
    output.writeFieldEnd();
  }
  if (this.response !== null && this.response !== undefined) {
    output.writeFieldBegin('response', Thrift.Type.STRING, 3);
    output.writeString(this.response);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

ApiBatchPromptResponse = function(args) {
  this.responses = null;
  if (args) {
    if (args.responses !== undefined && args.responses !== null) {
      this.responses = Thrift.copyList(args.responses, [ApiBatchPrompt]);
    }
  }
};
ApiBatchPromptResponse.prototype = {};
ApiBatchPromptResponse.prototype.read = function(input) {
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
        this.responses = [];
        var _rtmp36 = input.readListBegin();
        var _size5 = _rtmp36.size || 0;
        for (var _i7 = 0; _i7 < _size5; ++_i7) {
          var elem8 = null;
          elem8 = new ApiBatchPrompt();
          elem8.read(input);
          this.responses.push(elem8);
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

ApiBatchPromptResponse.prototype.write = function(output) {
  output.writeStructBegin('ApiBatchPromptResponse');
  if (this.responses !== null && this.responses !== undefined) {
    output.writeFieldBegin('responses', Thrift.Type.LIST, 1);
    output.writeListBegin(Thrift.Type.STRUCT, this.responses.length);
    for (var iter9 in this.responses) {
      if (this.responses.hasOwnProperty(iter9)) {
        iter9 = this.responses[iter9];
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
