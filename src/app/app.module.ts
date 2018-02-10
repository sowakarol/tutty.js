import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TuttyModule} from './modules/tutty/tutty.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TuttyModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

