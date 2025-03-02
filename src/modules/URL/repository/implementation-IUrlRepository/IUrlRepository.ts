import { User } from "src/modules/User/entities/User";
import { IShortUrlDTO } from "../../dtos/IShortUrlDTO";
import { Url } from "../../entities/Url";

export abstract class IUrlRepository {
    abstract create(originalUrl: string, user_id: string): Promise<IShortUrlDTO>;
    abstract findOriginaUrl(checkOriginalUrl: string): Promise<IShortUrlDTO>;
    abstract findUserId(user_id: string): Promise<User>;
    abstract findUrlById(url_id: string): Promise<Url>;
    abstract updateUrl(updateOriginalUrl: string, user_id: string, urlId: string): Promise<Url>;
    abstract listUrls(user_id: string): Promise<User>;
    abstract deleteUrl(user_id: string, url_id: string): Promise<void>;
}