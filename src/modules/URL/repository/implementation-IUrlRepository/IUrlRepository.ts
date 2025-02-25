import { User } from "src/modules/User/entities/User";
import { IShortUrlDTO } from "../../dtos/IShortUrlDTO";

export abstract class IUrlRepository {
    abstract create(originalUrl: string, user_id: string): Promise<IShortUrlDTO>;
    abstract findOriginaUrl(checkOriginalUrl: string): Promise<IShortUrlDTO>;
    abstract findUserId(user_id: string): Promise<User>;
    abstract listUrls(user_id: string): Promise<User>;
    abstract deleteUrl(user_id: string): Promise<void>;
}