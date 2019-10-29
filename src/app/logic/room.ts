import { TableAction } from './table';
import { User } from '../core/entity/user';
import { Table } from '../core/entity/table';

export class RoomAction {
  private _users: User[] = [];
  private _tables: TableAction[] = [];

  enter(user: User): void {
    this._users.push(user);
  }

  exit(user: User): void {
    this._users = this._users.filter( us => us.id !== user.id );
  }

  createTable(table: Table): TableAction {
    const playTable = new TableAction(table);
    this._tables.push(playTable);
    return playTable;
  }

  destroyTable(table: Table): void {
    this._tables = this._tables.filter( tab => tab.table.id !== table.id );
  }

  joinToTable(table: Table, users: User[]): void {
    this._tables[this._tables.findIndex( tblAct => tblAct.table.id === table.id )].joinPlayers(users);
  }

  
}