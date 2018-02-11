"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PopupStrategyInterface {
    positionPopup(boundingClientRect) {
        this.left = boundingClientRect.left;
        this.right = boundingClientRect.right;
        this.top = boundingClientRect.top;
        this.bottom = boundingClientRect.bottom;
        this.innerWindowWidth = window.innerWidth;
        this.height = document.getElementById('popup').getBoundingClientRect().height;
    }
}
exports.default = PopupStrategyInterface;
//# sourceMappingURL=popup-strategy-interface.js.map