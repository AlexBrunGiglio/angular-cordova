import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OnesignalService {

  constructor() { }

  onInit(): void {
    this.onLoad().then((OneSignal) => {
      OneSignal.init({
        appId: "fdf3628d-8632-499f-b3e7-7c04bf2b1e2b",
      });
    });
  }

  async onLoad(): Promise<any> {
    window.OneSignal = window.OneSignal || [];
    return new Promise((resolve) => {
      window.OneSignal.push(function () {
        resolve(window.OneSignal);
      });
    });
  }
}
