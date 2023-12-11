import { bootstrapApplication, provideClientHydration } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, withComponentInputBinding, withHashLocation } from '@angular/router';
import { routes } from './app/app-routing.module';
import { CSP_NONCE, provideZoneChangeDetection } from '@angular/core';

bootstrapApplication(AppComponent, {
  providers: [
    //Hydration
    provideClientHydration(),

    //Route routing module
    provideRouter(
      routes, 
      withHashLocation(),

      //new routing feature: input binding
      withComponentInputBinding()
    ),

    //ngZoneEventCoalescing
    //provideZoneChangeDetection({ eventCoalescing: true })
  ],
});