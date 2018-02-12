import { Component, Input, EventEmitter, Output } from '@angular/core';
import {PagingState} from './paging-state-interface';
import {PagingStateFirstElement} from './paging-state-implementations';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.css']
})
export class PagingComponent {

  @Input() currentHintIndex;
  @Input() numberOfHints;

  @Output() nextHintEvent = new EventEmitter<any>();
  @Output() prevHintEvent = new EventEmitter<any>();

  public nextButtonText: String = 'Next';
  public disablePrevButton: Boolean = true;
  private pagingState: PagingState = new PagingStateFirstElement();

  constructor() {}

  // TODO: figure out 
  // ngOnInit()  {
  //   this.numberOfHints === 1 ? this.nextButtonText = 'Close' : this.nextButtonText = 'Next';
  // }

  private nextHint(): void {
    this.nextHintEvent.emit();
    this.pagingState.pressNextButton(this);
  }

  private prevHint(): void {
    this.prevHintEvent.emit();
    this.pagingState.pressPrevButton(this);
  }

  public setState(newPagingState): void {
    this.pagingState = newPagingState;
  }

}
