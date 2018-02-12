import {
  AfterViewChecked,
  AfterViewInit,
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

  constructor(
    public popupService: PopupService,
    private resolver: ComponentFactoryResolver,
    private cdRef: ChangeDetectorRef,
    private hintsService: HintProviderService) { }

  public show(collection: string) {
    let hints: Hint[] = this.hintsService.getHints(collection);
    !hints && console.warn('tutty: ' + collection + ' not found!');

    this.preparePopupService(hints);
    this.currentHintIndex = 0;
    this.numberOfHints = hints.length;

    this.popupService.pop();
    this.display();
    this.cdRef.detectChanges();
  }

  private preparePopupService(hints: Hint[]): void {
    this.popupService.setHints(hints);
    this.popupService.elem = this.getElements(hints);
    this.popupService.popupComponent = this.createComponent();
  }

  private display() {
    this.overlayDisplay = 'block';
  }

  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }

  currentHintIndex: number;
  numberOfHints: number;

  overlayDisplay = 'none';
  overlayOpacity = 100;
  exitModalDisplay = 'none';

  showNextHint = () => {
    if (this.currentHintIndex === this.numberOfHints - 1) { this.close(); return; }
    this.currentHintIndex++;
    this.popupService.popNext();
  }

  showPrevHint = () => {
    this.currentHintIndex--;
    this.popupService.popPrev();
  }

  createComponent() {
    this.popupContainer.clear();
    const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(PopupComponent);
    return this.popupContainer.createComponent(factory).instance;
  }

  showExitModal = () => {
    this.exitModalDisplay = 'block';
  }

  close() {
    this.overlayOpacity = 0;
    setTimeout(() => {
      this.overlayDisplay = 'none';
    }, 1000);
  }

  private getElements(hints: Hint[]): HTMLElement[] {
    return hints.map((hint) => {
      return document.getElementById(hint.getId() as string);
    });
  }

}