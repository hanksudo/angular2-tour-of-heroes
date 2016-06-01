import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Hero } from '../shared';

@Injectable()
export class HeroService {
  constructor(private http: Http) {}  
  
  private heroesUrl = 'http://localhost:4201/heroes';
  
  getHero(id: number) {
    return this.http.get(this.heroesUrl + '/' + id)
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  }
  
  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  }
  
  private handleError (error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
