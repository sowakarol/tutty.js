import {Component, ViewChild, ComponentFactory, ComponentFactoryResolver, ChangeDetectorRef} from '@angular/core';
import {ChatExampleData} from './data/chat-example-data';

import {UsersService} from './user/users.service';
import {ThreadsService} from './thread/threads.service';
import {MessagesService} from './message/messages.service';
import { OnInit, AfterViewInit, AfterViewChecked, AfterContentChecked } from '@angular/core/src/metadata/lifecycle_hooks';
import { OverlayComponent } from './overlay/overlay.component';
import { TuttyService } from './tutty/tutty.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TuttyService]
})
export class AppComponent implements AfterViewChecked {

  @ViewChild(OverlayComponent) overlay: OverlayComponent;

  constructor(public messagesService: MessagesService,
              public threadsService: ThreadsService,
              public usersService: UsersService,
              private tuttyService : TuttyService,
              private cdRef: ChangeDetectorRef
              ) {
    ChatExampleData.init(messagesService, threadsService, usersService);
  }

  ngAfterViewChecked() {
    this.tuttyService.displayHints("first");
  }



}
