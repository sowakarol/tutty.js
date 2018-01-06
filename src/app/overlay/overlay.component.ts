import { Component, OnInit } from '@angular/core';

const TEST_DATA: number[] = [1 , 2, 3, 4, 5, 6, 7, 8, 9];


@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css']
})
export class OverlayComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    this.currentHintIndex = 0;
    this.numberOfHints = TEST_DATA.length;
  }

 // TODO: change on hint type
  currentHintIndex: number;
  numberOfHints: number;

  overlayDisplay= 'block';
  exitModalDisplay= 'none';
  nextButtonText= 'Next';

  showNextHint = () => {
    if (this.currentHintIndex === this.numberOfHints - 1) {
      this.close();
      return;
    }

    this.currentHintIndex++;
    if (this.currentHintIndex === this.numberOfHints - 1) {
      this.nextButtonText = 'Close';
    }

  }

  showPrevHint = () => {
    this.currentHintIndex--;
    if (this.currentHintIndex === this.numberOfHints - 2) {
      this.nextButtonText = 'Next';
    }
  }

  showExitModal = () => this.exitModalDisplay = 'block';

  closeExitModal = () => this.exitModalDisplay = 'none';

  close = () =>  this.overlayDisplay = 'none';

}
