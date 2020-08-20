import { TableEntity } from "../entity/table";
import { Desk } from "./desk";
import { Player } from "./palyer";
import { Card } from './card';

export class Table extends TableEntity {
  private _desk: Desk;
  private _players: Player[] = [];
  private _cardsOnTable: Card[] = [];

  constructor(id: number, name: string) {
    super(id, name);
    this._desk = new Desk(1);
  }

  initDesk(): void {
    if(!this._desk) {
      this._desk = new Desk(1);
    }
  }

  addPlayer(user: Player | Player[]): void {
    this._players = this._players.concat(user);
  }

  getPlayers(): Player[] {
    return this._players;
  }

  getDesk(): Desk {
    return this._desk;
  }

  pushCard(card: Card): void {
    this._cardsOnTable.push(card);
  }

  showCartOnTable() {
    return this._cardsOnTable;
  }

  leavePlayer(user: Player): void {
    this._players = this._players.filter( us => us.id !== user.id );
  }
}