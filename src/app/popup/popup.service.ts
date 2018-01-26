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
    this.set(divRef, direction);

    divRef.style.zIndex = 9999;
    divRef.style.position = 'absolute';

    this.popupComponent.popUp(msg, id);
  };

  //todo: change to something more responsive
  set = (divRef, direction) => {
    let boundingClientRect = divRef.getBoundingClientRect();
    let left = boundingClientRect.left;
    let right = boundingClientRect.right;
    let top = boundingClientRect.top;
    let bottom = boundingClientRect.bottom;
    let h = window.screen.height;
    let w = window.screen.width;

    if(direction === "right"){
      console.log("right");
      this.popupComponent.popupTop = top+'px';
      this.popupComponent.popupRight = 'initial';
      this.popupComponent.popupLeft = w-right + 'px';
    }
    if(direction === "left"){
      console.log("left");
      console.log(top);
      this.popupComponent.popupTop = top +'px';
      this.popupComponent.popupRight = w-left + 'px';
      this.popupComponent.popupLeft = 'initial';
    }
    if(direction === "top"){
      console.log("top");
      this.popupComponent.popupTop = 'initial';
      this.popupComponent.popupBottom = h - top + 'px';
      this.popupComponent.popupLeft = left + 'px';
    }
    if(direction === "bottom"){
      this.popupComponent.popupTop = bottom +'px';
      this.popupComponent.popupBottom = 'initial';
      this.popupComponent.popupLeft = left + 'px';
      console.log("bot");
    }
  };

  setHints = (popups) => {
    this.hints = popups;
  };
}
