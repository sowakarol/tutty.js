import {Component} from '@angular/core';
import {AfterViewInit} from '@angular/core/src/metadata/lifecycle_hooks';
import {TuttyService} from "./modules/tutty/tutty/tutty.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // templateUrl: './plik2.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  constructor(private tutty: TuttyService) {
  }

  ngAfterViewInit(): void {
    this.tutty.displayHints("first", 'inner');
    // this.tutty.displayHints("upel", 'upelek');
  }
}
