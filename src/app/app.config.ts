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
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAhZv3lrKdPDltj6I8bxmaw-YQ3wydrMeA",
  authDomain: "edu-illiaaa.firebaseapp.com",
  projectId: "edu-illiaaa",
  storageBucket: "edu-illiaaa.appspot.com",
  messagingSenderId: "183328063700",
  appId: "1:183328063700:web:0f6c10ae525fa7e5a07b41"
};


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule),
    provideAnimationsAsync(),
    importProvidersFrom(provideFirebaseApp(() => initializeApp(firebaseConfig))),

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
    importProvidersFrom(NgxsStoragePluginModule.forRoot({  key: 'cart'})), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"edu-illiaaa","appId":"1:183328063700:web:0f6c10ae525fa7e5a07b41","storageBucket":"edu-illiaaa.appspot.com","apiKey":"AIzaSyAhZv3lrKdPDltj6I8bxmaw-YQ3wydrMeA","authDomain":"edu-illiaaa.firebaseapp.com","messagingSenderId":"183328063700"}))), importProvidersFrom(provideAuth(() => getAuth()))
  ],
};
