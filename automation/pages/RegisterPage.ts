import { Page } from '@playwright/test';

export class RegisterPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('/auth');
    await this.page.click('text=Register'); // switch to register tab
  }

  async fillForm(username: string, email: string, password: string, confirmPassword: string) {
    await this.page.fill('input[name="username"]', username);
    await this.page.fill('input[name="email"]', email);
    await this.page.fill('input[name="password"]', password);
    await this.page.fill('input[name="confirmPassword"]', confirmPassword);
  }

  async submit() {
    await this.page.click('button:text("Create Account")');
  }

  async getErrorMessage() {
    return this.page.textContent('p.text-destructive');
  }

  async hasErrorMessage() {
    return this.page.isVisible('p.text-destructive');
}
}
