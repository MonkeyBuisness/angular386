import { Angular386Page } from './app.po';

describe('angular386 App', () => {
  let page: Angular386Page;

  beforeEach(() => {
    page = new Angular386Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
