import {Component, HostListener, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  @Input() public text: string;
  @Input() public idToPopup: string;
  popupDisplay = 'none';
  popupLeft = '0px';
  popupTop = '0px';
  popupBottom = '0px';
  popupRight = '0px';
  margin = 25;
  divRef;
  direction;

  @HostListener('window:resize')
  onResize() {
    this.set(this.divRef,this.direction);
  }

  constructor() {
  };

  ngOnInit() {
  }

  popUp(text: string, id: string) {
    this.text = text;
    this.idToPopup = id;
    this.popupDisplay = 'block';
  }

  close() {
    this.popupDisplay = 'none';
  }

  set = (divRef, direction) => {
    let boundingClientRect = divRef.getBoundingClientRect();
    this.divRef= divRef;
    let left = boundingClientRect.left;
    let right = boundingClientRect.right;
    let top = boundingClientRect.top;
    let bottom = boundingClientRect.bottom;
    let w = window.innerWidth;
    let height = document.getElementById('popup').getBoundingClientRect().height;

    if(direction === "right"){
      console.log("right");
      this.popupTop = top+'px';
      this.popupBottom = '';
      this.popupRight = 'initial';
      this.popupLeft = w-right + 'px';
    }
    if(direction === "left"){
      console.log("left");
      this.popupBottom = '';
      this.popupTop = top +'px';
      this.popupRight = w-left + 'px';
      this.popupLeft = 'initial';
    }
    if(direction === "top"){
      console.log("top");
      this.popupTop = top - height - 2*this.margin + 'px' + '';
      this.popupBottom = '';
      this.popupLeft = left + 'px';
    }
    if(direction === "bottom"){
      this.popupTop = bottom +'px';
      this.popupBottom = '';
      this.popupLeft = left + 'px';
      console.log("bot");
    }
  };
}
