import {Component, HostListener} from '@angular/core';
import {PopupStrategyBottom, PopupStrategyLeft, PopupStrategyRight, PopupStrategyTop} from './popup-strategy-impl';

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

  @HostListener('window:resize')
  onResize() {
    this.set(this.divRef,this.direction);
  }

  popUp(text: String, id: String) {
    this.text = text;
    this.idToPopup = id;
    this.popupDisplay = 'block';
  }

  set = (divRef, direction) => {
    let boundingClientRect = divRef.getBoundingClientRect();
    this.divRef = divRef;

    switch(direction){
      case 'right': new PopupStrategyRight().setPosition(boundingClientRect, this); break;
      case 'left': new PopupStrategyLeft().setPosition(boundingClientRect, this); break;
      case 'top': new PopupStrategyTop().setPosition(boundingClientRect, this); break;
      case 'bottom': new PopupStrategyBottom().setPosition(boundingClientRect, this); break;
    }
  }
}
