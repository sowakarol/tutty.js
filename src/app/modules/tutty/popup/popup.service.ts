import {Injectable} from "@angular/core";
import {Hint} from "../util/classes";
import {PopupComponent} from "./popup.component";
import {PopupStrategyBottom, PopupStrategyLeft, PopupStrategyRight, PopupStrategyTop} from "./popup-strategy-impl";

@Injectable()
export class PopupService {

  hints: Array<Hint>;
  currentHint = 0;
  elem = [];
  divRefZIndex: number;

  popupComponent: PopupComponent;

  public popNext() {
    let divRef = this.elem[this.currentHint];
    divRef.style.zIndex = this.divRefZIndex;
    this.currentHint++;
    this.pop();
  }

  public popPrev() {
    let divRef = this.elem[this.currentHint];
    divRef.style.zIndex = this.divRefZIndex;
    this.currentHint--;
    this.pop();
  }

  public pop() {
    let hint = this.hints[this.currentHint];
    let divRef = this.elem[this.currentHint];

    this.divRefZIndex = divRef.style.zIndex;
    this.popupComponent.divRef = divRef;

    let strategy;
    switch(hint.direction){
      case 'right': strategy = new PopupStrategyRight(); break;
      case 'left': strategy = new PopupStrategyLeft(); break;
      case 'top': strategy = new PopupStrategyTop(); break;
      case 'bottom': strategy = new PopupStrategyBottom(); break;
    }
    this.popupComponent.strategy = strategy;
    this.popupComponent.set(divRef);
    this.enlightenReference(divRef);
    this.popupComponent.popUp(hint.message, hint.id);
    divRef.scrollIntoView({ behavior: "smooth", block: "center"});
  };

  private enlightenReference(divRef) {
    divRef.style.zIndex = 9999999;
    divRef.style.position = 'relative';
    divRef.style.pointerEvents = 'none';
  }

  public setHints(popups) {
    this.hints = popups;
  };
}

