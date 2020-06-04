const registerObjectPage = require('../objects/register_Form_Objects')
const { Given, When, Then, And } = require('cucumber');
var assert = require("chai").assert;
// // The step definitions are defined for each of the scenarios // //

// // The “given” condition for our test scenario // //
Given('the user is on the simple registration page', async function () {
    return registerObjectPage.navigateToSimpleRegistration();
});


Given('user enters their email address', async function () {
    return registerObjectPage.enterEmail();
});

Given('user enters their password', async function () {
    return registerObjectPage.enterPassword();
});

Then('user registration form is submitted successfully', async function () {
    return registerObjectPage.submitForm();
});