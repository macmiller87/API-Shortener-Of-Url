import { Injectable } from "@nestjs/common";
import { IUrlRepository } from "../repository/implementation-IUrlRepository/IUrlRepository";
import { AppError } from "src/utils/errors/AppError";
import { User } from "src/modules/User/entities/User";

@Injectable()
export class ListAllUserUrlsUseCase {

    constructor(private urlRepository: IUrlRepository) {}

    async execute(user_id: string): Promise<User> {
        const findUserById = await this.urlRepository.findUserId(user_id);

        if(!findUserById) {
            throw new AppError("User Not Found !", 404);
        }

        const getUserUrls = await this.urlRepository.listUrls(user_id);
        return getUserUrls;
    }

}