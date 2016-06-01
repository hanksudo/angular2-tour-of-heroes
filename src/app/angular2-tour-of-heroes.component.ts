import { Component, OnInit } from '@angular/core';
import { Hero, HeroService } from './shared';
import { HeroDetailComponent } from './hero-detail';


@Component({
  moduleId: module.id,
  selector: 'angular2-tour-of-heroes-app',
  templateUrl: 'angular2-tour-of-heroes.component.html',
  styleUrls: ['angular2-tour-of-heroes.component.css'],
  directives: [HeroDetailComponent],
  providers: [HeroService]
})
export class Angular2TourOfHeroesAppComponent implements OnInit {
  title = 'One Piece';
  heroes: Hero[];
  selectedHero: Hero;
  
  constructor(private heroService: HeroService) {}
  
  getHeroes() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  
  ngOnInit() {
    this.getHeroes();
  }
  
  onSelect(hero: Hero) { this.selectedHero = hero; }
}