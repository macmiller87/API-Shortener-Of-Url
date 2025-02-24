import { IUserTokenRepository } from "./implementation-IUserRepository/IUserTokenRepository";
import { PrismaService } from "src/database/prisma/prisma.service";
import { ICreateUserToken } from "../dtos/ICreateTokenDTO";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UserTokenRepository implements IUserTokenRepository {
  constructor(private prismaService: PrismaService) {}

  async create(user_id: ICreateUserToken): Promise<void> {
    await this.prismaService.userToken.create({
      data: user_id,
      include: {
        user: true,
      },
    });
  }
}
