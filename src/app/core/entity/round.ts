import { Card } from './card';

export class Round {
  private _wager: number;
  private _cardOnTable: Card[];

  constructor(wager: number = 1, cardOnTable: Card[] = []) {
    this._wager = wager;
    this._cardOnTable = cardOnTable;
  }

  /**
   * Getter wager
   * @return {number}
   */
  public get wager(): number {
    return this._wager;
  }

  /**
   * Getter cardOnTable
   * @return {Card[]}
   */
  public get cardOnTable(): Card[] {
    return this._cardOnTable;
  }

}