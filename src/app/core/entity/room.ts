import { Table } from './table';
export class Room {
  private _id: number;
  private _name: string;
  private _tables: Table[];

  constructor(id: number, name: string, tables: Table[] = []) {
    this._id = id;
    this._name = name;
    this._tables = tables;
  }

  /**
   * Getter id
   * @return {number}
   */
  public get id(): number {
    return this._id;
  }

  /**
   * Getter name
   * @return {string}
   */
  public get name(): string {
    return this._name;
  }

  /**
   * Getter tables
   * @return {Table[]}
   */
  public get tables(): Table[] {
    return this._tables;
  }

  /*addTable( table: Table ) {
    this._tables.push(table);
  }*/
}