const { Builder, By, } = require("selenium-webdriver");
const firefox = require("selenium-webdriver/firefox");
const options = new firefox.Options();
const proxy = require("selenium-webdriver/proxy")

const driver = new Builder()
.forBrowser("firefox")
.build();

async function datepickerform (){
    try {
        await driver.get('https://rori4.github.io/selenium-practice/#/pages/practice/datepicker-form');
        await driver.findElement(By.xpath("//input[@formcontrolname='dateOne']")).sendKeys("May 14, 2020");
        await driver.findElement(By.xpath("//input[@formcontrolname='dateTwo']")).sendKeys("May 14, 2020 - May 28, 2020");
        await driver.findElement(By.xpath("//button[@id='submit']")).click();
    } catch (error) {
        console.log(error)
        
    }
}
datepickerform();