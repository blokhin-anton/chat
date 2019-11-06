import { PlayerEntity } from "../entity/player";
import { Card } from "./card";

export class Player extends PlayerEntity {
  takeCard(card: Card): void {
    this.showCards.push(card);
  }

  takePrivateCard(card: Card): void {
    this.privateCard.push(card);
  }

  takeHideCard(card: Card): void {
    this.hideCards.push(card);
  }

  putCard(): Card | unknown {
    return this.showCards.pop();
  }

  putPrivateCard(): Card | unknown {
    return this.privateCard.pop();
  }

  putHideCard(): Card | unknown {
    return this.hideCards.pop();
  }
}