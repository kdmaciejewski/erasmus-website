import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {

  constructor( private router : Router) {
  }
  onCardClick() {
    this.router.navigate(['/events/card']); //TODO zrobic przkeazywanie obiektu
  }

}
