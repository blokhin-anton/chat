export class Entity {
  private _id: number;

  constructor(id: number) {
    this._id = id;
  }

  /**
   * Getter id
   * @return {number}
   */
  public get id(): number {
    return this._id;
  }

}