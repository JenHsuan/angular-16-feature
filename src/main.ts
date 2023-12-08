import { bootstrapApplication, provideClientHydration } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, withHashLocation } from '@angular/router';
import { routes } from './app/app-routing.module';


bootstrapApplication(AppComponent, {
  providers: [
    provideClientHydration(),
    //route routing module
    provideRouter(routes, withHashLocation()),
  ],
});