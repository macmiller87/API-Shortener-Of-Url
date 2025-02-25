import { IUrlRepository } from "./implementation-IUrlRepository/IUrlRepository";
import { PrismaService } from "src/database/prisma/prisma.service"
import { IShortUrlDTO } from "../dtos/IShortUrlDTO";
import { User } from "src/modules/User/entities/User";
import { Injectable } from "@nestjs/common";
import { Url } from "../entities/Url";

@Injectable()
export class UrlRepository implements IUrlRepository {

    constructor(private prismaService: PrismaService) {}
    
    async create(originalUrl: string, user_id: string): Promise<IShortUrlDTO> {

        const shortCode = Math.random().toString(36).substring(2, 8);
        const shorteredUrl = process.env.BASE_URL + shortCode;

        const create = await this.prismaService.url.create({
            data: {
                user_id: user_id,
                originalUrl: originalUrl,
                shorteredUrl: shorteredUrl,
                shortCode: shortCode,
            }
        });

        return create
    }

    async findOriginaUrl(originalUrl: string): Promise<IShortUrlDTO> {
        const find = await this.prismaService.url.findFirst({
            where: {
                originalUrl: originalUrl
            }
        });

        return find;
    }

    async findUserId(user_id: string): Promise<User> {
        const find = await this.prismaService.users.findFirst({
            where: {
                user_id: user_id
            }
        });

        return find;
    }

    async findUrlById(url_id: string): Promise<Url> {
        const find = await this.prismaService.url.findFirst({
            where: {
                id: url_id
            }
        });

        return find;
    }

    async listUrls(user_id: string): Promise<User> {
        const getUrls = await this.prismaService.users.findUnique({
            where: {
                user_id: user_id
            },
            include: {
                Url: true,
                _count: {
                    select: { Url: true }
                }
            }
        });

        return getUrls;
    }

    async updateUrl(updateOriginalUrl: string, user_id: string, urlId: string): Promise<Url> {
        const updte = await this.prismaService.url.update({
            where: {
                id: urlId,
                AND: {
                    user_id: user_id
                }
            },
            data: {
                originalUrl: updateOriginalUrl
            }
        });

        return updte;
    }

    async deleteUrl(user_id: string, url_id: string): Promise<void> {
        await this.prismaService.url.delete({
            where: {
                id: url_id,
                AND: {
                    user_id: user_id
                }
            }
        });
    }

}