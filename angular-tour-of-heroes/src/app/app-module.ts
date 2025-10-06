import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Heroes } from './heroes/heroes';
import { HeroDetail } from './hero-detail/hero-detail';
import { Messages } from './messages/messages';
import { Dashboard } from './dashboard/dashboard';

@NgModule({
  declarations: [
    App,
    Heroes,
    HeroDetail,
    Messages,
    Dashboard
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
