import {Component, ViewChild} from '@angular/core';
import {ChatExampleData} from './data/chat-example-data';

import {UsersService} from './user/users.service';
import {ThreadsService} from './thread/threads.service';
import {MessagesService} from './message/messages.service';
import {AfterViewInit} from '@angular/core/src/metadata/lifecycle_hooks';
import {OverlayComponent} from './overlay/overlay.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  entryComponents: [OverlayComponent]
})
export class AppComponent implements AfterViewInit {


  @ViewChild(OverlayComponent) overlay: OverlayComponent;

  constructor(public messagesService: MessagesService,
              public threadsService: ThreadsService,
              public usersService: UsersService) {
    ChatExampleData.init(messagesService, threadsService, usersService);
  }

  ngAfterViewInit() {
    this.overlay.show('first');
  }
}
