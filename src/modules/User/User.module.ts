import { UserController } from "src/modules/User/controller/User.controller";
import { DatabaseModule } from "src/database/Database.module";
import { CreateUserUseCase } from "src/modules/User/useCases/CreateUserUseCase";
import { GenerateUserTokenUseCase } from "./useCases/GenerateUserTokenUseCase";
import { Module } from "@nestjs/common";

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [CreateUserUseCase, GenerateUserTokenUseCase],
})

export class UserModule {}
