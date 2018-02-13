import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  Input,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {PopupService} from '../popup/popup.service';
import {PopupComponent} from '../popup/popup.component';
import {HintProviderService} from '../hint-provider/hint-provider.service';
import {Hint} from '../util/classes';
import {JsonParserService} from '../parser/json-parser.service';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css'],
  entryComponents: [PopupComponent],
  providers: [JsonParserService,
    HintProviderService,
    PopupService]
})
export class OverlayComponent implements AfterViewChecked {

  @Input() collection: string;

  @ViewChild(
    'popupContainer', {
      read: ViewContainerRef
    }
  ) popupContainer;

  constructor(public popupService: PopupService,
              private resolver: ComponentFactoryResolver,
              private cdRef: ChangeDetectorRef,
              private hintsService: HintProviderService) {
  }

  public show(collection: string) {
    let hints: Hint[] = this.hintsService.getHints(collection);
    !hints && console.warn('tutty: ' + collection + ' not found!');

    this.numberOfHints = this.preparePopupService(hints);
    this.currentHintIndex = 0;

    this.popupService.pop();
    this.display();
    this.cdRef.detectChanges();
  }

  private preparePopupService(hints: Hint[]): number {
    let nonNullHints = this.getNonNullHints(hints);
    this.popupService.elem = this.getHTMLElements(nonNullHints);
    this.popupService.setHints(nonNullHints);
    this.popupService.popupComponent = this.createComponent();
    return nonNullHints.length;
  }

  private display() {
    this.overlayDisplay = 'block';
    this.pagingDisplay = 'inline-block';
    this.exitIconDisplay = 'block';
  }

  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }

  currentHintIndex: number;
  numberOfHints: number;
  pagingPointerEvents: string = 'auto';

  overlayOpacity = 100;
  pagingOpacity = 100;
  exitIconOpacity = 100;
  exitModalOpacity = 100;

  overlayDisplay = 'none';
  pagingDisplay = 'none';
  exitIconDisplay = 'none';
  exitModalDisplay = 'none';

  showNextHint(): void {
    if (this.currentHintIndex === this.numberOfHints - 1) {
      this.close();
      return;
    }
    this.currentHintIndex++;
    this.popupService.popNext();
  }

  showPrevHint(): void {
    this.currentHintIndex--;
    this.popupService.popPrev();
  }

  createComponent(): PopupComponent {
    this.popupContainer.clear();
    const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(PopupComponent);
    return this.popupContainer.createComponent(factory).instance;
  }

  showExitModal(): void {
    this.exitIconDisplay = 'none';
    this.exitModalDisplay = 'block';
    this.pagingPointerEvents = 'none';
  }

  closeExitModal(): void {
    this.exitIconDisplay = 'block';
    this.exitModalDisplay = 'none';
    this.pagingPointerEvents = 'auto';
  }

  close(): void {
    this.overlayOpacity = 0;
    this.pagingOpacity = 0;
    this.exitIconOpacity = 0;
    this.exitModalOpacity = 0;

    this.popupService.resetDiv();

    setTimeout(() => {
      this.overlayDisplay = 'none';
      this.exitIconDisplay = 'none';
      this.pagingDisplay = 'none';
      this.exitModalDisplay = 'none';
    }, 1000);
  }

  private getNonNullHints(hints: Hint[]): Hint[] {
    let hinters = [];
    for (let i = 0; i < hints.length; i++) {
      if (document.getElementById(hints[i].getId() as string) != null) {
        hinters.push(hints[i]);
      }
    }
    return hinters;
  }

  private getHTMLElements(hints: Hint[]): HTMLElement[] {
    return hints
      .map((hint) => document.getElementById(hint.getId() as string));
  }
}
