import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from '../shared';

@Injectable()
export class HeroService {
  
  private heroesUrl = 'http://localhost:4201/heroes';
  
  constructor(private http: Http) {}  
  
  getHero(id: number) {
    let url = `${this.heroesUrl}/${id}`;
    return this.http.get(url)
               .toPromise()
               .then(res => res.json())
               .catch(this.handleError);
  }
  
  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
               .toPromise()
               .then(res => res.json())
               .catch(this.handleError);
  }
  
  save(hero: Hero): Promise<Hero> {
    if (hero.id) {
      return this.put(hero);
    }
    return this.post(hero);
  }
  
  delete(hero: Hero) {
    let headers = new Headers({
      'Content-Type': 'application/json'});
     
    let url = `${this.heroesUrl}/${hero.id}`;
    
    return this.http.delete(url, headers)
               .toPromise()
               .catch(this.handleError);
  }
  
  // Add new Hero
  private post(hero: Hero): Promise<Hero> {
    let headers = new Headers({
      'Content-Type': 'application/json'});
    
    return this.http.post(this.heroesUrl, JSON.stringify(hero), {headers: headers})
               .toPromise()
               .then(res => res.json())
               .catch(this.handleError);
  }
  
  // Update existing Hero 
  private put(hero: Hero) {
    let headers = new Headers({
      'Content-Type': 'application/json'});
     
    let url = `${this.heroesUrl}/${hero.id}`;
    
    return this.http.put(url, JSON.stringify(hero), {headers: headers})
               .toPromise()
               .then(() => hero)
               .catch(this.handleError);
  }
  
  private handleError (error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
