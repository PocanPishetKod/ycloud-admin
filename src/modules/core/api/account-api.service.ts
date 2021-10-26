import { Injectable } from "@angular/core";
import { Configuration } from "../configuration/configuration";
import { ConfigurationProvider } from "../configuration/configuration.provider";
import { HttpClientWrapper } from "../http/http-client-wrapper.service";
import { IAccount } from "../models/account";

const Uri: string = "/account";

@Injectable({
    providedIn: "root"
})
export class AccountApiService {
    private readonly _configuration: Configuration;

    constructor(private _httpClientWrapper: HttpClientWrapper,
        configurationProvider: ConfigurationProvider) {
            this._configuration = configurationProvider.provide();
    }

    public async getList(): Promise<IAccount[]> {
        let response = await this._httpClientWrapper
            .get(`${this._configuration.authority}${Uri}`);
        
        return response.body as IAccount[];
    }
}