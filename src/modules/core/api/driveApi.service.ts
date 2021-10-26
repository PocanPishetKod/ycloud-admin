import { Injectable } from "@angular/core";
import { Configuration } from "../configuration/configuration";
import { ConfigurationProvider } from "../configuration/configuration.provider";
import { HttpClientWrapper } from "../http/http-client-wrapper.service";
import { IDrive } from "../models/drive";
import { ICreateDriveRequest } from "../models/queries/createDriveRequest";
import { IUpdateDriveRequest } from "../models/queries/updateDriveRequest";

const Uri: string = "/drives";

@Injectable({
    providedIn: "root"
})
export class DriveApiService {
    private readonly _configuration: Configuration;
    private _defaultUrl: string | null = null;

    constructor(private _httpClientWrapper: HttpClientWrapper,
        configurationProvider: ConfigurationProvider) {
            this._configuration = configurationProvider.provide();
    }

    private buildDefaultUrl(): string {
        if (!this._defaultUrl) {
            this._defaultUrl = `${this._configuration.api}${Uri}`;
        }

        return this._defaultUrl;
    }

    public async getList(): Promise<IDrive[]> {
        let response = await this._httpClientWrapper
            .get<IDrive[]>(this.buildDefaultUrl());

        return response.body as IDrive[];
    }

    public async create(request: ICreateDriveRequest): Promise<IDrive> {
        let response = await this._httpClientWrapper
            .post<IDrive>(this.buildDefaultUrl(), request);

        return response.body as IDrive;
    }

    public async update(request: IUpdateDriveRequest): Promise<void> {
        let response = await this._httpClientWrapper
            .put(this.buildDefaultUrl(), request);
    }
}