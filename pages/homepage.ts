import { Page, Locator, expect } from '@playwright/test'
import { BASEURL } from '../utils/env.config';

export class homepage {

    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.username = page.getByRole('textbox', { name: 'Username' });
        this.password = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'Login' })
        this.errorMessage = page.getByText('Invalid credentials');
    }


    async gotoLoginPage() {
        await this.page.goto(BASEURL);
    }

    async login(user: string, pass: string) {
        await this.username.fill(user);
        await this.password.fill(pass);
        await this.loginButton.click();
    }

    async verifyLoginSuccess() {
        await this.page.waitForURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

    }
    async failedLogin() {
        await expect(this.errorMessage).toBeVisible();
    }
}
