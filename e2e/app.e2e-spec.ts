import { BusinessContactsListingsPage } from './app.po';

describe('business-contacts-listings App', () => {
  let page: BusinessContactsListingsPage;

  beforeEach(() => {
    page = new BusinessContactsListingsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
