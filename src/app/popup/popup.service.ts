import {Injectable} from "@angular/core";
import {Hint} from "../util/classes";
import {PopupComponent} from "./popup.component";

@Injectable()
export class PopupService {

  hints: Array<Hint>;
  currentHint: number = 0;
  elem = [];
  currentZIndex;
  oldPos;
  firstTime = true;

  popupComponent: PopupComponent;

  constructor() {
  };

  popNext = () => {
    if (this.currentHint != this.hints.length - 1) {
      let divRef = this.elem[this.currentHint];

      if (this.firstTime == true) {
        this.currentZIndex = divRef.style.zIndex;
        this.oldPos = divRef.style.position;
        this.firstTime = false;
        this.pop();
      } else {
        divRef.style.zIndex = this.currentZIndex;
        divRef.style.position = this.oldPos;
        this.currentHint++;
        this.pop();
      }
    }
  };

  popPrev = () => {
    if (this.currentHint != 0) {
      let divRef = this.elem[this.currentHint];
      divRef.style.zIndex = this.currentZIndex;
      divRef.style.position = this.oldPos;
      this.currentHint--;
      this.pop();
    }
  };

  pop = () => {
    let msg: string = this.hints[this.currentHint].message.toString();
    let id: string = this.hints[this.currentHint].id.toString();
    let direction: string = this.hints[this.currentHint].direction.toString();

    console.log('logged id for hint:' + id);
    console.log(this.hints);

    let divRef = this.elem[this.currentHint];

    this.currentZIndex = divRef.style.zIndex;
    this.popupComponent.divRef= divRef;
    this.popupComponent.direction= direction;
    this.popupComponent.set(divRef, direction);

    divRef.style.zIndex = 9999999;
    divRef.style.position = 'relative';
    divRef.style.pointerEvents = 'none';

    this.popupComponent.popUp(msg, id);
  };

  setHints = (popups) => {
    this.hints = popups;
  };
}

