import { Component, ViewChild } from '@angular/core';
import { OverlayComponent } from './modules/tutty/overlay/overlay.component';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  @ViewChild(OverlayComponent) tutty: OverlayComponent;


  title = 'app';

  ngAfterViewInit(): void {
    this.tutty.show("first");
  }

}
