import PopupStrategyInterface from "./popup-strategy-interface";

export class PopupStrategyTop extends PopupStrategyInterface{

    setPosition(boundingClientRect, popupComponent){
        this.shit(boundingClientRect,popupComponent);
        popupComponent.popupTop = this.top - this.height - 2 * 25 + 'px' + '';
        popupComponent.popupBottom = '';
        popupComponent.popupLeft = this.left + 'px';
    };
}
export class PopupStrategyBottom extends PopupStrategyInterface{

    setPosition(boundingClientRect, popupComponent){
        this.shit(boundingClientRect,popupComponent);
        popupComponent.popupTop = this.bottom +'px';
        popupComponent.popupBottom = '';
        popupComponent.popupLeft = this.left + 'px';
    };
}
export class PopupStrategyLeft extends PopupStrategyInterface{

    setPosition(boundingClientRect, popupComponent){
        this.shit(boundingClientRect,popupComponent);
        popupComponent.popupBottom = '';
        popupComponent.popupTop = this.top + 'px';
        popupComponent.popupRight = this.innerWindowWidth - this.left + 'px';
        popupComponent.popupLeft = 'initial';
    };
}
export class PopupStrategyRight extends PopupStrategyInterface{

    setPosition(boundingClientRect, popupComponent){
        this.shit(boundingClientRect,popupComponent);
        popupComponent.popupTop = top + 'px';
        popupComponent.popupBottom = '';
        popupComponent.popupRight = 'initial';
        popupComponent.popupLeft = this.innerWindowWidth - this.right + 'px';
    };
}
