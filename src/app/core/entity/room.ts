import { Entity } from "./entity";

export class RoomEntity extends Entity {
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

}