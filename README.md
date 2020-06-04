# Selenium-Examples
The selenium examples is a learning fun example I used to practice my automation skills

This is based on Rangel Stoilov project work which was worth learning. 

The automation example is based on the following website https://rori4.github.io/ . 

There was no framework in place when I started this course. The course is about understanding selenium and how to get elements like XPath,CSS, name and id. 

So I decided to set up a framework from scratch using the following required dependencies :

    "assert": "^2.0.0",
    "chai": "^4.2.0",
    "chromedriver": "^83.0.0",
    "cucumber": "^6.0.5",
    "cucumber-html-reporter": "^5.2.0",
    "geckodriver": "^1.19.1",
    "selenium-cucumber-js": "^1.7.0",
    "selenium-webdriver": "^4.0.0-alpha.7"

The framework will use cucumber with javascript and selenium WebDrive. 
You will need to use Node.js .

To get started, please install the following 
https://nodejs.org/en/ 

Next is to create package.json file. If you don't know what is package.json  file or how to create one, here some information I found for you:

https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/ 

Just remember when you are about to run the npm init command, please run this in your project directory.

Once node is installed and you have created package.json file, go to the following website, https://www.npmjs.com/ to install packages or use the command line to do so. Please make sure you are in the project directory when installing packages and add the following commands next to every npm install package --save-dev. The --save-dev will install the package and keep it available for the particular project it is not a global installation which is what we would like to do. 

example (npm install cucumber --save-dev)

Once complete, it should look like this:

```javascript
{
  "name": "driverConfig",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "./node_modules/.bin/cucumber-js"
  },
  "keywords": [],
  "author": "Abdul Aziz Karim",
  "license": "ISC",
  "dependencies": {
    "moment": "^2.25.3"
  },
  "devDependencies": {
    "assert": "^2.0.0",
    "chai": "^4.2.0",
    "chromedriver": "^83.0.0",
    "cucumber": "^6.0.5",
    "cucumber-html-reporter": "^5.2.0",
    "geckodriver": "^1.19.1",
    "selenium-cucumber-js": "^1.7.0",
    "selenium-webdriver": "^4.0.0-alpha.7"
  }
}
```

With this added to your NPM package file, you can run all your cucumber tests by typing in “npm test” on the command line.
  
"test": "./node_modules/.bin/cucumber-js"},
