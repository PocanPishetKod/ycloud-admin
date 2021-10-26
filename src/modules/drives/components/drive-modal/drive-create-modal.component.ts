import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { IAccount } from "src/modules/core/models/account";
import { IDrive } from "src/modules/core/models/drive";

@Component({
    templateUrl: "./drive-create-modal.component.html",
    selector: "drive-modal"
})
export class DriveCreateModalComponent {
    public drive: IDrive;
    public accounts: IAccount[];

    constructor(private _dialogRef: MatDialogRef<DriveCreateModalComponent>,
        @Inject(MAT_DIALOG_DATA) data: { accounts: IAccount[] }) {
        this.drive = {
            id: "",
            maxSize: 0,
            rootDirectoryId: "",
            totalSize: 0,
            ownerId: ""
        };

        this.accounts = data.accounts;
    }

    public close(): void {
        this._dialogRef.close();
    }

    public save(): void {
        this._dialogRef.close(this.drive);
    }
}