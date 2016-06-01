import { Component } from '@angular/core';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';

import { HeroService } from './shared';
import { HeroesComponent } from './+heroes';

@Component({
  moduleId: module.id,
  selector: 'angular2-tour-of-heroes-app',
  templateUrl: 'angular2-tour-of-heroes.component.html',
  styleUrls: ['angular2-tour-of-heroes.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS, HeroService]
})
@Routes([
  {path: '/heroes', component: HeroesComponent}
])
export class Angular2TourOfHeroesAppComponent {
  title = 'One Piece';

}