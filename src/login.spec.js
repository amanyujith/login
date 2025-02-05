// Generated by Selenium IDE
import { Builder, By, Key, until } from 'selenium-webdriver';
import assert  from 'assert';

describe('Login', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Login', async function() {
    await driver.get("http://localhost:5173/")
    await driver.manage().window().setRect({ width: 1050, height: 652 })
    await driver.findElement(By.name("email")).click()
    await driver.findElement(By.name("email")).sendKeys("amanyu@gm.com")
    await driver.findElement(By.name("password")).click()
    await driver.findElement(By.name("password")).sendKeys("12345")
    await driver.findElement(By.css("input:nth-child(9)")).click()
    assert(await driver.switchTo().alert().getText() == "logged in")
  })
})
