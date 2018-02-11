"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let PopupService = class PopupService {
    constructor() {
        this.currentHint = 0;
        this.elem = [];
        this.popNext = () => {
            let divRef = this.elem[this.currentHint];
            divRef.style.zIndex = this.divRefZIndex;
            this.currentHint++;
            this.pop();
        };
        this.popPrev = () => {
            let divRef = this.elem[this.currentHint];
            divRef.style.zIndex = this.divRefZIndex;
            this.currentHint--;
            this.pop();
        };
        this.pop = () => {
            let hint = this.hints[this.currentHint];
            let divRef = this.elem[this.currentHint];
            this.divRefZIndex = divRef.style.zIndex;
            this.popupComponent.divRef = divRef;
            this.popupComponent.set(divRef, hint.direction);
            this.enlightenReference(divRef);
            this.popupComponent.popUp(hint.message, hint.id);
        };
        this.enlightenReference = (divRef) => {
            divRef.style.zIndex = 9999999;
            divRef.style.position = 'relative';
            divRef.style.pointerEvents = 'none';
        };
        this.setHints = (popups) => {
            this.hints = popups;
        };
    }
};
PopupService = __decorate([
    core_1.Injectable()
], PopupService);
exports.PopupService = PopupService;
//# sourceMappingURL=popup.service.js.map