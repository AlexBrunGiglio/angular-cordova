import { Component, OnInit } from '@angular/core';
import { OnesignalService } from './onesignal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Andova - TP1';

  constructor(private os: OnesignalService) { }

  ngOnInit() {
    this.os.onInit();
  }
}
