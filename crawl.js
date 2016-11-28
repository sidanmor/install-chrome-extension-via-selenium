var webdriver = require('selenium-webdriver');
var chrome = require("selenium-webdriver/chrome");

var options = new chrome.Options();
options.setChromeBinaryPath('/Applications/Google Chrome Canary.app/Contents/MacOS/Google Chrome Canary');
options.addExtensions('./noRealExtension.crx');

var driver = new webdriver.Builder().forBrowser('chrome').setChromeOptions(options).build();

driver.get('https://sidanmor.com').then();

driver.sleep(5000);

driver.quit();