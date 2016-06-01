import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero, HeroService } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  heroes: Hero[] = [];

  constructor(
    private heroService: HeroService,
    private router: Router
  ) {}

  ngOnInit() {
    this.heroService.getHeroes().then(heroes => {
      let pickedHeroes = [];
      let randomHero: Hero;
      
      while (pickedHeroes.length < 5 && pickedHeroes.length < heroes.length ) {
        randomHero = heroes[Math.floor(Math.random() * heroes.length)];
        pickedHeroes.push(randomHero);
        heroes.splice(heroes.indexOf(randomHero), 1);
      }
      
      this.heroes = pickedHeroes;
    });
  }
  
  gotoDetail(hero: Hero) {
    this.router.navigate(['/hero', hero.id]);
  }

}
