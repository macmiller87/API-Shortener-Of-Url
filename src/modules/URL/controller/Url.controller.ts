import { Body, Controller, Post } from "@nestjs/common";
import { ShortUrlUseCase } from "../useCases/ShortUrlUseCase";
import { IShortUrlDTO } from "../dtos/IShortUrlDTO";

@Controller("url")
export class UrlController {

    constructor(private shortUrlUsecase: ShortUrlUseCase) {}

    @Post("shortenUrl")
    async create(@Body() body: IShortUrlDTO) {

        const { originalUrl } = body;

        const url = await this.shortUrlUsecase.execute({
            originalUrl
        });

        return url;
    }
    
}