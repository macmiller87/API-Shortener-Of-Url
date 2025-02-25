import { Body, Controller, Delete, Get, Post, Put, Query } from "@nestjs/common";
import { ShortUrlUseCase } from "../useCases/ShortUrlUseCase";
import { ListAllUserUrlsUseCase } from "../useCases/ListAllUserUrlsUseCase";
import { DeleteUserUrlsUseCase } from "../useCases/DeleteUserUrlUseCase";
import { UpdateUserUrlUseCase } from "../useCases/UpdateUserUrlUseCase";
import { IShortUrlDTO } from "../dtos/IShortUrlDTO";

@Controller("url")
export class UrlController {

    constructor(
        private shortUrlUsecase: ShortUrlUseCase,
        private listUrlUsecase: ListAllUserUrlsUseCase,
        private updateUrlUseCase: UpdateUserUrlUseCase,
        private deleteUrlUsecase: DeleteUserUrlsUseCase
    ) {}

    @Post("shortenUrl")
    async create(@Query("user_id") user_id: string, @Body() body: IShortUrlDTO) {
        const { originalUrl } = body;

        const url = await this.shortUrlUsecase.execute({
            originalUrl,
            user_id
        });

        return url;
    }

    @Get("getUrls")
    async getUrls(@Query("user_id") user_id: string) {
        const get = await this.listUrlUsecase.execute(user_id);
        return get;
    }

    @Put("updateUrl")
    async update(@Query("user_id") user_id: string, @Body() body: IShortUrlDTO) {
        const { originalUrl, id } = body;

        const update = await this.updateUrlUseCase.execute(originalUrl, user_id, id);
        return update;
    }


    @Delete("deleteUrl")
    async deleteUrl(@Query("user_id") user_id: string, @Body() body: IShortUrlDTO) {
        const { id } = body;
        await this.deleteUrlUsecase.execute(user_id, id);
    }
    
}