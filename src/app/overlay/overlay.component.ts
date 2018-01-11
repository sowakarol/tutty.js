import { Component, OnInit, AfterViewChecked, AfterViewInit, ViewChild, ViewContainerRef, ComponentFactory,
  ComponentFactoryResolver, ChangeDetectorRef} from '@angular/core';
import { PopupService } from '../popup/popup.service';
import { PopupComponent } from '../popup/popup.component';

const TEST_DATA: number[] = [1 , 2, 3, 4, 5, 6, 7, 8, 9];

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css'],
  entryComponents: [PopupComponent]
})
export class OverlayComponent implements OnInit, AfterViewInit, AfterViewChecked {

  @ViewChild(
    'popupContainer', {
      read: ViewContainerRef
    }
  ) popupContainer;

  constructor(
    public popupService: PopupService,
    private resolver: ComponentFactoryResolver,
    private cdRef: ChangeDetectorRef) {}

  ngOnInit() {
    this.currentHintIndex = 0;
    this.numberOfHints = TEST_DATA.length;
  }

  ngAfterViewInit() {
    console.log('afterview');
    // this.popupService.setDoc(document);
    this.popupService.elem[0] = document.getElementById('chat-page');
    this.popupService.elem[1] = document.getElementById('messages');
    // console.log(this.popupService.elem[0]);
    this.popupService.popupComponent = this.createComponent();
  }

  ngAfterViewChecked() {
    this.cdRef.detectChanges();
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

    this.popupService.popNext();

  }

  showPrevHint = () => {
    this.currentHintIndex--;
    if (this.currentHintIndex === this.numberOfHints - 2) {
      this.nextButtonText = 'Next';
    }

    this.popupService.popPrev();

  }

  createComponent() {
    this.popupContainer.clear();
    const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(PopupComponent);
    return this.popupContainer.createComponent(factory).instance;
  }

  showExitModal = () => this.exitModalDisplay = 'block';

  closeExitModal = () => this.exitModalDisplay = 'none';

  close = () =>  this.overlayDisplay = 'none';

}
