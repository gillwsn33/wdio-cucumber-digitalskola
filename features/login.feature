# Feature: The Internet Guinea Pig Website

#   Scenario Outline: As a user, I can log into the secure area

#     Given I am on the login page
#     When I login with <username> and <password>
#     Then I should see a flash message saying <message>

#     Examples:
#       | username | password             | message                        |
#       | tomsmith | SuperSecretPassword! | You logged into a secure area! |
#       | foobar   | barfoo               | Your username is invalid!      |

# Feature: Login Test

#     Scenario: Success Login
#       Given user is on Login page
#       And user input "standard_user" as username
#       And user input "secret_sauce" as password
#       When user click login button
#       Then user should be redirected to homepage

    # Scenario: Success Login
    #   Given user is on Login page
    #   When user login uding "standard_user" as username and "secret_sauce" as password
    #   Then user should be redirected to homepage

    # Scenario: Login with Wrong Password
    #   Given user is on Login page
    #   And user input "" as username
    #   And user input "" as password
    #   When user click login button
    #   Then user should see error message ""


Feature: End-to-End Test for Login and Add to Cart

  Background:
    Given user is on Login page

  Scenario Outline: Login Berhasil dan Tambah Produk ke Keranjang
    When user input "standard_user" as username
    And user input "secret_sauce" as password
    And user click login button
    Then user should be redirected to homepage
    And user adds a product to the cart
    Then the product should be in the cart
