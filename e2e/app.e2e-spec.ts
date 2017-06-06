import { MultiAppPage } from './app.po';

describe('multi-app App', () => {
  let page: MultiAppPage;

  beforeEach(() => {
    page = new MultiAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
