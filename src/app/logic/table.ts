import { Table } from "../core/entity/table";
import { User } from "../core/entity/user";
import { UserPlace } from "../core/entity/userPlace";

import { createDesk } from '../core/factory/desc';
import { Desk } from "../core/entity/desk";

export class TableAction {
  private _table: Table;
  // private _usersPalce: UserPlace[] = [];
  private _start: boolean;

  constructor(table: Table) {
    this._table = table;
    this._start = false;
  }

  /**
   * Getter table
   * @return {Table}
   */
  public get table(): Table {
    return this._table;
  }

  /**
   * Getter usersPalce
   * @return {UserPlace[] }
   */
  /*public get usersPalce(): UserPlace[]  {
    return this._usersPalce;
  }*/

  joinPlayers(users: User[]): void {
    if (this._start) {
      throw new Error('is started');
    }
    this._table.userPlaces = this._table.userPlaces.concat(
      users.map(
        user => ( new UserPlace(user) )
      )
    );
    /*if (this._table.userPlaces.length > 1) {
      this.start();
    }*/
  }

  start() {
    if (this._start) {
      throw new Error('begin');
    }
    this._start = true;
    // this._table.desk = new Desk( createDesk(21), 21 );
    this.distribution();
    this.distribution();
    return this._table.userPlaces.map(
      usPls => {
        return usPls.userCards.reduce(
          (prev, card) => { return prev + card.meaning },
          0
        )
      }
    )
    // run
  }

  stop() {
    this._start = false;
  }

  private distribution(): void {
    this._table.userPlaces.forEach(
      usPls => {
        const card = this._table.desk.list.pop();
        if (card) { usPls.userCards.push(card) }
      }
    )
  }

}