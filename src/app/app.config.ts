import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NgxsModule } from '@ngxs/store';
import { environment } from '../environments/environment';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { ProductsState } from './state/products/product.state';
import { CartState } from './state/cart/cart.state';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule),
    provideAnimationsAsync(),
    provideAnimationsAsync(),
    importProvidersFrom(NgxsModule.forRoot([ProductsState, CartState], {developmentMode: !environment.production})),
    importProvidersFrom(NgxsReduxDevtoolsPluginModule.forRoot({
      // disabled: environment.production
    })),
    // importProvidersFrom(NgxsReduxDevtoolsPluginModule.forRoot({
    //   disabled: environment.production
    // })),
    importProvidersFrom(NgxsLoggerPluginModule.forRoot({
      disabled: environment.production
    })),
    importProvidersFrom(NgxsStoragePluginModule.forRoot({  key: 'cart'}))
  ],
};
