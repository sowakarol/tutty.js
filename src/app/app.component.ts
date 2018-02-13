import { Component, ViewChild } from '@angular/core';
import { OverlayComponent } from './modules/tutty/overlay/overlay.component';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import {TuttyService} from "./modules/tutty/tutty/tutty.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  constructor(private tutty: TuttyService) { }
  title = 'app';

  ngAfterViewInit(): void {
    this.tutty.displayHints("first", 'inner');
  }

}
