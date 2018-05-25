;
import { MenuComponent } from './shared/menu/menu.component'import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ChatComponent } from './shared/chat/chat.component';
import { 404Component } from './shared/404/404.component';


@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    404Component, MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
