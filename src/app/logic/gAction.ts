import { Card } from "../core/actionEntity/card";

export class GAction {
  addCard = (): void => {};
  putCard = (): number => 1;

  static gAction(): GAction {
    return new GAction();
  }
}