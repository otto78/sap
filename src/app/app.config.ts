import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter, withHashLocation, withInMemoryScrolling, withRouterConfig, withViewTransitions } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(
      routes,
      // withHashLocation(),
      withViewTransitions(),
      withInMemoryScrolling({
        scrollPositionRestoration: 'top', // 👈 forza lo scroll in alto
        anchorScrolling: 'enabled', // (opzionale) abilita il salto agli anchor link
      })
    ),
    provideClientHydration(withEventReplay()),
  ],
};
