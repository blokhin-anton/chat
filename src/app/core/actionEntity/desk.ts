import { DeskEntity } from "../entity/desk";
import { Card } from "./card";

export class Desk extends DeskEntity {

  constructor(id: number, initCard?: Card[]) {
    const card = initCard
      ? initCard
      : Desk.create();
    super(id, card);
  }

  static create(count: number = 11) {
    const desk: Card[] = [];
    while(count-- > 0) {
      desk.push(
        new Card(count, count.toString(), count)
      )
    }
    return desk.sort(
      () => { return 0.5 - Math.random()}
    );
  }

  takeCard(): Card | unknown {
    return this.list.pop();
  }
}