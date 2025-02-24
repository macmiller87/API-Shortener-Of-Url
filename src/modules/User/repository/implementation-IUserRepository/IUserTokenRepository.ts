import { ICreateUserToken } from "../../dtos/ICreateTokenDTO";

export abstract class IUserTokenRepository {
  abstract create(user_id: ICreateUserToken): Promise<void>;
}
