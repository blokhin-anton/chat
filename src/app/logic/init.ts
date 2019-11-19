import { Table } from '../core/actionEntity/table';
import { Player } from '../core/actionEntity/palyer';
import { RoomAction } from './room';


const user1 = new Player(1, 'us1', 'name', 'fName', 'lName');
const user2 = new Player(2, 'us2', 'name', 'fName', 'lName');
const user3 = new Player(3, 'us3', 'name', 'fName', 'lName');

export class Init {
  private _rooms: RoomAction[] = [];

  create() {
    const table = new Table(1, 'test table');

    table.addUser([user1, user2, user3]);
    const resuylt = table.start();
    console.log( table.table );
    console.log( table.table.userPlaces );
  }


  destroy() {

  }
}