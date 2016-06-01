import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Hero } from '../shared';

@Injectable()
export class HeroService {
  constructor(private http: Http) {}  
  
  private heroesUrl = 'http://localhost:4201/heroes';
  
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
  
  private post(hero: Hero): Promise<Hero> {
    let headers = new Headers({
      'Content-Type': 'application/json'});
    
    return this.http.post(this.heroesUrl, JSON.stringify(hero), {headers: headers})
               .toPromise()
               .then(res => res.json())
               .catch(this.handleError);
  }
  
  private put(hero: Hero): Promise<Hero> {
    let headers = new Headers({
      'Content-Type': 'application/json'});
     
    let url = `${this.heroesUrl}/${hero.id}`;
    
    return this.http.put(url, JSON.stringify(hero), {headers: headers})
               .toPromise()
               .then(() => hero)
               .catch(this.handleError);
  }
  
  private delete(hero: Hero) {
    let headers = new Headers({
      'Content-Type': 'application/json'});
     
    let url = `${this.heroesUrl}/${hero.id}`;
    
    return this.http.delete(url, headers)
               .toPromise()
               .catch(this.handleError);
  }
  
  private handleError (error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
