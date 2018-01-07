import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  @Input() public text: string;
  @Input() public idToPopup: string;
  popupDisplay = 'none';

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
