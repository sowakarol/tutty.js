import { Hint } from "../util/classes";
import { PopupComponent } from "./popup.component";
export declare class PopupService {
    hints: Array<Hint>;
    currentHint: number;
    elem: any[];
    divRefZIndex: any;
    popupComponent: PopupComponent;
    popNext: () => void;
    popPrev: () => void;
    pop: () => void;
    enlightenReference: (divRef: any) => void;
    setHints: (popups: any) => void;
}
