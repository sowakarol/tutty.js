"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const popup_strategy_interface_1 = require("./popup-strategy-interface");
class PopupStrategyTop extends popup_strategy_interface_1.default {
    setPosition(boundingClientRect, popupComponent) {
        this.positionPopup(boundingClientRect);
        popupComponent.popupTop = this.top - this.height - 2 * 25 + 'px' + '';
        popupComponent.popupBottom = '';
        popupComponent.popupLeft = this.left + 'px';
    }
    ;
}
exports.PopupStrategyTop = PopupStrategyTop;
class PopupStrategyBottom extends popup_strategy_interface_1.default {
    setPosition(boundingClientRect, popupComponent) {
        this.positionPopup(boundingClientRect);
        popupComponent.popupTop = this.bottom + 'px';
        popupComponent.popupBottom = '';
        popupComponent.popupLeft = this.left + 'px';
    }
    ;
}
exports.PopupStrategyBottom = PopupStrategyBottom;
class PopupStrategyLeft extends popup_strategy_interface_1.default {
    setPosition(boundingClientRect, popupComponent) {
        this.positionPopup(boundingClientRect);
        popupComponent.popupBottom = '';
        popupComponent.popupTop = this.top + 'px';
        popupComponent.popupRight = this.innerWindowWidth - this.left + 'px';
        popupComponent.popupLeft = 'initial';
    }
    ;
}
exports.PopupStrategyLeft = PopupStrategyLeft;
class PopupStrategyRight extends popup_strategy_interface_1.default {
    setPosition(boundingClientRect, popupComponent) {
        this.positionPopup(boundingClientRect);
        popupComponent.popupTop = top + 'px';
        popupComponent.popupBottom = '';
        popupComponent.popupRight = 'initial';
        popupComponent.popupLeft = this.innerWindowWidth - this.right + 'px';
    }
    ;
}
exports.PopupStrategyRight = PopupStrategyRight;
//# sourceMappingURL=popup-strategy-impl.js.map