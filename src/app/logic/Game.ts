import Table from '../baseLogic/Table';
import User from '../user/user';
import Deck from '../card/deck';

class Game {
    private currentUser: User = null;
    private users: Array<User>;
    private deck: Deck
    constructor(table: Table) {
        let temp = table.getTable();
        this.deck = temp.deck;
        this.users = temp.users;
    }

    start(): void {
        this.loop();
    }

    loop(): {

    }

    step() {

    }

    endStep() {
        
    }
}