import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Angular2TourOfHeroesAppComponent } from '../app/angular2-tour-of-heroes.component';

beforeEachProviders(() => [Angular2TourOfHeroesAppComponent]);

describe('App: Angular2TourOfHeroes', () => {
  it('should create the app',
      inject([Angular2TourOfHeroesAppComponent], (app: Angular2TourOfHeroesAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'One Piece\'',
      inject([Angular2TourOfHeroesAppComponent], (app: Angular2TourOfHeroesAppComponent) => {
    expect(app.title).toEqual('One Piece');
  }));
});
