import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { DacoFormatViewComponent } from './daco-format-view/daco-format-view.component';
import { DacoFormatListComponent } from './daco-format-list/daco-format-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DacoFormatViewComponent,
    DacoFormatListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
