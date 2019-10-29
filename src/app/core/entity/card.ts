export class Card {
  private _id: number;
  private _name: string;
  private _meaning: number;


  constructor(id: number, name: string, meaning: number) {
    this._id = id;
    this._name = name;
    this._meaning = meaning;
  }

  /**
   * Getter id
   * @return {number}
   */
  public get id(): number {
    return this._id;
  }

  /**
   * Getter name
   * @return {string}
   */
  public get name(): string {
    return this._name;
  }

  /**
   * Getter meaning
   * @return {number}
   */
  public get meaning(): number {
    return this._meaning;
  }

}