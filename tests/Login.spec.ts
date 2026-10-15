
import { test } from '@playwright/test';
import { homepage } from '../pages/HomePage';
//import { homepage } from '../pages/homepage';
import { UserName, Password } from '../utils/env.config';


test.describe('Login Tests', () => {
  
  test('should log in successfully with valid credentials', async ({ page }) => {
    const hp = new homepage(page);

    await hp.gotoLoginPage();
    await hp.login(UserName, Password);
    await hp.verifyLoginSuccess();
  });

  const invalidLoginScenarios = [
    {
      name: 'invalid password',
      username: UserName,
      password: 'InvalidPassword123!',
    },
    {
      name: 'invalid username',
      username: 'InvalidUserName',
      password: Password,
    },
  ];

  for (const scenario of invalidLoginScenarios) {
    test(`should reject login with ${scenario.name}`, async ({ page }) => {
      const hp = new homepage(page);

      await hp.gotoLoginPage();
      await hp.login(scenario.username, scenario.password);
      await hp.failedLogin();
    });
  }
});