import { Injectable, 
        ComponentFactoryResolver, 
        ApplicationRef, 
        Injector, 
        ComponentRef} from '@angular/core';
import { OverlayComponent } from '../overlay/overlay.component';
import { EmbeddedViewRef } from '@angular/core/src/linker/view_ref';

@Injectable()
export class TuttyService {

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector) { }

  public displayHints(collectionName: string): void {
    const componentRef = this.createComponent();

    this.appRef.attachView(componentRef.hostView);
    this.attachComponentToDOM(componentRef);
    componentRef.instance.show(collectionName);
    
  }

  private createComponent(): ComponentRef<OverlayComponent> {
      return this.componentFactoryResolver
        .resolveComponentFactory(OverlayComponent)
        .create(this.injector);   
  }

  private attachComponentToDOM(componentRef: any): void {
    const domElem = (componentRef.hostView as EmbeddedViewRef<OverlayComponent>)
      .rootNodes[0] as HTMLElement;

    document.body.appendChild(domElem);
  }

}
