import { Component, ViewChild } from '@angular/core';
import { OverlayComponent } from './modules/tutty/overlay/overlay.component';
import { AfterViewChecked, AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { TuttyService } from './modules/tutty/tutty/tutty.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TuttyService]
})
export class AppComponent implements AfterViewInit {

  title = 'app';
  constructor(private tutty: TuttyService) { }
  

  ngAfterViewInit(): void {
    this.tutty.displayHints("first");
  }

}
