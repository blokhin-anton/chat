import { User } from '../core/entity/user';

import { Room } from '../core/entity/room';
import { TableAction } from './table';
import { Table } from '../core/entity/table';

const user1 = new User(1, 'user1');
const user2 = new User(2, 'user2');
const user3 = new User(3, 'user3');

export class Init {
  private _rooms: Room[] = [];

  create() {
    const table = new TableAction(
      new Table(1)
    );

    table.joinPlayers([user1, user2, user3]);
    const resuylt = table.start();
    console.log( table.table );
    console.log( table.table.userPlaces );
  }


  destroy() {

  }
}