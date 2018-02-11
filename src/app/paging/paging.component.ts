import { Component, Input, EventEmitter, Output, OnChanges } from '@angular/core';
import PagingState from './paging-state-interface';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.css']
})
export class PagingComponent implements OnChanges {

  @Input() private currentHintIndex;
  @Input() private numberOfHints;

  @Output() nextHintEvent = new EventEmitter<any>();
  @Output() prevHintEvent = new EventEmitter<any>();

  private nextButtonText = 'Next';
  private disablePrevButton = true;

  private pagingState: PagingState;

  constructor() { }

  ngOnChanges() {

    this.numberOfHints > 1 ? this.nextButtonText = 'Next' : this.nextButtonText = 'Close';

    this.currentHintIndex === 0 ? this.disablePrevButton = true : this.disablePrevButton = false;
    if (this.currentHintIndex === this.numberOfHints - 1) {
      this.nextButtonText = 'Close';
    }
    if (this.currentHintIndex === this.numberOfHints - 2) {
      this.nextButtonText = 'Next';
    }
  }

  private nextHint(): void {
    this.nextHintEvent.emit();
  }

  private prevHint(): void {
    this.prevHintEvent.emit();
  }

}
