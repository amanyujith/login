import { Browser, Builder } from "selenium-webdriver";

(async function openGoogle(){
    let driver = await  new Builder().forBrowser(Browser.CHROME).setChromeOptions().build();
    try{
        await driver.get('https://www.google.com/');
        console.log('Successfully opened Google homepage.');
    } catch (error) {
        console.error('Failed to open Google homepage:', error);
    
    }
})();