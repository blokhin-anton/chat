import Table from '../baseLogic/Table';
import User from '../user/user';
import Deck from '../card/deck';
import Serv from '../serv'

class Game {
    private table: Table;
    private serv: Serv;
    constructor(table: Table, serv: Serv) {
        this.table = table;
        this.serv = serv;
    }

    start(): void {
        this.table.init();
        // this.loop(this.table.getUsers(), this.table.getDeck());
    }

    loop(users: Array<User>, deck: Deck) {
        users.forEach(async(user) => {
            let action = await this.serv.getUserAction(user.getId());
            if (action) {
                user.getHand().takeCard(deck.getCard());
            }
        });
    }

    step(user: User) {

    }

    endStep() {
        
    }
}

export default Game;