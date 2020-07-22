import { Player } from '../core/actionEntity/palyer';
import { Desk } from '../core/actionEntity/desk';

import { Table } from '../core/actionEntity/table';

import { actionList } from '../action/actionList';

import { ActionProcess } from '../action/index';

export class Game {

  private table: Table;

  constructor(table: Table) {
    this.table = table;
  }

  /**
   * Getter players
   * @return {Player[] }
   */
  public get players(): Player[]  {
    return this.table.getPlayers();
  }

  /**
   * Getter desk
   * @return {Desk}
   */
  public get desk(): Desk {
    return this.table.getDesk();
  }

  private dealCard() {
    this.table.getPlayers().map(
      (player) => {
        player.takeCard(this.desk.takeCard())
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
    let isStopped = false;

    while (!isStopped) {
      let player = iterator.next();
      await this.steep(player);
    }
  }

  private async steep(player: Player) {
    // send action request
    console.log(`sendind request for user ${player.id}`);
    const playerAction = await this.sendRequest(player);
    console.log(`getting request for user ${player.id} with ${playerAction}`);
    await ActionProcess.exec(playerAction, {
      card: player.putCard(),
      table: this.table
    });
  }

  private async sendRequest(player: Player, type?: any): Promise<keyof typeof actionList> {
    await new Promise(
      (resolve) => setTimeout(resolve, 5000)
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