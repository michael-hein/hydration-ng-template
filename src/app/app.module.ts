import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { isPlatformBrowser } from '@angular/common';
import { APP_ID, Inject, PLATFORM_ID } from '@angular/core';
import { ShellComponent } from './shell/shell.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, ShellComponent],
  bootstrap: [AppComponent],
  providers: [provideClientHydration()],
})
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    @Inject(APP_ID) private appId: string
  ) {
    const platform = isPlatformBrowser(platformId)
      ? 'in the browser'
      : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);
  }
}
