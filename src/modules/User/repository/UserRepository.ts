import { IUserRepository } from "./implementation-IUserRepository/IUserRepository";
import { PrismaService } from "src/database/prisma/prisma.service";
import { User } from "../entities/User";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(private prismaService: PrismaService) {}

  async create(datas: User): Promise<User> {
    const user = await this.prismaService.users.create({
      data: datas,
    });

    return user;
  }

  async findUserByUserName(userName: string): Promise<User> {
    const find = await this.prismaService.users.findUnique({
      where: {
        userName: userName,
      },
    });

    return find;
  }

  async findUserByEmail(email: string): Promise<User> {
    const find = await this.prismaService.users.findFirst({
      where: {
        email: email,
      },
    });

    return find;
  }
}
