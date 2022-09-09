import SearchPage from '../pages/search.page';
import { waitForTextChange } from '../utilities/helper';
import resources from '../resources';
import allureReporter from '@wdio/allure-reporter';

describe('Volvo Search', () => {
  it('should open the main url and verify the title', () => {
    SearchPage.open();
    expect(browser).toHaveTitle(resources.homeTitle);
  });

  it('should search for a product and verify the search text value', () => {
    allureReporter.addSeverity('Critical');
    SearchPage.searchInput.addValue('Sedan');
    SearchPage.searchBtn.click();

    expect(SearchPage.searchInput).toHaveValue('Sedan');
  });

  it('should redirect to a new page and verify the title', () => {
    expect(browser).toHaveTitle('car | bus');
  });

  it('should update the search category', () => {
    allureReporter.addFeature('search category');
    waitForTextChange(SearchPage.category, 'Luxury & Turbo', 10000);
    expect(SearchPage.category).toHaveText('Sedan & Hatchback');
  });
});
