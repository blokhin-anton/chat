import { Entity } from "./entity";

export class TableEntity extends Entity {

  private _name: string;

  constructor(id: number, name: string) {
    super(id);
    this._name = name;
  }

  /**
   * Getter name
   * @return {string}
   */
  public get name(): string {
    return this._name;
  }

  /**
   * Setter name
   * @param {string} value
   */
  public set name(value: string) {
    this._name = value;
  }

}