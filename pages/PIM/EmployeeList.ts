import { Page, Locator, expect } from '@playwright/test';

export class EmployeeList {
  readonly page: Page;
  readonly employeeID : Locator;
  readonly searchButton: Locator;
  readonly recordFound: Locator;
  readonly deleteButton: Locator;
  readonly confirmDeleteButton: Locator;


  constructor(page: Page) {
    this.page = page;
    this.employeeID = page.getByRole('textbox').nth(2);
    this.searchButton =  page.getByRole('button', { name: 'Search' });
    this.recordFound = page.getByText('(1) Record Found');
    this.deleteButton = page.getByRole('button').filter({ hasText: /^$/ }).nth(4)
    this.confirmDeleteButton = page.getByRole('button', { name: ' Yes, Delete' });
   
  }
}