import { IUrlRepository } from "../../URL/repository/implementation-IUrlRepository/IUrlRepository";
import { Injectable } from "@nestjs/common";
import { AppError } from "src/utils/errors/AppError";

@Injectable()
export class UpdateUserUrlUseCase {

    constructor(private urlRepository: IUrlRepository) {}

    async execute(updateOriginalUrl: string, user_id: string, urlId: string): Promise<string | object> {
        const findUserById = await this.urlRepository.findUserId(user_id);
        const findUrlById = await this.urlRepository.findUrlById(urlId);

        if(!findUserById) {
            throw new AppError("User not found !", 404);
        }

        if(!findUrlById) {
            throw new AppError("Url not found !", 404);
        }

        const update = await this.urlRepository.updateUrl(updateOriginalUrl, user_id, urlId);

        return { 
            UpdateOriginalUrl: update.originalUrl
        };
    }

}
