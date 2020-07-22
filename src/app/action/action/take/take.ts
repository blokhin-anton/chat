import { AbstractAction } from '../action';
import { Table } from '../../../core/actionEntity/table';
import { Card } from '../../../core/actionEntity/card';

export interface ITake {
  card: Card,
  table: Table
}

export class TakeAction extends AbstractAction<ITake> {
  protected process(payload: ITake) {
    payload.table.pushCard(payload.card);
  }
}
