import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { IonicThemeSwitcherModule } from './ionic-switch-theme.module';

platformBrowserDynamic().bootstrapModule(IonicThemeSwitcherModule)
  .catch(err => console.log(err));
