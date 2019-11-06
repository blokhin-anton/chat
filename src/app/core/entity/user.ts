import { Entity } from "./entity";

export class UserEntity extends Entity {
  private _nick: string;
  private _name: string;
  private _firstName: string;
  private _lastName: string;

  constructor(id: number, nick: string, name: string, firstName: string, lastName: string) {
    super(id);
    this._nick = nick;
    this._name = name;
    this._firstName = firstName;
    this._lastName = lastName;
  }

  /**
   * Getter nick
   * @return {string}
   */
  public get nick(): string {
    return this._nick;
  }

  /**
   * Getter name
   * @return {string}
   */
  public get name(): string {
    return this._name;
  }

  /**
   * Getter firstName
   * @return {string}
   */
  public get firstName(): string {
    return this._firstName;
  }

  /**
   * Getter lastName
   * @return {string}
   */
  public get lastName(): string {
    return this._lastName;
  }

  /**
   * Setter nick
   * @param {string} value
   */
  public set nick(value: string) {
    this._nick = value;
  }

  /**
   * Setter name
   * @param {string} value
   */
  public set name(value: string) {
    this._name = value;
  }

  /**
   * Setter firstName
   * @param {string} value
   */
  public set firstName(value: string) {
    this._firstName = value;
  }

  /**
   * Setter lastName
   * @param {string} value
   */
  public set lastName(value: string) {
    this._lastName = value;
  }

}