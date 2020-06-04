const { Builder, By, } = require("selenium-webdriver");
const firefox = require("selenium-webdriver/firefox");
const options = new firefox.Options();
const proxy = require("selenium-webdriver/proxy")

const driver = new Builder()
.forBrowser("firefox")
.build();

async function checkBoxForm (){
    try {
       await driver.get('https://rori4.github.io/selenium-practice/#/pages/practice/checkbox-form');
       await driver.findElement(By.xpath("//input[@id='name']")).sendKeys('Abdul Aziz Karim');
       await driver.findElement(By.xpath("//input[@id='comment']")).sendKeys('Birthday Party');
       await driver.findElement(By.xpath("//input[@value='presidential-suite']/following::span")).click();
       await driver.findElement(By.xpath("//nb-checkbox[@value='breakfast']/label/span")).click();
       await driver.findElement(By.xpath("//nb-checkbox[@value='lunch']/label/span")).click();
       await (await driver.findElement(By.xpath("//button[@id='submit']"))).click();



    } catch (error){
        console.log(error);
    }
    
}
checkBoxForm()