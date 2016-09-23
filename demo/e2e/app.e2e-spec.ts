import { Ng2SharebuttonsPage } from './app.po';

describe('ng2-sharebuttons App', function() {
  let page: Ng2SharebuttonsPage;

  beforeEach(() => {
    page = new Ng2SharebuttonsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
