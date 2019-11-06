import { Entity } from './entity';
import { CardEntity } from './card';

export class DeskEntity extends Entity {

  private _list: CardEntity[];

  constructor(id: number, list: CardEntity[]) {
    super(id);
    this._list = list;
  }

  /**
   * Getter list
   * @return {CardEntity[]}
   */
  public get list(): CardEntity[] {
    return this._list;
  }

  /**
   * Setter list
   * @param {CardEntity[]} value
   */
  public set list(value: CardEntity[]) {
    this._list = value;
  }

}