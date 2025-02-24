import { CreateUserUseCase } from "src/modules/User/useCases/CreateUserUseCase";
import { GenerateUserTokenUseCase } from "../useCases/GenerateUserTokenUseCase";
import { Body, Controller, Post } from "@nestjs/common";
import { ICreateUserDTO } from "src/modules/User/dtos/ICreateUserDTO";

@Controller("users")
export class UserController {
  constructor(
    private createUser: CreateUserUseCase,
    private createUserToken: GenerateUserTokenUseCase,
  ) {}

  @Post()
  async create(@Body() body: ICreateUserDTO) {
    const { userName, email, password } = body;

    const user = await this.createUser.execute({
      userName,
      email,
      password,
    });

    return user;
  }

  @Post("userToken")
  async createToken(@Body() body: ICreateUserDTO) {
    const { email, password } = body;

    const user = await this.createUserToken.execute({
      email,
      password,
    });

    return user;
  }
}
