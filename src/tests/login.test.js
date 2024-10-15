// const { Builder, By, until } = require('selenium-webdriver');
import {Browser, Builder, By, until} from 'selenium-webdriver'
// const chrome = require('selenium-webdriver/chrome');
// import chrome from 'selenium-webdriver/chrome'

(async function loginTest() {
    // Set up the Chrome driver
    let driver = await new Builder().forBrowser(Browser.CHROME).setChromeOptions().build();

    try {
        // Navigate to the page where your React app is running
        await driver.get('http://localhost:5173/'); // Update with your actual URL if different

        // Find the email and password input fields and the submit button
        let emailInput = await driver.findElement(By.name('email'));
        let passwordInput = await driver.findElement(By.name('password'));
        let submitButton = await driver.findElement(By.css('input[type="submit"]'));

        // Test case 1: Enter valid email and password
        await emailInput.sendKeys('amanyu@gm.com');
        await passwordInput.sendKeys('12345');
        await submitButton.click();

        // Wait for the navigation to the welcome page
        await driver.wait(until.urlContains('/welcome'), 5000);

        console.log('Login test passed: Successfully navigated to the welcome page');
        
        // You can add more assertions to check if the correct page is displayed

    } catch (error) {
        console.error('Login test failed:', error);
    } finally {
        // Quit the driver
        // await driver.quit();
    }
})();
