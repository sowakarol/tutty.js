import {
  ApplicationRef, Component, ComponentFactoryResolver, EmbeddedViewRef, Injector, Input,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  constructor(
    private compFacResolv: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {};

  @Input() public text: string;
  @Input() public idToPopup: string;
  popupDisplay = 'none';

  ngOnInit() {
    this.popUp(this.text, this.idToPopup);
  }

  popUp(text: string, id: string) {
    this.text = text;
    this.idToPopup = id;
    this.popupDisplay = 'block';
    let elementById = document.getElementById(id);
    this.appendComponentToBody(elementById);
  }

  appendComponentToBody(component: any){
    const componentRef = this.compFacResolv
      .resolveComponentFactory(component)
      .create(this.injector);

    this.appRef.attachView(componentRef.hostView);

    const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

    document.body.appendChild(domElem);
  }

  close() {
    this.popupDisplay = 'none';
    console.log("kurwa");
  }
}
