import {
  Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, Inject, OnInit, ViewChild,
  ViewContainerRef
} from '@angular/core';
import {ChatExampleData} from './data/chat-example-data';

import {UsersService} from './user/users.service';
import {ThreadsService} from './thread/threads.service';
import {MessagesService} from './message/messages.service';
import {JsonParserService} from './parser/json-parser.service';
import {PopupComponent} from "./popup/popup.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [JsonParserService]
})
export class AppComponent{

  @ViewChild(
    "popupContainer", {
      read: ViewContainerRef
    }
  ) popupContainer;

  constructor(public messagesService: MessagesService,
              public threadsService: ThreadsService,
              public usersService: UsersService,
              public parser: JsonParserService,
              private resolver: ComponentFactoryResolver,
              ) {
    ChatExampleData.init(messagesService, threadsService, usersService);
    console.log(parser.parse());
  }

  createComponent(type){
    this.popupContainer.clear();
    const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(PopupComponent);
    let componentRef = this.popupContainer.createComponent(factory);
    componentRef.instance.popUp(type, null);
  }
}
