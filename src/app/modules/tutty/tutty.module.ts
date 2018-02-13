import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APP_INITIALIZER } from '@angular/core';
import {Config} from "./util/config"
import {HttpModule} from '@angular/http'
import {OverlayComponent} from './overlay/overlay.component';
import { CookieModule } from 'ngx-cookie';
import {PopupComponent} from "./popup/popup.component";
import { CookiesAdapter } from './cookies-handler/cookies-adapter.service';
import {PagingComponent} from './paging/paging.component';


// @dynamic
@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    CookieModule.forRoot()

  ],
  providers: [
    Config,
    CookiesAdapter,
    { provide: APP_INITIALIZER, useFactory: useFactory, deps: [Config], multi: true }
  ],
  declarations: [
    OverlayComponent,
    PopupComponent,
    PagingComponent

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
