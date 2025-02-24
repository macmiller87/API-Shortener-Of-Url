import { IUrlRepository } from "./implementation-IUrlRepository/IUrlRepository";
import { PrismaService } from "src/database/prisma/prisma.service"
import { Injectable } from "@nestjs/common";
import { IShortUrlDTO } from "../dtos/IShortUrlDTO";

@Injectable()
export class UrlRepository implements IUrlRepository {

    constructor(private prismaService: PrismaService) {}
    
    async create(originalUrl: string): Promise<IShortUrlDTO> {

        const shortCode = Math.random().toString(36).substring(2, 8);

        const create = await this.prismaService.url.create({
            data: {
                originalUrl: originalUrl,
                shortCode: shortCode 
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

}