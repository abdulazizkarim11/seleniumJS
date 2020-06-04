Feature: Registeration form

    Scenario: Register form
        Given the user is on the simple registration page
        And user enters their email address
        And user enters their password
        Then user registration form is submitted successfully