import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { RoutesProvider } from "./routes-provider";

@Injectable({
    providedIn: "root"
})
export class RouterService {

    constructor(private _router: Router) {

    }

    private goTo(url: string): void {
        this._router.navigate([url]);
    }

    public goToDrives(): void {
        this.goTo(`/${RoutesProvider.drives}`);
    }
}