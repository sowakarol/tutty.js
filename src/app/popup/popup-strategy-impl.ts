import PopupStrategyInterface from "./popup-strategy-interface";

export class PopupStrategyTop extends PopupStrategyInterface {

  setPosition(boundingClientRect, popupComponent) {
    this.positionPopup(boundingClientRect);
    popupComponent.popupTop = this.top - this.height - 2 * 25 + 'px' + '';
    popupComponent.popupBottom = '';
    popupComponent.popupLeft = - (this.width / 2) + ((this.left + this.right)/2) + 'px';
    this.positionArrow(document.getElementById('arrow'),'arrow-down');
  };
}

export class PopupStrategyBottom extends PopupStrategyInterface {

  setPosition(boundingClientRect, popupComponent) {
    this.positionPopup(boundingClientRect);
    popupComponent.popupTop = this.bottom + 'px';
    popupComponent.popupBottom = '';
    console.log(this.width);
    popupComponent.popupLeft = - (this.width / 2) + ((this.left + this.right)/2)+ 'px';
    console.log(popupComponent.popupLeft );
    this.positionArrow(document.getElementById('arrow'),'arrow-up');
  };
}

export class PopupStrategyLeft extends PopupStrategyInterface {

  setPosition(boundingClientRect, popupComponent) {
    this.positionPopup(boundingClientRect);
    popupComponent.popupBottom = '';
    popupComponent.popupTop = this.top - this.bottom + 'px';
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
    popupComponent.popupTop = this.top + ((this.top - this.bottom) / 2)  + 'px';
    console.log(this);
    popupComponent.popupRight = this.innerWindowWidth - this.right - this.left - this.width + 'px';
    console.log(popupComponent.popupRight);
    popupComponent.popupLeft = 'initial';

    this.positionArrow(document.getElementById('arrow'),'arrow-left');
  };
}
