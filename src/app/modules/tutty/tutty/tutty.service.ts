import { Injectable,
        ComponentFactoryResolver,
        ApplicationRef,
        Injector,
        ComponentRef} from '@angular/core';
import { OverlayComponent } from '../overlay/overlay.component';
import { EmbeddedViewRef } from '@angular/core/src/linker/view_ref';
import { Hint } from '../util/classes';
import { HintProviderService } from '../hint-provider/hint-provider.service';

@Injectable()
export class TuttyService {

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector,
    private hintsProvider: HintProviderService) { }

  public displayHints(collectionName: string, parentId: string): void {
    const hints: Hint[] = this.hintsProvider.getHints(collectionName);
    if (hints.length === 0 || !hints) {
      return;
    }
    this.hintsProvider.setShown(collectionName);

    let componentRef = this.createComponent();

    this.appRef.attachView(componentRef.hostView);
    this.attachComponentToDOM(componentRef, parentId);

    componentRef.instance.show(hints);
  }

  private createComponent(): ComponentRef<OverlayComponent> {
      return this.componentFactoryResolver
        .resolveComponentFactory(OverlayComponent)
        .create(this.injector);
  }

  private attachComponentToDOM(componentRef: any, id: string): void {
    const domElem = (componentRef.hostView as EmbeddedViewRef<OverlayComponent>)
      .rootNodes[0] as HTMLElement;

    document.getElementById(id).appendChild(domElem);
  }

}
