import { ImdbApiPage } from './app.po';

describe('imdb-api App', () => {
  let page: ImdbApiPage;

  beforeEach(() => {
    page = new ImdbApiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
