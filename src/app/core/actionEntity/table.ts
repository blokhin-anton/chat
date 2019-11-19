import { TableEntity } from "../entity/table";
import { Desk } from "./desk";
import { Player } from "./palyer";

export class Table extends TableEntity {
  private _desk: Desk | null = null;
  private _players: Player[] = [];

  initDesk(): void {
    if(!this._desk) {
      this._desk = new Desk(1);
    }
  }

  addUser(user: Player | Player[]): void {
    this._players = this._players.concat(user);
  }

  leaveUser(user: Player): void {
    this._players = this._players.filter( us => us.id !== user.id );
  }
}