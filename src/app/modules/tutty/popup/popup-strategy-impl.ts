import PopupStrategyInterface from "./popup-strategy-interface";

export class PopupStrategyTop extends PopupStrategyInterface {

  setPosition(boundingClientRect, popupComponent) {
    this.positionPopup(boundingClientRect);
    popupComponent.popupTop = this.top - this.height - 20  +  'px'; //margin arrow
    console.log(this);
    popupComponent.popupBottom = '';
    popupComponent.popupLeft =  (this.width / 2) - this.width + this.left + 12   + 'px'; //margin
    this.positionArrow(document.getElementById('arrow'),'arrow-down');
  };
}

export class PopupStrategyBottom extends PopupStrategyInterface {

  setPosition(boundingClientRect, popupComponent) {
    this.positionPopup(boundingClientRect);
    popupComponent.popupTop = this.bottom  + 6  +  'px'; //arrow
    popupComponent.popupBottom = '';
    console.log(this);
    popupComponent.popupLeft =  - (this.width / 2) + ((this.left + this.right)/2)+ 'px';
    //popupComponent.popupLeft =  (this.width / 2) - this.width + this.left + 12   + 'px'; //margin

    console.log(popupComponent.popupLeft );
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
    console.log(this);
    popupComponent.popupRight = this.innerWindowWidth - this.right + this.left + 'px';
    console.log(popupComponent.popupRight);
    popupComponent.popupLeft = this.right + 10 + 'px';
    popupComponent.popupRight = 'initial';

    this.positionArrow(document.getElementById('arrow'),'arrow-left');
  };
}
