import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AuthModule } from '../auth/auth.module';
import { RoutesProvider } from '../core/routing/routes-provider';
import { DrivesModule } from '../drives/drives.module';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from "@angular/material/dialog";
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        RouterModule.forRoot(RoutesProvider.provide()),
        HttpClientModule,
        RouterModule,
        BrowserModule,
        AuthModule,
        DrivesModule,
        FormsModule,
        BrowserAnimationsModule,
        MatDialogModule,
        FlexLayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatInputModule,
        MatSelectModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
