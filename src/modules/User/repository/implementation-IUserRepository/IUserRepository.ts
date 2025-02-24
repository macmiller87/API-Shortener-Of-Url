import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";

export abstract class IUserRepository {
  abstract create(datas: ICreateUserDTO): Promise<User>;
  abstract findUserByUserName(userName: string): Promise<User>;
  abstract findUserByEmail(email: string): Promise<User>;
}
