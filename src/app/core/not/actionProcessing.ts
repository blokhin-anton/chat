type procType<T> = keyof T;
type processingHandlers<U> = {
  [P in procType<U>]: U[P]
};

export class ActionProcessing<T> {
  private _id: number;
  private _actionHandlers: processingHandlers<T>;

  constructor(id: number, proc: processingHandlers<T> ) {
    this._id = id;
    this._actionHandlers = proc;
  }

  execute(action: procType<T>, payload?: any ) {
    try {
      const handler = this._actionHandlers[action];
      if (typeof handler === 'function') {
        return handler(payload);
      }
      return handler;
    } catch(e) {
      console.error(`executing error: ${e}`);
    }
  }
}