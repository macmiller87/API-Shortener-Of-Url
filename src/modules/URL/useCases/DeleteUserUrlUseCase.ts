import { Injectable } from "@nestjs/common";
import { IUrlRepository } from "../repository/implementation-IUrlRepository/IUrlRepository";
import { AppError } from "src/utils/errors/AppError";

@Injectable()
export class DeleteUserUrlsUseCase {

    constructor(private urlRepository: IUrlRepository) {}

    async execute(user_id: string): Promise<void> {
        const findUserById = await this.urlRepository.findUserId(user_id);

        if(!findUserById) {
            throw new AppError("User Not Found !");
        }

        await this.urlRepository.deleteUrl(user_id);
    }

}