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


  @HostListener('window:resize')
  onResize() {
    // call our matchHeight function here
    // this.matchHeight(this.el.nativeElement, this.myMatchHeight);
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
}
