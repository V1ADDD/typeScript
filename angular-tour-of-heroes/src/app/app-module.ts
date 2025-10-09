import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Heroes } from './heroes/heroes';
import { HeroDetail } from './hero-detail/hero-detail';
import { Messages } from './messages/messages';
import { Dashboard } from './dashboard/dashboard';

import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryData } from './in-memory-data';
import { HeroSearch } from './hero-search/hero-search';

@NgModule({
  declarations: [
    App,
    Heroes,
    HeroDetail,
    Messages,
    Dashboard,
    HeroSearch
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryData),
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
