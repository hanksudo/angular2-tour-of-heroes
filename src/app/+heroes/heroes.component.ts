import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero, HeroService } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'app-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  
  constructor(
    private router: Router,
    private heroService: HeroService) {}
  
  getHeroes() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit() {
    this.getHeroes();
  }
  
  onSelect(hero: Hero) { this.selectedHero = hero; }

  gotoDetail() {
    this.router.navigate(['/hero', this.selectedHero.id]);
  }
}
