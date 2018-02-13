import {Injectable} from "@angular/core";
import {Hint} from "../util/classes";
import {PopupComponent} from "./popup.component";
import {PopupStrategyBottom, PopupStrategyLeft, PopupStrategyRight, PopupStrategyTop} from "./popup-strategy-impl";

@Injectable()
export class PopupService {

  hints: Array<Hint>;
  currentHint = 0;
  elem = [];

  popupComponent: PopupComponent;
  divVo: DivVO = new DivVO;

  public popNext() {
    let divRef = this.elem[this.currentHint];
    this.divVo.reset(divRef);
    this.currentHint++;
    this.pop();
  }

  public popPrev() {
    let divRef = this.elem[this.currentHint];
    this.divVo.reset(divRef);
    this.currentHint--;
    this.pop();
  }

  public pop() {
    let hint = this.hints[this.currentHint];
    let divRef = this.elem[this.currentHint];
    divRef.scrollIntoView({behavior: "smooth", block: "center"});
    this.divVo.setDivOldValues(divRef);
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
    this.divVo.enlightenReference(divRef);
    setTimeout(() =>{
      this.popupComponent.set(divRef);
    }, 100);
    this.popupComponent.popUp(hint.message, hint.id);
  };

  public setHints(popups) {
    this.hints = popups;
  };

  public resetDiv() {
    this.divVo.reset(this.elem[this.currentHint])
  }
}

export class DivVO {
  private boxShadow: CSSStyleDeclaration;
  private zIndex: CSSStyleDeclaration;
  private position: CSSStyleDeclaration;
  private pointerEvents: CSSStyleDeclaration;

  public reset(divRef) {
    divRef.style.boxShadow = this.boxShadow;
    divRef.style.zIndex = this.zIndex;
    divRef.style.position = this.position;
    divRef.style.pointerEvents = this.pointerEvents;
  }

  public setDivOldValues(divRef) {
    this.boxShadow = divRef.style.boxShadow;
    this.zIndex = divRef.style.zIndex;
    this.position = divRef.style.position;
    this.pointerEvents = divRef.style.pointerEvents;
  }

  public enlightenReference(divRef) {
    if(divRef.tagName != 'DIV'){
      divRef.style.position = 'relative';
    }
    // divRef.style.boxShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)';
    divRef.style.zIndex = 2141;
    divRef.style.pointerEvents = 'none';
  }
}

