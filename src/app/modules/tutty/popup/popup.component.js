"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const popup_strategy_impl_1 = require("./popup-strategy-impl");
let PopupComponent = class PopupComponent {
    constructor() {
        this.popupDisplay = 'none';
        this.set = (divRef, direction) => {
            let boundingClientRect = divRef.getBoundingClientRect();
            this.divRef = divRef;
            switch (direction) {
                case 'right':
                    new popup_strategy_impl_1.PopupStrategyRight().setPosition(boundingClientRect, this);
                    break;
                case 'left':
                    new popup_strategy_impl_1.PopupStrategyLeft().setPosition(boundingClientRect, this);
                    break;
                case 'top':
                    new popup_strategy_impl_1.PopupStrategyTop().setPosition(boundingClientRect, this);
                    break;
                case 'bottom':
                    new popup_strategy_impl_1.PopupStrategyBottom().setPosition(boundingClientRect, this);
                    break;
            }
        };
    }
    onResize() {
        this.set(this.divRef, this.direction);
    }
    popUp(text, id) {
        this.text = text;
        this.idToPopup = id;
        this.popupDisplay = 'block';
    }
};
__decorate([
    core_1.HostListener('window:resize'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PopupComponent.prototype, "onResize", null);
PopupComponent = __decorate([
    core_1.Component({
        selector: 'app-popup',
        templateUrl: './popup.component.html',
        styleUrls: ['./popup.component.css']
    })
], PopupComponent);
exports.PopupComponent = PopupComponent;
//# sourceMappingURL=popup.component.js.map