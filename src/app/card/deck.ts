import Card from './card';
class Deck {
    private cards: Array<Card>;
    constructor (countCartsInDeck: number) {
        this.cards = [];
        while(countCartsInDeck) {
            this.cards.push(
                new Card(countCartsInDeck.toString(), countCartsInDeck, countCartsInDeck.toString())
            );
            this.cards.sort( () => { return 0.5 - Math.random()} );
            --countCartsInDeck;
        }
    }

    public addCards(card: Card): void {
        this.cards.push(card);
    }

    public getCard(): Card {
        let card = this.cards.pop();
        return card as Card;
    }

}
export default Deck;