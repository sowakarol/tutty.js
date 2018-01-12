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

    console.log('logged id for hint:' + id);

    let divRef = this.elem[this.currentHint];

    this.currentZIndex = divRef.style.zIndex;
    this.set(divRef, this.hints[this.currentHint]);

    divRef.style.zIndex = 9999;
    divRef.style.position = 'absolute';

    this.popupComponent.popUp(msg, id);
  };

  //todo: change to checking for borders
  set = (divRef, hint) => {
    let boundingClientRect = divRef.getBoundingClientRect();
    let direction = hint.direction;
    if (direction === 'left') {
      this.popupComponent.popupLeft = boundingClientRect.right + 50 + 'px';
      this.popupComponent.popupRight = boundingClientRect.left + 'px';
      this.popupComponent.popupTop = boundingClientRect.bottom + 'px';
      this.popupComponent.popupBottom = boundingClientRect.top + 'px';
    } else if (direction === 'right') {
      this.popupComponent.popupLeft = boundingClientRect.right + 'px';
      this.popupComponent.popupRight = boundingClientRect.left + 50 + 'px';
      this.popupComponent.popupTop = boundingClientRect.bottom + 'px';
      this.popupComponent.popupBottom = boundingClientRect.top + 'px';
    } else if (direction === 'top') {
      this.popupComponent.popupLeft = boundingClientRect.right + 'px';
      this.popupComponent.popupRight = boundingClientRect.left + 'px';
      this.popupComponent.popupTop = boundingClientRect.bottom + 50 + 'px';
      this.popupComponent.popupBottom = boundingClientRect.bottom + 'px';
    } else if (direction === 'bottom') {
      this.popupComponent.popupLeft = boundingClientRect.right + 'px';
      this.popupComponent.popupRight = boundingClientRect.left + 'px';
      this.popupComponent.popupTop = boundingClientRect.bottom + 'px';
      this.popupComponent.popupBottom = boundingClientRect.top + 50 + 'px';
    }
  };

  setHints = (popups) => {
    this.hints = popups;
  };
}
