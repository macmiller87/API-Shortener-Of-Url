import { User } from "../entities/User";

export interface ICreateUserToken {
  user_id: string;
}

export interface ICreateUsersTokenDTO {
  token: string;
  user: Pick<User, "userName" | "email">;
}
