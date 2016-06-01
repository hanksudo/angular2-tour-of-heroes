# Angular2: Tour of Heros

https://angular.io/docs/ts/latest/tutorial/

## Initial project

Use [angular-cli](https://cli.angular.io/) to generate, serve and test. 

```bash
# new project
ng new angular-tour-of-heroes

# serve (http://localhost:4200)
ng serve
ng serve -prod

# build
ng build
ng build -prod

# test
ng test

# generate component, model, service, route
ng generate component hero-detail
ng generate class shared/hero
ng generate service shared/hero
ng generate route dashboard
ng generate route heroes
ng generate route hero-detail

# Deploy to github page
ng github-pages:deploy
``` 

## Data server

```bash
npm install -g json-server
json-server --port 4201 --watch db.json
```