import { IUserTokenRepository } from "src/modules/User/repository/implementation-IUserRepository/IUserTokenRepository";
import { IUserRepository } from "src/modules/User/repository/implementation-IUserRepository/IUserRepository";
import { UserTokenRepository } from "src/modules/User/repository/UserTokenRepository";
import { UserRepository } from "src/modules/User/repository/UserRepository";
import { IUrlRepository } from "src/modules/URL/repository/implementation-IUrlRepository/IUrlRepository";
import { UrlRepository } from "src/modules/URL/repository/UrlRepository";
import { PrismaService } from "./prisma/prisma.service";
import { Module } from "@nestjs/common";

@Module({
  providers: [
    PrismaService,

    {
      provide: IUserRepository,
      useClass: UserRepository,
    },
    {
      provide: IUserTokenRepository,
      useClass: UserTokenRepository,
    },
    {
      provide: IUrlRepository,
      useClass: UrlRepository,
    },

  ],

  exports: [IUserRepository, IUserTokenRepository, IUrlRepository],
})

export class DatabaseModule {}
