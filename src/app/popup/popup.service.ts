import {Injectable} from "@angular/core";
import {Hint} from "../util/classes";
import {PopupComponent} from "./popup.component";


@Injectable()
export class PopupService {

  hints: Array<Hint>;
  currentHint: Hint;

  popupComponent: PopupComponent;

  constructor() {
  };

  pop() {
    let msg: string = this.hints[0].message.toString();
    let id: string = this.hints[0].id.toString();
    this.popupComponent.popUp(msg, id);
  }

  setHints(popups) {
    this.hints = popups;
  }
}
