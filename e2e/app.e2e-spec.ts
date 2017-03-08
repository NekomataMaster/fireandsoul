import { BudgetTablePage } from './app.po';

describe('budgetIN-table App', function() {
  let page: BudgetTablePage;

  beforeEach(() => {
    page = new BudgetTablePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
