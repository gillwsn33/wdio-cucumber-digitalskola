// import Page from "./page";
// import { $, expect, browser } from "@wdio/globals";

// class LoginPage extends Page {
//   get usernameTextBox() {
//     return $('//*[@id="user-name"]');
//   }

//   get passwordTextBox() {
//     return $('//*[@id="password"]');
//   }

//   get loginButton() {
//     return browser.$('//input[@type="submit"]');
//   }

//   get errorMessage() {
//     return $('//*[@id="login_button_container"]/div/form/div[3]/h3');
//   }

//   get validasiLogin() {
//     return browser.$("https://www.saucedemo.com/inventory.html");
//   }

//   async inputUsername(username) {
//     await this.usernameTextBox.setValue(username);
//   }

//   async inputPassword(password) {
//     await this.passwordTextBox.setValue(password);
//   }

//   async clickLoginButton() {
//     await this.loginButton.click;
//   }

//   async login(username, password) {
//     await this.inputUsername(username);
//     await this.inputPassword(password);
//     await this.clickLoginButton();
//   }

//   async validateWrongPasswordDisplayed() {
//     await expect(this.errorMessage).toHaveText(expect.stringContaining("Epic sadface: Username and password do not match any user in this service"));
//   }

//   async validateOnHomePage() {
//     await expect(this.validasiLogin).toHaveUrl("https://www.saucedemo.com/inventory.html");
//   }

//   open() {
//     return super.open("");
//   }
// }

// export default new LoginPage();

import Page from "./page";
import { $, expect, browser } from "@wdio/globals";

class LoginPage extends Page {
  get usernameTextBox() {
    return $('//*[@id="user-name"]');
  }
  get passwordTextBox() {
    return $('//*[@id="password"]');
  }
  get loginButton() {
    return $('input[type="submit"]');
  }
  get errorMessage() {
    return $(".error-message-container h3");
  }

  async login(username, password) {
    await this.usernameTextBox.setValue(username);
    await this.passwordTextBox.setValue(password);
    await this.loginButton.click();
  }

  async validateOnDashboard() {
    await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
  }

  open() {
    return super.open("");
  }
}

export default new LoginPage();

// import Page from "./page";
// import { $, expect, browser } from "@wdio/globals";

// class LoginPage extends Page {
//   get usernameTextBox() {
//     return $('//*[@id="user-name"]');
//   }
//   get passwordTextBox() {
//     return $('//*[@id="password"]');
//   }
//   get loginButton() {
//     return $('input[type="submit"]');
//   }

//   async login(username, password) {
//     await this.usernameTextBox.setValue(username);
//     await this.passwordTextBox.setValue(password);
//     await this.loginButton.click();
//   }

//   async validateOnDashboard() {
//     await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
//   }

//   open() {
//     return super.open("");
//   }
// }

// export default new LoginPage();
