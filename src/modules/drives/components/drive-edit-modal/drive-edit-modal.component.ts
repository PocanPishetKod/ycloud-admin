import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { IDrive } from "src/modules/core/models/drive";

@Component({
    templateUrl: "./drive-edit-modal.component.html",
    selector: "drive-edit-modal"
})
export class DriveEditModalComponent {
    public drive: IDrive;

    constructor(@Inject(MAT_DIALOG_DATA) data: { drive: IDrive },
        private _dialogRef: MatDialogRef<DriveEditModalComponent>) {
            this.drive = data.drive;
    }

    public save(): void {
        this._dialogRef.close(this.drive);
    }

    public close(): void {
        this._dialogRef.close();
    }
}