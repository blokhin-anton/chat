export class User {
  private _id: number;
  private _name: string;
  private _heathCount: number;

  constructor(id: number, name: string, heathCount: number = 10) {
    this._id = id;
    this._name = name;
    this._heathCount = heathCount;
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
   * Getter heathCount
   * @return {number}
   */
  public get heathCount(): number {
    return this._heathCount;
  }

}