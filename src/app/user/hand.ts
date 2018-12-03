import Card from '../card/card';
class Hand {
    private cards: Array<Card> = [];
    
    public takeCard(card: Card): void {
        this.cards.push(card);
    }

    public putCard(id: number): Card {
        let card = this.cards[id];
        delete this.cards[id];
        return card;
    }

    public viewHand(): Array<Card> {
        return this.cards;
    }

    putLastCard(): Card | void {
        let card = this.cards.pop();
        if (card) {
            return card;    
        }
        
    }
}
export default Hand;