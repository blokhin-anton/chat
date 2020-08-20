import { Log, LoggerStage } from './logger';

export function methodLoger(target: any, propertyName: string, descriptor: Function) {

  Log.info('app', { message: `add method to logging ${propertyName}` });
  /*return function(...args: any[]) {
      let returnValue = descriptor(args).bind(target);
      Log.info('app', { message: `method class ${propertyName}: ${JSON.stringify(args)} => ${returnValue}` });
      return returnValue;
  }*/
}

interface ISomeObject extends Object {
  [key: string]: any;
}

export function classLoger<T extends { new (...args: any[]): {} }>(constructor: T) {
  let propertyes = Object.getOwnPropertyNames(constructor.prototype);
  propertyes = propertyes.reduce(
    (prev: string[], property, index) => {
      if (constructor.prototype.hasOwnProperty(property) && property !== 'constructor') {
        prev.push(property);
      }
      return prev;
    },
    []
  );

  constructor.prototype.midvare = function (methodName: string) {
    const hideName = `__${methodName}`;

    this[hideName] = this[methodName];
    this[methodName] = function(...args: any) {
      const returnValue = this[hideName](...args);
      Log.info('app', { message: `method ${methodName} =>`, addition: [args, returnValue]});
      return returnValue;
    };
  };
  propertyes.map(
    method => {
      try {
        constructor.prototype.midvare(method);
      } catch (e) {
        Log.info('app', { message: `not add logging to ${method}` });
      }
    }
  );

  // Log.info('app', { message: `init class ${constructor.name}` });

  return constructor;
}