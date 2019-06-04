import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ClrButtonModule} from "@clr/angular";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ClrButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
