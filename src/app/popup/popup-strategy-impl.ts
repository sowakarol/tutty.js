import PopupStrategyInterface from "./popup-strategy-interface";

export class PopupStrategyTop extends PopupStrategyInterface {

  setPosition(boundingClientRect, popupComponent) {
    this.positionPopup(boundingClientRect);
    popupComponent.popupTop = this.top - this.height - 2 * 25 + 'px' + '';
    popupComponent.popupBottom = '';
    popupComponent.popupLeft = this.left + 'px';
    this.positionArrow(document.getElementById('arrow'),'arrow-down');
  };
}

export class PopupStrategyBottom extends PopupStrategyInterface {

  setPosition(boundingClientRect, popupComponent) {
    this.positionPopup(boundingClientRect);
    popupComponent.popupTop = this.bottom + 'px';
    popupComponent.popupBottom = '';
    popupComponent.popupLeft = this.left + 'px';
    this.positionArrow(document.getElementById('arrow'),'arrow-up');
  };
}

export class PopupStrategyLeft extends PopupStrategyInterface {

  setPosition(boundingClientRect, popupComponent) {
    this.positionPopup(boundingClientRect);
    popupComponent.popupBottom = '';
    popupComponent.popupTop = this.top + 'px';
    popupComponent.popupRight = this.innerWindowWidth - this.left + 'px';
    popupComponent.popupLeft = 'initial';
    this.positionArrow(document.getElementById('arrow'),'arrow-right');
  };
}

export class PopupStrategyRight extends PopupStrategyInterface {

  setPosition(boundingClientRect, popupComponent) {
    this.positionPopup(boundingClientRect);
    popupComponent.popupTop = top + 'px';
    popupComponent.popupBottom = '';
    popupComponent.popupRight = 'initial';
    popupComponent.popupLeft = this.innerWindowWidth - this.right + 'px';
    this.positionArrow(document.getElementById('arrow'),'arrow-left');
  };
}
