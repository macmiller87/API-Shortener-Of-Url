import { IShortUrlDTO } from "../dtos/IShortUrlDTO"

export class Url {
    private propsUrl?: IShortUrlDTO;

    constructor(props?: IShortUrlDTO) {
        this.propsUrl = props;
    }

    public set originalUrl(url: string) {
        this.propsUrl.originalUrl = url;
    }

    public get originalUrl() {
        return this.propsUrl?.originalUrl;
    }

    public set shorteredUrl(url: string) {
        this.propsUrl.shortCode = url;
    }

    public get shorteredUrl() {
        return this.propsUrl.shortCode;
    }

}