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
  heroes = HEROES;
  selectedHero: Hero;
  
  onSelect(hero: Hero) { this.selectedHero = hero; }
}

var HEROES: Hero[] = [
  { "id": 1, "name": "Monkey D.Luffy" },
  { "id": 2, "name": "Roronoa Zoro" },
  { "id": 3, "name": "Nami" },
  { "id": 4, "name": "Usopp" },
  { "id": 5, "name": "Vinsmoke Sanji" },
  { "id": 6, "name": "Tony Tony Chopper" },
  { "id": 7, "name": "Nico Robin" },
  { "id": 8, "name": "Franky" },
  { "id": 9, "name": "Brook" }
];
