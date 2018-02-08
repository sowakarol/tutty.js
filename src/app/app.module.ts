import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_INITIALIZER } from '@angular/core';
import {Config} from "./util/config"
import {HttpModule} from '@angular/http'


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    Config,
    { provide: APP_INITIALIZER, useFactory: useFactory, deps: [Config], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


export function useFactory(config: Config) {
  return  () => config.load();
}