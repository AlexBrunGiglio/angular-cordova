import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DeviceDetectorService, DeviceInfo } from 'ngx-device-detector';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class InfoComponent implements OnInit {
  deviceInfo!: DeviceInfo;
  constructor(
    private deviceDetectorService: DeviceDetectorService,
  ) { }

  ngOnInit(): void {
    this.deviceInfo = this.deviceDetectorService.getDeviceInfo();
  }

}
