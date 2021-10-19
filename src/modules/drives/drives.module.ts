import { NgModule } from "@angular/core";
import { DrivesListComponent } from "./components/drives-list/drives-list.component";

@NgModule({
    declarations: [
        DrivesListComponent
    ],
    exports: [
        DrivesListComponent
    ]
})
export class DrivesModule {

}