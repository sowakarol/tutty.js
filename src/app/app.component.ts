import {Component, ViewChild} from '@angular/core';
import {ChatExampleData} from './data/chat-example-data';

import {UsersService} from './user/users.service';
import {ThreadsService} from './thread/threads.service';
import {MessagesService} from './message/messages.service';
import { OnInit, AfterViewInit, AfterViewChecked } from '@angular/core/src/metadata/lifecycle_hooks';
import { OverlayComponent } from './overlay/overlay.component';
import { TuttyService } from './tutty/tutty.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TuttyService]
})
export class AppComponent implements AfterViewInit {


  @ViewChild(OverlayComponent) overlay: OverlayComponent;

  constructor(public messagesService: MessagesService,
              public threadsService: ThreadsService,
              public usersService: UsersService,
              private tuttyService : TuttyService,
              ) {
    ChatExampleData.init(messagesService, threadsService, usersService);
  }

  ngAfterViewInit() {
    this.tuttyService.displayHints("first");
  }
}
