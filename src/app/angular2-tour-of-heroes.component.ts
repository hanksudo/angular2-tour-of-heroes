import { Component, OnInit } from '@angular/core';
import { Routes, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';

import { HeroService } from './shared';
import { DashboardComponent } from './+dashboard';
import { HeroesComponent } from './+heroes';
import { HeroDetailComponent } from './+hero-detail';

@Component({
  moduleId: module.id,
  selector: 'angular2-tour-of-heroes-app',
  templateUrl: 'angular2-tour-of-heroes.component.html',
  styleUrls: ['angular2-tour-of-heroes.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS, HeroService]
})
@Routes([
  {path: '/dashboard', component: DashboardComponent},
  {path: '/heroes', component: HeroesComponent},
  {path: '/hero/:id', component: HeroDetailComponent}
])
export class Angular2TourOfHeroesAppComponent implements OnInit {
  title = 'One Piece';
  constructor(private router: Router) {}
  
  ngOnInit() {
    // default route, use this till @angular2/router support useAsDefault: true
    this.router.navigate(['/dashboard']);
  }

}