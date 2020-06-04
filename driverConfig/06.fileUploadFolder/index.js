const { Builder, By, } = require("selenium-webdriver");
const firefox = require("selenium-webdriver/firefox");
const options = new firefox.Options();
const proxy = require("selenium-webdriver/proxy")

const driver = new Builder()
.forBrowser("firefox")
.build();

async function fileupload (){
    try {
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/file-form");
        await driver.findElement(By.xpath("//input[@formcontrolname='file']")).sendKeys(__dirname+"//exampleFile.jpg");
        await driver.findElement(By.xpath("//button[@id='submit']")).click();
        
    } catch (error) {
        console.log(error)
        
    }
}

fileupload();