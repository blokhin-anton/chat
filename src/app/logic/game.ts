import { Player } from '../core/actionEntity/palyer';
import { Desk } from '../core/actionEntity/desk';

import { Table } from '../core/actionEntity/table';

import { actionList } from '../action/actionList';

import { ActionProcess } from '../action/index';

import { classLoger } from '../logger/loggerDecorators';
import { Card } from '../core/actionEntity/card';

@classLoger
export class Game {

  private table: Table;

  constructor(table: Table) {
    this.table = table;
  }

  /**
   * Getter players
   * @return {Player[] }
   */
  public getPlayers(): Player[]  {
    return this.table.getPlayers();
  }

  /**
   * Getter desk
   * @return {Desk}
   */
  public getDesk(): Desk {
    return this.table.getDesk();
  }

  private dealCard() {
    this.getPlayers().map(
      (player) => {
        player.takeCard(this.getDesk().takeCard())
      }
    );
  }

  init() {
    this.dealCard();
    this.dealCard();
    // this.start();
  }

  async start() {
    const iterator = this.playerIterator();
    let isStopped = 0;

    while (isStopped < 7) {
      let player = iterator.next();
      await this.steep(player);
      ++isStopped;
    }

    console.log(this.table.getDesk());
    console.log(this.table.showCartOnTable());
  }

  private async steep(player: Player) {
    // send action request
    console.log(`sendind request for user ${player.id}`);
    const playerAction = await this.sendRequest(player);
    console.log(`getting request for user ${player.id} with ${playerAction}`);
    const card = player.putCard();

    this.table.pushCard(<Card>card);

    /*await ActionProcess.exec(playerAction, {
      card: player.putCard(),
      table: this.table
    });*/
  }

  private async sendRequest(player: Player, type?: any): Promise<keyof typeof actionList> {
    await new Promise(
      (resolve) => setTimeout(resolve, 500)
    );
    return actionList.TAKE;
  }

  private playerIterator(): { next: () => Player } {
    let currentPlayer = -1;
    return {
      next: () => {
        ++currentPlayer;
        if (!this.table.getPlayers()[currentPlayer]) {
          currentPlayer = 0;
        }
        let player = this.table.getPlayers()[currentPlayer];
        return player;
      }
    }

  }

}