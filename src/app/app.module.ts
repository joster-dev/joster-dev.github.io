import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FormControlModule } from '@joster/form-control';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FormControlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
