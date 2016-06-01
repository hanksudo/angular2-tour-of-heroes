import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero, HeroService } from '../shared';
import { HeroDetailComponent } from '../+hero-detail'

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
  addingHero = false;
  error: any;
  
  constructor(
    private router: Router,
    private heroService: HeroService) {}
    
  addHero() {
    this.addingHero = true;
    this.selectedHero = null;
  }
  
  close(savedHero: Hero) {
    this.addingHero = false;
    if (savedHero) { this.getHeroes(); }
  }
  
  delete(hero: Hero, event: any) {
    event.stopPropagation();
    this.heroService.delete(hero).then(res => {
      this.heroes = this.heroes.filter(h => h !== hero);
      if (this.selectedHero === hero) {
        this.selectedHero = null;
      }
    })
    .catch(error => this.error = error);
  }
  
  getHeroes() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit() {
    this.getHeroes();
  }
  
  onSelect(hero: Hero) {
    this.addingHero = false; 
    this.selectedHero = hero;
  }

  gotoDetail() {
    this.router.navigate(['/hero', this.selectedHero.id]);
  }
}
