import { MenuComponent } from './shared/menu/menu.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ChatComponent } from './shared/chat/chat.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { SearchComponent } from './core/dashboard/search/search.component';
import { Component } from './core/.component';
import { LastReleaseComponent } from './core/dashboard/last-release/last-release.component';
import { MostPopularComponent } from './core/dashboard/most-popular/most-popular.component';
import { ListViewComponent } from './core/dashboard/list-view/list-view.component';
import { SongCardComponent } from './core/dashboard/shared/song-card/song-card.component';


@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    MenuComponent,
    NotFoundComponent,
    DashboardComponent,
    SearchComponent,
    Component,
    LastReleaseComponent,
    MostPopularComponent,
    ListViewComponent,
    SongCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
