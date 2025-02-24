import { IUserRepository } from "../repository/implementation-IUserRepository/IUserRepository";
import { AppError } from "src/utils/errors/AppError";
import { Injectable } from "@nestjs/common";
import { User } from "../entities/User";
import { randomUUID } from "node:crypto";
import { hash } from "bcryptjs";

interface userCreateRequest {
  userName: string;
  email: string;
  password: string;
}

@Injectable()
export class CreateUserUseCase {

  constructor(private userRepository: IUserRepository) {}

  async execute(request: userCreateRequest): Promise<User> {

    const { userName, email, password } = request;

    if(userName === "" || email === "" || password === "") {
      throw new AppError("Null Data is Not Allowed, Please fill in All Datas !", 401);

    }else if(typeof(userName) !== "string" ||typeof(email) !== "string" ||typeof(password) !== "string") {
      throw new AppError("All datas must be a string !", 401);

    }else {

      const regexMail = /^\S+@\S+\.\S+$/;

      if(!regexMail.test(email)) {
        throw new AppError("Please Put a Valid Email !", 401);
      }

      const checkUserAlreadyExist = await this.userRepository.findUserByUserName(userName);

      if(checkUserAlreadyExist) {
        throw new AppError("User already exist !", 404);
      }

      const passwordHash = await hash(password, 8);

      const user = {
        user_id: randomUUID(),
        userName,
        email,
        password: passwordHash,
      };

      const createUser = await this.userRepository.create(user);
      return createUser;
    }

  }

}
