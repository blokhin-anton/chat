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
  addition?: Blob
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

export class Log {

  private static instanceChannelList: Logger[];

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
