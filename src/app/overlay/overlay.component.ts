import {
  ChangeDetectorRef, Component, ComponentFactory, ComponentFactoryResolver, Input, ViewChild,
  ViewContainerRef
} from '@angular/core';
import {PopupService} from '../popup/popup.service';
import {PopupComponent} from '../popup/popup.component';
import {HintProviderService} from '../hint-provider/hint-provider.service';
import {Hint} from '../util/classes';
import {PagingComponent} from '../paging/paging.component';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css'],
  entryComponents: [PopupComponent, PagingComponent],
  providers: [PopupService]
})
export class OverlayComponent {

  private pagingComponent: PagingComponent = new PagingComponent();
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
    private hintsService: HintProviderService
   ) { }

  currentHintIndex: number;
  numberOfHints: number;

  overlayDisplay= 'none';
  exitModalDisplay= 'none';

  public show(hints: Hint[]) {

    this.preparePopupService(hints);
    this.currentHintIndex = 0;
    this.numberOfHints = hints.length;

    this.popupService.pop();
    this.display();
    this.cdRef.detectChanges()
  }

  private preparePopupService(hints: Hint[]): void {
    this.popupService.setHints(hints);
    this.popupService.elem = this.getElements(hints);
    this.popupService.popupComponent = this.createComponent();
  }


  private display() {
    this.overlayDisplay = 'block';
  }

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

  // TODO: WTF
  createComponent() {
    this.popupContainer.clear();
    const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(PopupComponent);
    return this.popupContainer.createComponent(factory).instance;
  }

  showExitModal = () => this.exitModalDisplay = 'block';

  closeExitModal = () => this.exitModalDisplay = 'none';

  close = () => this.overlayDisplay = 'none';

  private getElements(hints: Hint[]): HTMLElement[] {
    return hints.map((hint) => {
      return document.getElementById(hint.getId() as string);
    })
  }

}
