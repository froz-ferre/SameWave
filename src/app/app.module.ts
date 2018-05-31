import { MenuComponent } from './shared/menu/menu.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ChatComponent } from './shared/chat/chat.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';

import { CoreModule } from './core/core.module';
import { LastReleaseComponent } from './core/dashboard/last-release/last-release.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    MenuComponent,
    NotFoundComponent,
    DashboardComponent,
    LastReleaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
