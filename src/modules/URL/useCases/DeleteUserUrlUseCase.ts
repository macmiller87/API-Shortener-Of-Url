import { Injectable } from "@nestjs/common";
import { IUrlRepository } from "../repository/implementation-IUrlRepository/IUrlRepository";
import { AppError } from "src/utils/errors/AppError";

@Injectable()
export class DeleteUserUrlsUseCase {

    constructor(private urlRepository: IUrlRepository) {}

    async execute(user_id: string, url_id: string): Promise<void> {
        const findUserById = await this.urlRepository.findUserId(user_id);
        const findUrlById = await this.urlRepository.findUrlById(url_id);

        if(!findUserById) {
            throw new AppError("User Not Found !", 404);
        }

        if(!findUrlById) {
            throw new AppError("Url Not Found !", 404);
        }

        await this.urlRepository.deleteUrl(user_id, url_id);
    }

}