import { Player } from '../core/actionEntity/palyer';
import { Desk } from '../core/actionEntity/desk';
import { Card } from '../core/actionEntity/card';
import { GAction } from './gAction';

export class Game {
  private _players: Player[] = [];
  private _desk: Desk;

  constructor(players: Player[] , desk: Desk) {
    this._players = players;
    this._desk = desk;
  }

  /**
   * Getter players
   * @return {Player[] }
   */
  public get players(): Player[]  {
    return this._players;
  }

  /**
   * Getter desk
   * @return {Desk}
   */
  public get desk(): Desk {
    return this._desk;
  }

  /**
   * Setter players
   * @param {Player[] } value
   */
  public set players(value: Player[] ) {
    this._players = value;
  }

  /**
   * Setter desk
   * @param {Desk} value
   */
  public set desk(value: Desk) {
    this._desk = value;
  }

  public initG(): void {
    this.dealCards();
    this.dealCards();
  }

  private dealCards(player?: Player[]): void {
    let playerInGame: Player[];
    if (player) {
      playerInGame = this._players.filter(
        playerL => player.some( playerG => playerG.id === playerL.id )
      );
    } else {
      playerInGame = this._players;
    }
    playerInGame.forEach(
      player => {
        const card = this._desk.takeCard();
        if (card) {
          player.takePrivateCard( Card.entryToCard(card) )
        }
      }
    );
  }

  private loop() {
    GAction.gAction();
    
  }

}