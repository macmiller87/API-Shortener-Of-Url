export class UserToken {
  private _user_id: string;

  constructor(id: string) {
    this.user_id = id;
  }

  public set user_id(user_id: string) {
    this._user_id = user_id;
  }

  public get user_id(): string {
    return this._user_id;
  }
}
