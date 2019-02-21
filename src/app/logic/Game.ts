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

    async start(): Promise<boolean> {
        this.table.init();
        let step = await this.loop(this.table.getUsers(), this.table.getDeck());
        return true;
    }

    async loop(users: Array<User>, deck: Deck) {
        users.map(
            (user) => {
                return this.step(user, deck);
            }
        );
        console.log('edd loop');
    }

    async step(user: User, deck: Deck) {
        console.log('await getUserAction');
        let action = await this.serv.getUserAction(user.getId());
        console.log('getting getUserAction');
        if (action) {
            console.log(user.getLogin(), 'action');
            user.getHand().takeCard(deck.getCard());
        }
        return true;
    }

    endStep() {
        
    }
}

export default Game;