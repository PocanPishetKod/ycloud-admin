import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatTableModule } from "@angular/material/table";
import { DriveCreateModalComponent } from "./components/drive-modal/drive-create-modal.component";
import { DrivesListComponent } from "./components/drives-list/drives-list.component";
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { DriveEditModalComponent } from "./components/drive-edit-modal/drive-edit-modal.component";

@NgModule({
    declarations: [
        DrivesListComponent,
        DriveCreateModalComponent,
        DriveEditModalComponent
    ],
    exports: [
        DrivesListComponent,
        DriveCreateModalComponent,
        DriveEditModalComponent
    ],
    imports: [
        MatTableModule,
        MatButtonModule,
        MatInputModule,
        MatSelectModule,
        CommonModule,
        FormsModule
    ]
})
export class DrivesModule {

}