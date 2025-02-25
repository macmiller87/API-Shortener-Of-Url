import { IUserTokenRepository } from "../repository/implementation-IUserRepository/IUserTokenRepository";
import { IUserRepository } from "../repository/implementation-IUserRepository/IUserRepository";
import { AppError } from "src/utils/errors/AppError";
import { ICreateUsersTokenDTO } from "../dtos/ICreateTokenDTO";
import { Injectable } from "@nestjs/common";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface userAuthRequest {
  email: string;
  password: string;
}

@Injectable()
export class GenerateUserTokenUseCase {

  constructor(
    private userRepository: IUserRepository,
    private userTokenRepository: IUserTokenRepository,
  ) {}

  async execute(request: userAuthRequest): Promise<ICreateUsersTokenDTO> {
    
    const { email, password } = request;

    if(email === "" || password === "") {
      throw new AppError("Null Data is Not Allowed, Please fill in All Datas !", 401);

    }else if(typeof email !== "string" || typeof password !== "string") {
      throw new AppError("All datas must be a string !", 401);

    }else {

      const regexMail = /^\S+@\S+\.\S+$/;

      if(!regexMail.test(email)) {
        throw new AppError("Please Put a Valid Email !", 401);
      }

      const user = await this.userRepository.findUserByEmail(email);

      if(!user) {
        throw new AppError("This isn't a user email valid !", 401);
      }

      const passwordMatch = await compare(password, user.password);

      if(!passwordMatch) {
        new AppError("Invalid password !", 401);
      }

      const token = sign({ user }, process.env.SECRET, {
        subject: user.user_id,
      }); 

      await this.userTokenRepository.create({
        user_id: user.user_id,
      });

      return {
        user: {
          user_id: user.user_id,
          userName: user.userName,
          email: user.email,
        },
        token,
      };

    }

  }

}
