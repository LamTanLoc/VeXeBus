import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DatVeBusModule } from './dat-ve-bus/dat-ve-bus.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DatVeBusModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
