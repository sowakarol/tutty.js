import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TuttyModule} from './modules/tutty/tutty.module';
import { AppComponent } from './app.component';
import { TuttyService } from '../public_api';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TuttyModule,
  ],
  providers: [TuttyService],
  bootstrap: [AppComponent]
})
export class AppModule { }

