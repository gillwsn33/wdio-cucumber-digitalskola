// import Page from "./page";
// import { $ } from "@wdio/globals";

// class HomePage extends Page {
//   get cartIcon() {
//     return $("#shopping_cart_container");
//   }

//   get addCartButton() {
//     return $("#add-to-cart-sauce-labs-backpack");
//   }

//   get productImage() {
//     return $("#item_4_img_link");
//   }

//   open() {
//     return super.open("inventory.html");
//   }
// }

// export default new HomePage();

import Page from "./page";
import { $, expect } from "@wdio/globals";

class HomePage extends Page {
  get cartIcon() {
    return $(".shopping_cart_link");
  }
  get addToCartButton() {
    return $("#add-to-cart-sauce-labs-backpack");
  }
  get cartBadge() {
    return $(".shopping_cart_badge");
  }

  async addItemToCart() {
    await this.addToCartButton.click();
  }

  async validateItemAddedToCart() {
    await expect(this.cartBadge).toBeExisting();
    await expect(this.cartBadge).toHaveText("1");
  }

  open() {
    return super.open("inventory.html");
  }
}

export default new HomePage();

// import Page from "./page";
// import { $, expect } from "@wdio/globals";

// class HomePage extends Page {
//   get addToCartButton() {
//     return $("#add-to-cart-sauce-labs-backpack");
//   }
//   get cartBadge() {
//     return $(".shopping_cart_badge");
//   }

//   async addItemToCart() {
//     await this.addToCartButton.click();
//   }

//   async validateItemAddedToCart() {
//     await expect(this.cartBadge).toBeExisting();
//     await expect(this.cartBadge).toHaveText("1");
//   }

//   open() {
//     return super.open("inventory.html");
//   }
// }

// export default new HomePage();
