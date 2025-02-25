import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { EnsureUserAuthenticate } from "./utils/auth/EnsureUserAuthenticate";
import { UserModule } from "src/modules/User/User.module";
import { DatabaseModule } from "./database/Database.module";
import { UrlModule } from "./modules/URL/Url.module";
import { UrlController } from "./modules/URL/controller/Url.controller";

@Module({
  imports: [DatabaseModule, UserModule, UrlModule],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
      consumer
        .apply(EnsureUserAuthenticate)
        .exclude(
          { path: "users", method: RequestMethod.POST },
          { path: "users/userToken", method: RequestMethod.POST },
        )
        .forRoutes(UrlController)
  }
}
