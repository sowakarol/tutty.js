import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  constructor() { }

  private text: string;
  private isOpened: boolean;
  popupDisplay = 'block';

  ngOnInit() {
    this.isOpened = false;
    this.text = 'chuj';
  }

  popUp(text: string){
    this.text = text;
    this.isOpened = !this.isOpened;
    if(this.isOpened){

    }
    this.popupDisplay = 'block';
  }

  close(){
    this.text = null;
    // this.isOpened = false;
    this.popupDisplay = 'none';
    console.log("kurwa");
  }
}
