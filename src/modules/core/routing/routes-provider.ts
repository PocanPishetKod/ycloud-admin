import { Routes } from "@angular/router";
import { SignInRedirectComponent } from "src/modules/auth/components/signin-redirect/signin-redirect.component";
import { DrivesListComponent } from "src/modules/drives/components/drives-list/drives-list.component";
import { AuthGuard } from "../guards/auth.guard";

export class RoutesProvider {
    public static readonly baseUri: string = "";
    public static readonly drives: string = "drives";
    public static readonly signInRedirect: string = "signin/redirect"

    public static provide(): Routes {
        return [
            { path: this.baseUri, redirectTo: `/${this.drives}`, pathMatch: "full" },
            { path: this.drives, component: DrivesListComponent, /*canActivate: [AuthGuard]*/ },
            { path: this.signInRedirect, component: SignInRedirectComponent }
        ];
    }
}