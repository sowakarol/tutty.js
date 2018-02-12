import {Component, HostListener} from '@angular/core';
import PopupStrategyInterface from "./popup-strategy-interface";

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {

  text: String;
  idToPopup: String;
  popupDisplay = 'none';
  divRef;
  direction;
  strategy: PopupStrategyInterface;

  @HostListener('window:resize')
  onResize() {
    this.set(this.divRef);
  }

  @HostListener('window:scroll', ['$event'])
  public onWindowScroll(event: Event): void {
    this.set(this.divRef);
  }

  popUp(text: String, id: String) {
    this.text = text;
    this.idToPopup = id;
    this.popupDisplay = 'block';
  }

  set = (divRef) => {
    let boundingClientRect = divRef.getBoundingClientRect();
    this.divRef = divRef;
    this.strategy.setPosition(boundingClientRect, this);
  }
}
