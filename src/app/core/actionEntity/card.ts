import { CardEntity } from "../entity/card";

export class Card extends CardEntity {
  private _isHide: boolean = false;

  showCard(): void {
    this._isHide = true;
  }

  hideCard(): void {
    this._isHide = false;
  }

  isCanShowCard(): boolean {
    return this._isHide;
  }

  static entryToCard(cardEntry: CardEntity): Card {
    return new Card(cardEntry.id, cardEntry.name, cardEntry.meaning);
  }
}