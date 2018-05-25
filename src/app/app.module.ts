import { MenuComponent } from './shared/menu/menu.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ChatComponent } from './shared/chat/chat.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    MenuComponent,
    NotFoundComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
