import User from '../user/user';
import Deck from '../card/deck';
class Table {
    private users: Array<User> = [];
    private deck: Deck;
    constructor (cardCount: number, standartLimit: number) {
        this.deck = new Deck(cardCount);
    }

    public appendUser(user: User): void {
        this.users.push(user);
    }

    init() {
        this.users.forEach(user => {
            user.getHand().takeCard(this.deck.getCard());
            user.getHand().takeCard(this.deck.getCard());
        });
    }

    getTable(): {deck: Deck, users: Array<User>} {
        return {
            deck: this.deck,
            users: this.users
        };
    }

}
export default Table;