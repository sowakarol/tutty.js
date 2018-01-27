import {Component, ViewChild, ComponentFactory, ComponentFactoryResolver, ChangeDetectorRef} from '@angular/core';
import {ChatExampleData} from './data/chat-example-data';

import {UsersService} from './user/users.service';
import {ThreadsService} from './thread/threads.service';
import {MessagesService} from './message/messages.service';
import {JsonParserService} from './parser/json-parser.service';
import { OnInit, AfterViewInit, AfterViewChecked } from '@angular/core/src/metadata/lifecycle_hooks';
import { HintCollection, Hint } from './util/classes';
import { CookiesHandlerService } from './cookies-handler/cookies-handler.service';
import { OverlayComponent } from './overlay/overlay.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [JsonParserService],
  entryComponents: [OverlayComponent]
})
export class AppComponent {
  constructor(public messagesService: MessagesService,
              public threadsService: ThreadsService,
              public usersService: UsersService,
              public parser: JsonParserService,
              private cookiesHandler: CookiesHandlerService,
              private resolver: ComponentFactoryResolver,
              private cdRef: ChangeDetectorRef
              ) {
    ChatExampleData.init(messagesService, threadsService, usersService);
    console.log(parser.parse());
  }

}
