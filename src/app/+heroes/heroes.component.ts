import { Component, OnInit } from '@angular/core';
import { Hero, HeroService } from '../shared';
import { HeroDetailComponent } from '../+hero-detail';

@Component({
  moduleId: module.id,
  selector: 'app-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css'],
  directives: [HeroDetailComponent]
})
export class HeroesComponent implements OnInit {
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
