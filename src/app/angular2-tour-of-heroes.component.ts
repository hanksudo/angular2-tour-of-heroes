import { Component, OnInit } from '@angular/core';
import { HeroService } from './shared';
import { HeroesComponent } from './heroes';

@Component({
  moduleId: module.id,
  selector: 'angular2-tour-of-heroes-app',
  templateUrl: 'angular2-tour-of-heroes.component.html',
  styleUrls: ['angular2-tour-of-heroes.component.css'],
  directives: [HeroesComponent],
  providers: [HeroService]
})
export class Angular2TourOfHeroesAppComponent implements OnInit {
  title = 'One Piece';
  
  constructor() {}
  
  ngOnInit() {
    
  }
}