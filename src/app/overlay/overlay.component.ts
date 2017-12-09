import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css']
})
export class OverlayComponent implements OnInit {

  constructor() { }

  overlayDisplay= 'block';

  close = () => {
    this.overlayDisplay = 'none';
  }

  ngOnInit() {
  }

}
