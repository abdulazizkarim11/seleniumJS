const { Builder, By, } = require("selenium-webdriver");
const firefox = require("selenium-webdriver/firefox");
const options = new firefox.Options();
const proxy = require("selenium-webdriver/proxy")

const driver = new Builder()
.forBrowser("firefox")
.build();

async function radioButtonForm(){
    try {
    await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/radio-button-form");
    await driver.findElement(By.css('#title')).sendKeys('Title that has at lesst 20 chars');
    await driver.findElement(By.css('#description')).sendKeys('Description must be at least 20 chars');
    await driver.findElement(By.css('div.form-check:nth-child(2) > label:nth-child(1) > span:nth-child(2)')).click();
    await driver.findElement(By.css('#submit')).click();
    
    }catch (error) {
    console.log(error);
    }
    
}
radioButtonForm();