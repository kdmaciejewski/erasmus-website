import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from "./events/events.component";
import {WelcomePageComponent} from "./welcome-page/welcome-page.component";
import {EventCardComponent} from "./event-card/event-card.component";

const routes: Routes = [
  { path: '', component: WelcomePageComponent},
  { path: 'events', component: EventsComponent},
  { path: 'events/card', component: EventCardComponent},
  { path: '**', component: WelcomePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
