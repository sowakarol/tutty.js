import { Injectable, 
        ComponentFactoryResolver, 
        ApplicationRef, 
        Injector, 
        ComponentRef,
        HostListener} from '@angular/core';
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

  public displayHints(collectionName: string): void {
    console.log('tutty: displaying ' + collectionName);
    const hints: Hint[] = this.hintsProvider.getHints(collectionName);
    if (!hints || hints.length === 0) {
      return;
    } 
    
    let componentRef = this.createComponent();

    debugger;
    this.appRef.attachView(componentRef.hostView);
    this.attachComponentToDOM(componentRef);

    debugger;
    this.hintsProvider.setShown(collectionName);
    componentRef.instance.show(hints);
  }

  private createComponent(): ComponentRef<OverlayComponent> {
      return this.componentFactoryResolver
        .resolveComponentFactory(OverlayComponent)
        .create(this.injector);   
  }

  private attachComponentToDOM(componentRef: any): void {
    const domElem = (componentRef.hostView as EmbeddedViewRef<OverlayComponent>)
      .rootNodes[0] as HTMLElement;

    debugger;
    document.body.appendChild(domElem);
  }

}
