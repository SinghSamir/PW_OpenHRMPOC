
import { Page, Locator, expect } from '@playwright/test';

export class AddEmployee {
  readonly page: Page;
  readonly firstName: Locator;
  readonly middleName: Locator;
  readonly lastName: Locator;
  readonly employeeId: Locator;
  readonly username: Locator;
  readonly password: Locator;
  readonly confirmPassword: Locator;
  readonly createLoginDetails: Locator;
  readonly saveButton: Locator;
  // Commented out for now

  constructor(page: Page) {
    this.page = page;

    this.firstName = page.getByRole('textbox', {
      name: 'First Name',
    });

    this.middleName = page.getByRole('textbox', {
      name: 'Middle Name',
    });

    this.lastName = page.getByRole('textbox', {
      name: 'Last Name',
    });

    // Standard OrangeHRM Employee Id field
    this.employeeId = page.locator(
      '.oxd-input-group',
    ).filter({
      has: page.getByText('Employee Id', { exact: true }),
    }).getByRole('textbox');

    this.username = page
    .locator('.oxd-input-group')
    .filter({ has: page.getByText('Username', { exact: true }) })
    .getByRole('textbox');

    this.password = page.locator('input[type="password"]').first();
    this.confirmPassword = page.locator('input[type="password"]').nth(1);

    this.createLoginDetails = page.locator('.oxd-switch-input');

    this.saveButton = page.getByRole('button', {
      name: 'Save',
      exact: true,
    });

    //this.successMessage = page.locator('.oxd-toast-content');
  }

  async enableLoginDetails(): Promise<void> {
    // Toggle only when the login fields are not already visible.
    if (!(await this.username.isVisible())) {
      await this.createLoginDetails.click();
    }

    await expect(this.username).toBeVisible();
    await expect(this.password).toBeVisible();
    await expect(this.confirmPassword).toBeVisible();
  }

  async fillEmployeeFormWithLogin(
    firstName: string,
    middleName: string,
    lastName: string,
    employeeId: string,
    username: string,
    password: string,
  ): Promise<void> {
    await this.firstName.fill(firstName);
    await this.middleName.fill(middleName);
    await this.lastName.fill(lastName);
    await this.employeeId.fill(employeeId);

    await this.enableLoginDetails();

    await this.username.fill(username);
    await this.password.fill(password);
    await this.confirmPassword.fill(password);
  }

  async saveEmployee(): Promise<void> {
    await this.saveButton.click();
    await expect(this.page).toHaveURL(/viewPersonalDetails/, { timeout: 15000 });
    
  }
}