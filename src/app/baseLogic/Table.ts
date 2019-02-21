import User from '../user/user';
import Deck from '../card/deck';
import Card from '../card/card';
class Table {
    private users: Array<User> = [];
    private deck: Deck;
    private cardOnTable: Array<Array<Card>> = [];
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
            this.putCardOnTable(user, <Card>user.getHand().putLastCard());
        });
    }

    getTable(): {deck: Deck, users: Array<User>, card: Array<Array<Card>>} {
        return {
            deck: this.deck,
            users: this.users,
            card: this.getCardOnTable()
        };
    }

    getUsers(): Array<User> {
        return this.users;
    }
    getDeck(): Deck {
        return this.deck;
    }

    putCardOnTable(user: User, card: Card) {
        if (!this.cardOnTable[user.getId()]) {
            this.cardOnTable[user.getId()] = Array();
        }
        this.cardOnTable[user.getId()].push(card);
    }

    getCardOnTable(): Array<Array<Card>> {
        return this.cardOnTable;
    }

}
export default Table;