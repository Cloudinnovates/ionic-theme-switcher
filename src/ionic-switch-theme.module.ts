import { NgModule, ModuleWithProviders } from '@angular/core';
import {CommonModule} from '@angular/common';

import { IonicStorageModule } from '@ionic/storage';
import { ThemeSwitcherDirective } from './directives/theme-switcher.directive';

@NgModule({
  declarations: [ThemeSwitcherDirective],
  entryComponents: [],
  imports: [CommonModule, IonicStorageModule.forRoot()],
  exports: [ThemeSwitcherDirective]
})
export class IonicThemeSwitcherModule {
  static forRoot(): ModuleWithProviders {
    return {
        ngModule: IonicThemeSwitcherModule
    };
}

}
