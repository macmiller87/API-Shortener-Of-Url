import { IUrlRepository } from "../repository/implementation-IUrlRepository/IUrlRepository";
import { Injectable } from "@nestjs/common";
import { AppError } from "src/utils/errors/AppError";

interface urlShortRequest {
    originalUrl: string;
    user_id: string;
}
interface urlShortResponse {
    originalUrl: string;
}

@Injectable()
export class ShortUrlUseCase {

    constructor(
        private urlRepository: IUrlRepository,
    ) {}

    async execute(request: urlShortRequest): Promise<object> {

        const { originalUrl, user_id } = request;

        if(originalUrl === "") {
            throw new AppError("The Url field must to have a value !", 401);

        }else if(typeof(originalUrl) !== "string") {
            throw new AppError("The Url field must be a string !", 401);

        }else {

            const regex = /[A-Za-z]+:/;

            if(!regex.test(originalUrl)) {
                throw new AppError("Please Put a Valid Url !", 401);
            }

            const checkOriginalUrl = await this.urlRepository.findOriginaUrl(originalUrl);

            if(checkOriginalUrl) {
                throw new AppError("Url already Exist !", 401);
            }

            const user = await this.urlRepository.findUserId(user_id);

            if(!user) {
                throw new AppError("User Not Found !");
            }

            const create = await this.urlRepository.create(originalUrl, user.user_id);

            return {
                shorteredUrl: create.shorteredUrl
            };
        }

    }

}