import { DatabaseModule } from "src/database/Database.module";
import { UrlController } from "./controller/Url.controller";
import { ShortUrlUseCase } from "./useCases/ShortUrlUseCase";
import { ListAllUserUrlsUseCase } from "./useCases/ListAllUserUrlsUseCase";
import { UpdateUserUrlUseCase } from "./useCases/UpdateUserUrlUseCase";
import { DeleteUserUrlsUseCase } from "./useCases/DeleteUserUrlUseCase";
import { Module } from "@nestjs/common";

@Module({
  imports: [DatabaseModule],
  controllers: [UrlController],
  providers: [
    ShortUrlUseCase, 
    ListAllUserUrlsUseCase,
    UpdateUserUrlUseCase,
    DeleteUserUrlsUseCase
  ],
})

export class UrlModule {}