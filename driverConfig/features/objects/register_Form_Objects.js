const { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(60 * 1000);
var assert = require("chai").assert;
var chai = require ('chai')
expect = chai.expect
const { Builder, By, Capabilities, Key, until } = require('selenium-webdriver');

const driver = new Builder()
    .forBrowser("chrome")
    .build();


class simple_Reg_Objects {

    async navigateToSimpleRegistration() {
        await driver.get('https://rori4.github.io/selenium-practice/#/pages/practice/simple-registration');
        await driver.getTitle().then(function (title) {
            assert.equal(title, "ngx-admin Demo Application");
            console.log(title)
        

        })

    }

    async enterEmail() {
       await driver.findElement(By.name("email")).sendKeys("example@gmail.com")
       if (driver.findElement(By.name("email"))){
           console.log('found email')
        }else {
            console.log('not found')
              
        }
      }
    
    async enterPassword() {
            await driver.findElement(By.id("password")).sendKeys("12345");
            if (driver.findElement(By.id("password"))){
                console.log('found password')
             }else {
                 console.log('not found')
             }
           }

    submitForm() {
        try {
            driver.findElement(By.name("submit")).click();
            return true;
        } catch (error) {
            console.log(error)

        
       
        }
        
    }
    
};

module.exports = new simple_Reg_Objects();
