import {Injectable} from "@angular/core";
import {Hint} from "../util/classes";
import {PopupComponent} from "./popup.component";

@Injectable()
export class PopupService {

  hints: Array<Hint>;
  currentHint =  0;
  elem = [];
  divRefZIndex;

  popupComponent: PopupComponent;

  popNext = () => {
      let divRef = this.elem[this.currentHint];
      divRef.style.zIndex = this.divRefZIndex;
      this.currentHint++;
      this.pop();
  }

  popPrev = () => {
      let divRef = this.elem[this.currentHint];
      divRef.style.zIndex = this.divRefZIndex;
      this.currentHint--;
      this.pop();
  }

  pop = () => {
    let hint = this.hints[this.currentHint];
    let divRef = this.elem[this.currentHint];

    this.divRefZIndex = divRef.style.zIndex;
    this.popupComponent.divRef = divRef;
    this.popupComponent.set(divRef, hint.direction);
    this.enlightenReference(divRef);

    this.popupComponent.popUp(hint.message, hint.id);
  };

  enlightenReference = (divRef) => {
    divRef.style.zIndex = 9999999;
    divRef.style.position = 'relative';
    divRef.style.pointerEvents = 'none';
  }

  setHints = (popups) => {
    this.hints = popups;
  };
}

