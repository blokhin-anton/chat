import { Card } from './card';

export class Desk {
  private _list: Card[];
  private _count: number;

  constructor(list: Card[], count: number) {
    this._list = list;
    this._count = count;
  }

  /**
   * Getter list
   * @return {Card[]}
   */
  public get list(): Card[] {
    return this._list;
  }

  /**
   * Getter count
   * @return {number}
   */
  public get count(): number {
    return this._count;
  }

  /**
   * Setter list
   * @param {Card[]} value
   */
  public set list(value: Card[]) {
    this._list = value;
  }

  /**
   * Setter count
   * @param {number} value
   */
  public set count(value: number) {
    this._count = value;
  }

}