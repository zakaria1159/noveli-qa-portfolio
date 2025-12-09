import { test, expect } from '@playwright/test';
import { RegisterPage } from '../../pages/RegisterPage';
import { validUser, invalidUsers, boundaryUsers, exploratoryUsers } from '../../fixtures/registrationData';

test.describe('Registration - Positive', () => {
  test('should register successfully with valid data', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    await registerPage.goto();
    await registerPage.fillForm(validUser.username, validUser.email, validUser.password, validUser.password);
    await registerPage.submit();
    await expect(page).toHaveURL(/dashboard|verify/); // adjust depending on post-registration page
  });
});

test.describe('Registration - Negative', () => {
  invalidUsers.forEach((user, index) => {
    const confirmPassword = user.confirmPassword ?? user.password;
    test(`❌ [${index}] should fail for username: "${user.username}" email: "${user.email}" with error: "${user.error}"`, 
      async ({ page }) => {
        const registerPage = new RegisterPage(page);
        await registerPage.goto();
        await registerPage.fillForm(user.username, user.email, user.password, confirmPassword);
        await registerPage.submit();
        const error = await registerPage.getErrorMessage();
        expect(error).toContain(user.error);
      }
    );
  });
});

test.describe('Registration - Boundary', () => {
  for (const user of boundaryUsers) {
    test(`should pass boundary test: ${user.description}`, async ({ page }) => {
      const registerPage = new RegisterPage(page);
      await registerPage.goto();
      await registerPage.fillForm(user.username, user.email, user.password, user.confirmPassword ?? user.password);
      await registerPage.submit();
      await expect(page).toHaveURL(/dashboard|verify/);
    });
  }
});

test.describe('Registration - Exploratory / Special Cases', () => {
  for (const user of exploratoryUsers) {
    test(`should test special username: ${user.username}`, async ({ page }) => {
      const registerPage = new RegisterPage(page);
      await registerPage.goto();
      await registerPage.fillForm(user.username, user.email, user.password, user.password);
      await registerPage.submit();
      expect(await registerPage.hasErrorMessage()).toBe(false);
    });
  }
});
