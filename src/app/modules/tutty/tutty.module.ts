import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APP_INITIALIZER } from '@angular/core';
import {Config} from "./util/config"
import {HttpModule} from '@angular/http'
import {OverlayComponent} from './overlay/overlay.component';
import { CookieModule } from 'ngx-cookie';
import {PopupComponent} from "./popup/popup.component";
import { CookieTestComponent } from './cookie-test/cookie-test.component';
import { CookiesHandlerService } from './cookies-handler/cookies-handler.service';


// @dynamic
@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    CookieModule.forRoot()

  ],
  providers: [
    Config,
    CookiesHandlerService,
    { provide: APP_INITIALIZER, useFactory: useFactory, deps: [Config], multi: true }
  ],
  declarations: [
    OverlayComponent,
    CookieTestComponent,
    PopupComponent

  ],
  exports: [
    OverlayComponent
  ]


})
export class TuttyModule { }


export function useFactory(config: Config) {
  return  () => {
    try { 
      return config.load(); 
    } 
    catch(ex) {
      return null;
    }; 
  }
}