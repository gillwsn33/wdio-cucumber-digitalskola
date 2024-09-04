// import { Given, When, Then } from "@wdio/cucumber-framework";
// import { expect, $ } from "@wdio/globals";

// import LoginPage from "../pageobjects/login.page.js";
// import HomePage from "../pageobjects/home.page.js";

// Given("user is on Login page", async () => {
//   await LoginPage.open();
// });

// Then(/^user input "([^"]*)" as username$/, async (username) => {
//   await LoginPage.usernameTextBox.setValue(username);
// });

// Then(/^user input "([^"]*)" as password$/, async (password) => {
//   await LoginPage.passwordTextBox.setValue(password);
// });

// When("user click login button", async () => {
//   await LoginPage.loginButton.click();
// });

// Then("user should be redirected to homepage", async () => {
//   await HomePage.open();
// });

// When("user login using {string} as username and {string} as password", async (username, password) => {
//   await LoginPage.usernameTextBox.setValue(username);
//   await LoginPage.passwordTextBox.setValue(password);
//   await LoginPage.loginButton.click();
// });

// Then(/^user should see error message "([^"]*)"$/, (args1) => {
//   return true;
// });

import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect, $ } from "@wdio/globals";

import LoginPage from "../pageobjects/login.page.js";
import HomePage from "../pageobjects/home.page.js";
import CartPage from "../pageobjects/cart.page.js";

// Step Definitions for Login
Given("user is on Login page", async () => {
  await LoginPage.open();
});

Then(/^user input "([^"]*)" as username$/, async (username) => {
  await LoginPage.usernameTextBox.setValue(username);
});

Then(/^user input "([^"]*)" as password$/, async (password) => {
  await LoginPage.passwordTextBox.setValue(password);
});

When("user click login button", async () => {
  await LoginPage.loginButton.click();
});

Then("user should be redirected to homepage", async () => {
  await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
});

// Step Definitions for Adding Product to Cart
When("user adds a product to the cart", async () => {
  await HomePage.addItemToCart();
});

Then("the product should be in the cart", async () => {
  await CartPage.validateItemInCart();
});
