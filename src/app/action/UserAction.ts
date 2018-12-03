import User from '../user/user';
import Deck from '../card/deck';
import Card from '../card/card';

/**
 * Взять еще карту
 * @param user 
 * @param deck 
 */
export const gettingCard = (user: User, deck: Deck) => {
    user.getHand().takeCard(deck.getCard());
}

/**
 * Спасовать
 */
export const pass = () => {

}

/**
 * Положить карту
 * @param user 
 * @param id 
 */
export const putCard = (user: User, id: number): Card => {
    return user.getHand().putCard(id);
}