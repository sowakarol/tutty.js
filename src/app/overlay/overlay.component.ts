import { Component, OnInit, AfterViewChecked, AfterViewInit, ViewChild, ViewContainerRef, ComponentFactory,
  ComponentFactoryResolver, ChangeDetectorRef, Input} from '@angular/core';
import { PopupService } from '../popup/popup.service';
import { PopupComponent } from '../popup/popup.component';
import { HintProviderService } from '../hint-provider/hint-provider.service';
import { Hint } from '../util/classes';
import { JsonParserService } from '../parser/json-parser.service';

const TEST_DATA: number[] = [0, 1 , 2, 3, 4, 5, 6, 7, 8, 9];

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css'],
  entryComponents: [PopupComponent],
  providers: [JsonParserService, 
    HintProviderService, 
    PopupService]
})
export class OverlayComponent implements OnInit, AfterViewInit, AfterViewChecked {

  @Input() collection: string;

  @ViewChild(
    'popupContainer', {
      read: ViewContainerRef
    }
  ) popupContainer;

  private hints: Hint[];

  constructor(
    public popupService: PopupService,
    private resolver: ComponentFactoryResolver,
    private cdRef: ChangeDetectorRef,
    private hintsService: HintProviderService) { }

  ngOnInit() {
    this.hints = this.hintsService.getHints(this.collection);
    this.popupService.setHints(this.hints);
    this.currentHintIndex = 0;
    this.numberOfHints = this.hints.length;
  }

  ngAfterViewInit() {
    this.popupService.elem = this.getElements(this.hints);
    this.popupService.popupComponent = this.createComponent();
    this.popupService.popNext();
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

  getElements(hints: Hint[]): HTMLElement[] {
    return hints.map((hint) => {
      return document.getElementById(hint.getId() as string);
    })
  }

}
