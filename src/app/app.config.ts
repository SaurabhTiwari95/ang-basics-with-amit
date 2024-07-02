import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { GlobalService } from './global.service';
import { DatePipe } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [GlobalService, provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideHttpClient(), DatePipe]
};
