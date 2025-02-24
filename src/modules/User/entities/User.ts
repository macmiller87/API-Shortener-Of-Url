import { ICreateUserDTO } from "../dtos/ICreateUserDTO";

export class User {
  private userProps?: ICreateUserDTO;

  constructor(props: ICreateUserDTO) {
    this.userProps = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public set user_id(user_id: string) {
    this.userProps.user_id = user_id;
  }

  public get user_id() {
    return this.userProps.user_id;
  }

  public set userName(userName: string) {
    this.userProps.userName = userName;
  }

  public get userName() {
    return this.userProps.userName;
  }

  public set email(email: string) {
    this.userProps.email = email;
  }

  public get email() {
    return this.userProps.email;
  }

  public set password(password: string) {
    this.userProps.password = password;
  }

  public get password() {
    return this.userProps.password;
  }

  public set createdAt(createdAt: Date) {
    this.userProps.createdAt = createdAt;
  }

  public get createdAt() {
    return this.userProps.createdAt;
  }
  
}
