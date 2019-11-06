import { UserEntity } from "./user";
import { CardEntity } from "./card";

export class PlayerEntity extends UserEntity {
  private _privateCard: CardEntity[] = [];
  private _hideCards: CardEntity[] = [];
  private _showCards: CardEntity[] = [];

  /**
   * Getter privateCard
   * @return {CardEntity[] }
   */
  public get privateCard(): CardEntity[]  {
    return this._privateCard;
  }

  /**
   * Getter hideCards
   * @return {CardEntity[] }
   */
  public get hideCards(): CardEntity[]  {
    return this._hideCards;
  }

  /**
   * Getter showCards
   * @return {CardEntity[] }
   */
  public get showCards(): CardEntity[]  {
    return this._showCards;
  }

  /**
   * Setter privateCard
   * @param {CardEntity[] } value
   */
  public set privateCard(value: CardEntity[] ) {
    this._privateCard = value;
  }

  /**
   * Setter hideCards
   * @param {CardEntity[] } value
   */
  public set hideCards(value: CardEntity[] ) {
    this._hideCards = value;
  }

  /**
   * Setter showCards
   * @param {CardEntity[] } value
   */
  public set showCards(value: CardEntity[] ) {
    this._showCards = value;
  }

}