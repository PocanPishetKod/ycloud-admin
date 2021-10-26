import { Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatTable } from "@angular/material/table";
import { AccountApiService } from "src/modules/core/api/account-api.service";
import { DriveApiService } from "src/modules/core/api/driveApi.service";
import { IAccount } from "src/modules/core/models/account";
import { IDrive } from "src/modules/core/models/drive";
import { CloneObjectHelper } from "src/modules/core/utils/cloneObjectHelper";
import { DriveEditModalComponent } from "../drive-edit-modal/drive-edit-modal.component";
import { DriveCreateModalComponent } from "../drive-modal/drive-create-modal.component";

@Component({
    templateUrl: "./drives-list.component.html",
    styleUrls: ["./drives-list.component.css"],
    selector: "drives-list"
})
export class DrivesListComponent implements OnInit {
    public drives: IDrive[];
    public accounts: IAccount[];
    public displayedColumns: string[] = ["Id", "TotalSize", "MaxSize", "OwnerId"];

    @ViewChild(MatTable) table: MatTable<IDrive> | undefined;

    constructor(private _dialog: MatDialog,
        private _driveApiService: DriveApiService,
        private _accountApiService: AccountApiService) {
            this.drives = [];
            this.accounts = [];
    }

    private async loadDrives(): Promise<void> {
        this.drives = await this._driveApiService.getList();
    }

    private async loadAccounts(): Promise<void> {
        this.accounts = await this._accountApiService.getList();
    }

    private async createDrive(drive: IDrive): Promise<void> {
        if (!drive) {
            throw new Error();
        }

        let createdDrive = await this._driveApiService
            .create({ maxSize: drive.maxSize, ownerId: drive.ownerId });

        this.drives.push(createdDrive);
        this.table?.renderRows();
    }

    private async updateDrive(drive: IDrive): Promise<void> {
        if (!drive) {
            throw Error();
        }

        await this._driveApiService
            .update({ driveId: drive.id, newMaxSize: drive.maxSize });

        let oldDrive = this.drives.find(d => d.id == drive.id);
        if (!oldDrive){
            return;
        }

        oldDrive.maxSize = drive.maxSize;
    }

    private async onCreateModalClosed(drive: IDrive | undefined | null) {
        if (!drive) {
            return;
        }

        await this.createDrive(drive);
    }

    private async onUpdateModalClosed(drive: IDrive | undefined | null) {
        if (!drive) {
            return;
        }

        await this.updateDrive(drive);
    }

    public showCreateDriveModal(): void {
        let dialogRef = this._dialog
            .open(DriveCreateModalComponent, { data: { accounts: this.accounts } });
        
        dialogRef.afterClosed()
            .subscribe(async (drive: IDrive | undefined | null) => {
                await this.onCreateModalClosed(drive);
        });
    }

    public showEditDriveModal(drive: IDrive): void {
        let dialogRef = this._dialog
            .open(DriveEditModalComponent, { data: { drive: CloneObjectHelper.clone(drive) } });

        dialogRef.afterClosed().subscribe(async (drive: IDrive) => {
            await this.onUpdateModalClosed(drive);
        });
    }

    public async ngOnInit(): Promise<void> {
        await Promise.all([this.loadDrives(), this.loadAccounts()]);
    }
}