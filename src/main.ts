import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


if (!localStorage.getItem('Table')) {
  const languageData = [
    { name: "Angular", order: 1 },
    { name: "React", order: 2 },
    { name: "Ionic", order: 3 },
    { name: "Nestjs", order: 4 },
    { name: "NativeScript", order: 5 },
    { name: "Vuejs", order: 6 },
    { name: "Python", order: 7 },
    { name: "C", order: 8 },
    { name: "Ruby", order: 9 },
  ];
  localStorage.setItem('Table', JSON.stringify(languageData));
}