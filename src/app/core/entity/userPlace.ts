import { Card } from './card';
import { User } from './user';

export class UserPlace {
  private _user: User;
  private _userCards: Card[];

  constructor(user: User, userCards: Card[] = []) {
    this._user = user;
    this._userCards = userCards;
  }

  /**
   * Getter user
   * @return {User}
   */
  public get user(): User {
    return this._user;
  }

  /**
   * Getter userCards
   * @return {Card[]}
   */
  public get userCards(): Card[] {
    return this._userCards;
  }

  /**
   * Setter user
   * @param {User} value
   */
  public set user(value: User) {
    this._user = value;
  }

  /**
   * Setter userCards
   * @param {Card[]} value
   */
  public set userCards(value: Card[]) {
    this._userCards = value;
  }

}