export abstract class AbstractAction<T> {
  protected abstract process(payload: T): void;
  /*public execute(payload: T): void {
    this.process(payload);
  }*/
}

export function actionDecorator<AbstractAction>(target: AbstractAction) {
  target.execute = (payload ) => {};
}