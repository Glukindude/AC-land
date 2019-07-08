import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LandManagementPageComponent } from './components/land-management-page/land-management-page.component';
import { AgriScoutingPageComponent } from './components/agri-scouting-page/agri-scouting-page.component';
import { AgriManagementPageComponent } from './components/agri-management-page/agri-management-page.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule} from "@angular/router";
import {AppRoutes} from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LandManagementPageComponent,
    AgriScoutingPageComponent,
    AgriManagementPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
