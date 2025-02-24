import { DatabaseModule } from "src/database/Database.module";
import { UrlController } from "./controller/Url.controller";
import { ShortUrlUseCase } from "./useCases/ShortUrlUseCase";
import { Module } from "@nestjs/common";

@Module({
  imports: [DatabaseModule],
  controllers: [UrlController],
  providers: [ShortUrlUseCase],
})

export class UrlModule {}