import { MeanAngCliPage } from './app.po';

describe('mean-ang-cli App', function() {
  let page: MeanAngCliPage;

  beforeEach(() => {
    page = new MeanAngCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
