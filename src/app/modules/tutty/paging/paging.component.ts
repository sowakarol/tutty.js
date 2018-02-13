import { Component, Input, EventEmitter, Output, OnChanges } from '@angular/core';
import {PagingState} from './paging-state-interface';
import { PagingStateFirstElement } from './paging-state-implementations';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.css']
})
export class PagingComponent {

  @Input() public currentHintIndex;
  @Input() public numberOfHints;
  @Input() public pagingPointerEvents;

  @Output() nextHintEvent = new EventEmitter<any>();
  @Output() prevHintEvent = new EventEmitter<any>();

  public nextButtonText = 'Next';
  public disablePrevButton = true;

  private pagingState: PagingState = new PagingStateFirstElement();

  constructor() { }

  private nextHint(): void {
    this.nextHintEvent.emit();
    this.pagingState.pressNextButton(this);
  }

  private prevHint(): void {
    this.prevHintEvent.emit();
    this.pagingState.pressPrevButton(this);
  }

  public setState(newState: PagingState): void {
    this.pagingState = newState;
  }

}