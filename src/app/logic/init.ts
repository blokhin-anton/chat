import { Table } from '../core/actionEntity/table';
import { Player } from '../core/actionEntity/palyer';
import { RoomAction } from './room';
import { Game } from './game';


const user1 = new Player(1, 'us1', 'name', 'fName', 'lName');
const user2 = new Player(2, 'us2', 'name', 'fName', 'lName');
const user3 = new Player(3, 'us3', 'name', 'fName', 'lName');

export class Init {
  private _rooms: RoomAction[] = [];

  async create() {
    const table = new Table(1, 'test table');

    table.addPlayer([user1, user2, user3]);

    const game = new Game(table);

    game.init();

    await game.start();


  }


  destroy() {

  }
}