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
    this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1,5));
  }
  
  gotoDetail(hero: Hero) {
    this.router.navigate(['/hero', hero.id]);
  }

}
