import { Component } from '@angular/core';
import { OnActivate, Router, RouteSegment } from '@angular/router';

import { Hero, HeroService } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'app-hero-detail',
  templateUrl: 'hero-detail.component.html',
  styleUrls: ['hero-detail.component.css']
})
export class HeroDetailComponent implements OnActivate {
  hero: Hero;
  private curSegment: RouteSegment;
  
  constructor(private heroService: HeroService) {}
  
  routerOnActivate(curr: RouteSegment) {
    this.curSegment = curr;
    
    let id = +curr.getParam('id');
    this.heroService.getHero(id).then(hero => this.hero = hero);
  }
  
  goBack() {
    window.history.back();
  }

}
