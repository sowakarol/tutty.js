import PopupStrategyInterface from "./popup-strategy-interface";

export class PopupStrategyTop extends PopupStrategyInterface {

  setPosition(boundingClientRect, popupComponent) {
    this.positionPopup(boundingClientRect);
    popupComponent.popupTop = this.top - this.height - 20  +  'px'; //margin arrow
    popupComponent.popupBottom = '';
    popupComponent.popupLeft =  ((- this.left + this.right) / 2) + this.left - this.width / 2 + 'px';
    this.positionArrow(document.getElementById('arrow'),'arrow-down');
  };
}

export class PopupStrategyBottom extends PopupStrategyInterface {

  setPosition(boundingClientRect, popupComponent) {
    this.positionPopup(boundingClientRect);
    popupComponent.popupTop = this.bottom  + 6  +  'px'; //arrow
    popupComponent.popupBottom = '';
    popupComponent.popupLeft =  ((- this.left + this.right) / 2) + this.left - this.width / 2 + 'px';
    this.positionArrow(document.getElementById('arrow'),'arrow-up');
  };
}

export class PopupStrategyLeft extends PopupStrategyInterface {

  setPosition(boundingClientRect, popupComponent) {
    this.positionPopup(boundingClientRect);
    popupComponent.popupBottom = '';
    popupComponent.popupTop = this.top + ((this.top - this.bottom) / 2) - 6  + 'px';
    popupComponent.popupRight = this.innerWindowWidth - this.left + 'px';
    popupComponent.popupLeft = 'initial';
    this.positionArrow(document.getElementById('arrow'),'arrow-right');
    if (popupComponent.popupTop < 0 ) popupComponent.popupTop = 0;
  };
}

export class PopupStrategyRight extends PopupStrategyInterface {

  setPosition(boundingClientRect, popupComponent) {
    this.positionPopup(boundingClientRect);
    popupComponent.popupBottom = '';
    popupComponent.popupTop = this.top + ((this.top - this.bottom) / 2) + 6  + 'px';
    popupComponent.popupRight = this.innerWindowWidth - this.right + this.left + 'px';
    popupComponent.popupLeft = this.right + 10 + 'px';
    popupComponent.popupRight = 'initial';
    this.positionArrow(document.getElementById('arrow'),'arrow-left');
  };
}
