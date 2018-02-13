import { Component, OnInit, Input } from '@angular/core';
import { CookiesHandlerService } from '../cookies-handler/cookies-handler.service';

@Component({
  selector: 'cookie-test',
  templateUrl: './cookie-test.component.html',
  styleUrls: ['./cookie-test.component.css']
})
export class CookieTestComponent {

  @Input() id: string;
  wasShown: boolean = false;

  constructor(private _cookiesHandler:CookiesHandlerService) { }

  public show(): void {
    console.log("wyswietlono " + this.id);
    this._cookiesHandler.setShown(this.id);
  }

  public checkIfShown(): void {
      console.log("sprawdzam czy " + this.id);
      this.wasShown = this._cookiesHandler.wasShown(this.id);
  }

  public refresh(): void {
    this.wasShown = false;
    console.log("reset");
    this._cookiesHandler.resetAll();
  }

}
