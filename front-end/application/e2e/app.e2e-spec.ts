import { InvoicingPage } from './app.po';

describe('invoicing App', () => {
  let page: InvoicingPage;

  beforeEach(() => {
    page = new InvoicingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
