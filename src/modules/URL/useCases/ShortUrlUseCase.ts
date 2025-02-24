import { IUrlRepository } from "../repository/implementation-IUrlRepository/IUrlRepository";
import { Injectable } from "@nestjs/common";
import { AppError } from "src/utils/errors/AppError";

interface urlShortRequest {
    originalUrl: string;
}

@Injectable()
export class ShortUrlUseCase {

    constructor(private urlRepository: IUrlRepository) {}

    async execute(request: urlShortRequest): Promise<object> {

        const { originalUrl } = request;

        if(originalUrl === "") {
            throw new AppError("The Url field must to have a value !", 401);

        }else if(typeof(originalUrl) !== "string") {
            throw new AppError("The Url field must be a string !", 401);

        }else {

            const checkOriginalUrl = await this.urlRepository.findOriginaUrl(originalUrl);

            if(checkOriginalUrl) {
                throw new AppError("Url already Exist !", 401);
            }

            const create = await this.urlRepository.create(originalUrl);

            const url = process.env.BASE_URL + create.shortCode;

            return {
                shorteredUrl: url
            };
        }

    }

}