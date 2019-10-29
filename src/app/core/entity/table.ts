import { Desk } from './desk';
import { User } from './user';
import { UserPlace } from './userPlace';

import { createDesk } from '../factory/desc';

export class Table {
  private _id: number;
  private _desk: Desk;
  private _users: User[];
  private _userPlaces: UserPlace[];

  constructor(id: number, users: User[] = [], userPlaces: UserPlace[] = []) {
    this._id = id;
    this._desk = new Desk(createDesk(21), 21);
    this._users = users;
    this._userPlaces = userPlaces;
  }

  /**
   * Getter id
   * @return {number}
   */
  public get id(): number {
    return this._id;
  }

  /**
   * Getter desk
   * @return {Desk}
   */
  public get desk(): Desk {
    return this._desk;
  }

  /**
   * Getter users
   * @return {User[]}
   */
  public get users(): User[] {
    return this._users;
  }

  /**
   * Getter userPlaces
   * @return {UserPlace[]}
   */
  public get userPlaces(): UserPlace[] {
    return this._userPlaces;
  }

  /**
   * Setter desk
   * @param {Desk} value
   */
  public set desk(value: Desk) {
    this._desk = value;
  }

  /**
   * Setter users
   * @param {User[]} value
   */
  public set users(value: User[]) {
    this._users = value;
  }

  /**
   * Setter userPlaces
   * @param {UserPlace[]} value
   */
  public set userPlaces(value: UserPlace[]) {
    this._userPlaces = value;
  }

}