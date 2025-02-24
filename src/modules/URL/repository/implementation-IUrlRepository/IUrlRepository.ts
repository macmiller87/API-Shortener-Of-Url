import { IShortUrlDTO } from "../../dtos/IShortUrlDTO";

export abstract class IUrlRepository {
    abstract create(originalUrl: string): Promise<IShortUrlDTO>;
    abstract findOriginaUrl(checkOriginalUrl: string): Promise<IShortUrlDTO>;
}