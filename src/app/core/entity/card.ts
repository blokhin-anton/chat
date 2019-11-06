import { Entity } from "./entity";

export class CardEntity extends Entity {
  private _name: string;
  private _meaning: number;


  constructor(id: number, name: string, meaning: number) {
    super(id);
    this._name = name;
    this._meaning = meaning;
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

  /**
   * Setter name
   * @param {string} value
   */
  public set name(value: string) {
    this._name = value;
  }

  /**
   * Setter meaning
   * @param {number} value
   */
  public set meaning(value: number) {
    this._meaning = value;
  }

}