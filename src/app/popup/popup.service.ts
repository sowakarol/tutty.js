import {Injectable} from "@angular/core";
import {Hint} from "../util/classes";
import {PopupComponent} from "./popup.component";


@Injectable()
export class PopupService {

  hints: Array<Hint>;
  currentHint: number = 0;
  hintCount: number;

  popupComponent: PopupComponent;

  constructor() {
  };

  pop() {
    let msg: string = this.hints[this.currentHint].message.toString();
    let id: string = this.hints[this.currentHint].id.toString();
    this.popupComponent.popUp(msg, id);
  }

  popNext() {
    if (this.currentHint != this.hints.length - 1) {
      this.currentHint++;
      this.pop();
    }
  }

  popPrev() {
    if (this.currentHint != 0) {
      this.currentHint--;
      this.pop();
    }
  }


  setHints(popups) {
    this.hints = popups;
  }
}
