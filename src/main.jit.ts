import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)

// var promise = platformBrowserDynamic().bootstrapModule(AppModule);
// promise.then(() => console.log('test'));

// document.addEventListener('WebComponentsReady', () => {
//   platformBrowserDynamic().bootstrapModule(AppModule)
// });