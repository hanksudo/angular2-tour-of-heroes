import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { OnActivate, Router, RouteSegment } from '@angular/router';

import { Hero, HeroService } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'app-hero-detail',
  templateUrl: 'hero-detail.component.html',
  styleUrls: ['hero-detail.component.css']
})
export class HeroDetailComponent implements OnActivate, OnInit {
  @Input() hero: Hero;
  @Output() close = new EventEmitter();
  error: any;
  navigated = false;
  
  private curSegment: RouteSegment;
  
  constructor(private heroService: HeroService) {}
  
  ngOnInit() {
    if (this.curSegment === undefined) {
      this.navigated = false;
      this.hero = new Hero(); 
    }
  }
  
  routerOnActivate(curr: RouteSegment) {
    this.curSegment = curr;
    
    this.navigated = true;
    let id = +curr.getParam('id');
    this.heroService.getHero(id).then(hero => this.hero = hero);
  }
  
  save() {
    this.heroService.save(this.hero).then(hero => {
      this.hero = hero; // saved hero, w/ id if new 
      this.goBack(hero);
    })
    .catch(error => this.error = error);
  }
  
  goBack(savedHero: Hero = null) {
    this.close.emit(savedHero);
    if (this.navigated) { window.history.back(); }
  }

}
