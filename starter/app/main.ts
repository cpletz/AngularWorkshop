import { AppModule } from './app.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//Entry point

const platform = platformBrowserDynamic();
//JiT and not AoT. For AoT AppModule.module.ngFactory needs to be imported. More info at the angular documentation
platform.bootstrapModule(AppModule); 