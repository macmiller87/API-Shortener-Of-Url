import { UserModule } from "src/modules/User/User.module";
import { DatabaseModule } from "./database/Database.module";
import { UrlModule } from "./modules/URL/Url.module";
import { Module } from "@nestjs/common";

@Module({
  imports: [DatabaseModule, UserModule, UrlModule],
})
export class AppModule {}
