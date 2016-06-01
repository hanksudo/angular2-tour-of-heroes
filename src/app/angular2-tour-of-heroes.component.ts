import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

@Component({
  moduleId: module.id,
  selector: 'angular2-tour-of-heroes-app',
  templateUrl: 'angular2-tour-of-heroes.component.html',
  styleUrls: ['angular2-tour-of-heroes.component.css']
})
export class Angular2TourOfHeroesAppComponent {
  title = 'One Piece';
  hero: Hero = {
    id: 1,
    name: 'Monkey D.Luffy' 
  }
}
