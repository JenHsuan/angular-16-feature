import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, withHashLocation } from '@angular/router';
import { routes } from './app/app-routing.module';


bootstrapApplication(AppComponent, {
  providers: [
    //route routing module
    provideRouter(routes, withHashLocation()),
  ],
});