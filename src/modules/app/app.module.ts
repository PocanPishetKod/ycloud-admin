import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AuthModule } from '../auth/auth.module';
import { RoutesProvider } from '../core/routing/routes-provider';
import { DrivesModule } from '../drives/drives.module';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        RouterModule.forRoot(RoutesProvider.provide()),
        RouterModule,
        BrowserModule,
        AuthModule,
        DrivesModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
