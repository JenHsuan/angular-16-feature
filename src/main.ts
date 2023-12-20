import { bootstrapApplication, provideClientHydration } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, withComponentInputBinding, withHashLocation } from '@angular/router';
import { routes } from './app/app-routing.module';
import { CSP_NONCE, provideZoneChangeDetection } from '@angular/core';
import { HIGHLIGHT_OPTIONS, HighlightOptions } from 'ngx-highlightjs';

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

    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: <HighlightOptions>{
        lineNumbers: true,
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        lineNumbersLoader: () => import('ngx-highlightjs/line-numbers'),
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript'),
          css: () => import('highlight.js/lib/languages/css'),
          xml: () => import('highlight.js/lib/languages/xml'),
        },
      },
    }
  ],
});