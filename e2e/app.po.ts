export class Angular2TourOfHeroesPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular2-tour-of-heroes-app h1')).getText();
  }
}
