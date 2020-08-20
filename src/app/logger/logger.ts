enum channel {
  app,
  logic,
  entity,
  network
}

enum level {
  info,
  notice,
  warning,
  error,
  critical
}

enum mode {
  prod,
  dev,
  test,
  debug
}

type channelType = keyof typeof channel;
type levelType = keyof typeof level;

const defaultChannel: channelType = "app";

interface logTemplate {
  time?: string,
  timestamp?: string,
  target?: string,
  message?: string,
  addition?: any[] | any
}

class Logger {
  private _channel: channelType;
  private _writerInstance: any;

  constructor(logChannel?: channelType) {
    this._channel = logChannel
      ? logChannel
      : defaultChannel;
    }

  get channel(): channelType {
    return this._channel;
  }

  write(level: levelType,log: logTemplate) {
    console.log(level, log);
  }

}

interface ILoggerStage {
  id: string;
  children: ILoggerStage[];
  content: logTemplate;
}

interface ILogerClass extends Object {
  logObjectKey: string;
}
class Utils {
  static unic(): string {
    return Math.random().toString(36).substr(2, 9);
  }

  // add unic key to class if not
  static addUnicKeyToObject(obj: Object|ILogerClass): ILogerClass {
    const unicKeyName = 'logObjectKey';
    if (!obj.hasOwnProperty(unicKeyName)) {
      Object.defineProperty(obj, unicKeyName, {value: Utils.unic()}); 
    }
    return <ILogerClass>obj;
  }
}

class LogStore {
  private static store: { [key: string]: ILoggerStage};
  static setAction(log: ILoggerStage): string {
    const key = Utils.unic();
    Object.defineProperty(LogStore.store, key, {value: log}); 
    return key;
  }

  static getAction(key: string): ILoggerStage|null {
    if (!LogStore.store.hasOwnProperty(key)) {
      return null;
    }
    return LogStore.store[key];
  }
}

class CallStore {
  private constructor() {};
  // line class call stack
  private static store: { [key: string]: {parentId?: string, logId: string}};

  static getState(key: string) {
    if(CallStore.store[key]) {
      return CallStore.store[key];
    }
    return null;
  }

  static push(key: string, log: {parentId?: string, logId: string}) {
    if (!CallStore.getState(key)) {
      CallStore.store[key] = log
    }

    throw new Error("push dublicate key");
  }
}


export class LoggerStage {
  static addClass(obj: Object) {
    // ??? this key first in call tree
    const key = Utils.addUnicKeyToObject(obj).logObjectKey;
    CallStore.push( key, { logId: LogStore.setAction({id: key, children: [], content: { message: `init wath` }}) } );
  }

  static addMethod(log: logTemplate) {
    CallStore.push( Utils.unic(), { logId: LogStore.setAction({id: '', children: [], content: log}) } );
  }
}

export class Log {

  private static instanceChannelList: Logger[] = [];

  private constructor() {}

  private static getCannelInstance(logCannel: channelType = defaultChannel): Logger {
    if ( !this.instanceChannelList[channel[logCannel]] ) {
      this.instanceChannelList[channel[logCannel]] = new Logger(logCannel);
    }
    return this.instanceChannelList[channel[logCannel]];
  }

  public static write(log: logTemplate, level: levelType, logChannel: channelType = defaultChannel) {
    this.getCannelInstance(logChannel).write(level, log);
  }

  public static info(channel: channelType, log: logTemplate) {
    this.getCannelInstance(channel).write("info", log);
  }

  public static notice(channel: channelType, log: logTemplate) {
    this.getCannelInstance(channel).write("notice", log);
  }
}
