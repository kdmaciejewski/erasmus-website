import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { AppheaderComponent } from './appheader/appheader.component';
import { EventsComponent } from './events/events.component';
import {RouterLink, RouterOutlet} from "@angular/router";
import { EventCardComponent } from './event-card/event-card.component';
import { ButtonModule } from "primeng/button";

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    AppheaderComponent,
    EventsComponent,
    EventCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    RouterLink,
    ButtonModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
