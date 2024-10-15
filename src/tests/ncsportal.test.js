import { Builder, By, Key, until } from 'selenium-webdriver';
import assert from "assert";
import { Portal } from '../payload';
import path from 'path';
function randomString(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return 'SeleniumTest ' + result;
}

function randomEmail() {
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let email = '';
  for (let i = 0; i < 10; i++) {
    email += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  email += '@example.com';
  return "test" + email;
}

describe("NCS Portal", async function () {
  let driver;
  before(async function () {
    try {
      // driver = new webdriver.Builder().
      //  usingServer('http://10.251.251.105:4444/wd/hub').
      //  withCapabilities({'browserName': 'chrome'}).
      //  build();

      driver = await new Builder().forBrowser('chrome').build();
      await driver.manage().window().maximize();
      await driver.get('https://us3-test.ncsapp.com/portal');
      // await driver.get('https://us2-stage.ncsapp.com/app/');
      await driver.manage().setTimeouts({ implicit: 10000 });
    } catch (error) {
      console.error("Error occurred while setting up the driver:", error);
    }
  });

  it("TC5108", async function () {
    try {
      let UserName = await driver.findElement(By.id('username'));
      UserName.sendKeys("hoolva@netstratum.com");
      await driver.findElement(By.id('username_password')).sendKeys("password", Key.RETURN);
      let enteredUsername = await UserName.getAttribute('value');
      assert.strictEqual(enteredUsername, "hoolva@netstratum.com");
      await driver.manage().setTimeouts({ implicit: 3000 });
      console.log("Login successful.");
    } catch (error) {
      console.error("Error occurred during login:", error);
    }
  });

  describe("service plan menu click", async function () {
    it("Service Plan click", async function () {
      try {
        let leftMenuBar = await driver.findElement(By.id('leftMenuBar_service_plan'));
        await driver.wait(until.elementIsVisible(leftMenuBar), 2000);
        await leftMenuBar.click();
      } catch (error) {
        console.error("Error occurred while clicking Service Plan:", error);
      }
    });

    it("Add new plan", async function () {
      try {
        await driver.findElement(By.id('servicePlans_addnewplan')).click();
        let userName = await driver.findElement(By.id('servicePlans_PlanName'));
        await userName.sendKeys(randomString(10));
        await driver.findElement(By.id('servicePlans_Description')).sendKeys('I am testing the Selenium JavaScript');
        await driver.findElement(By.id('servicePlans_ChooseFeatures')).click();
        await driver.findElement(By.id('servicePlans_ChooseFeatures')).sendKeys(Key.ARROW_DOWN, Key.ARROW_DOWN, Key.RETURN);
        await driver.findElement(By.id('servicePlans_ChooseFeatures')).sendKeys(Key.ARROW_DOWN, Key.ARROW_DOWN, Key.RETURN);
        await driver.findElement(By.id('defaultButton_Add Plan')).click();
      } catch (error) {
        console.error("Error occurred while adding new plan:", error);
      }
    });

    it("Service Plan click", async function () {
      try {
        let leftMenuBar = await driver.findElement(By.id('leftMenuBar_service_plan'));
        await driver.wait(until.elementIsVisible(leftMenuBar), 5000);
        await leftMenuBar.click();
      } catch (error) {
        console.error("Error occurred while clicking Service Plan:", error);
      }
    });

    it("Edit plan", async function () {
      try {
        let editButton = await driver.findElement(By.id('tableIcon_ServicePlansPage_new_edit'))
        await driver.wait(until.elementIsVisible(editButton), 2000);
        await editButton.click();
      } catch (error) {
        console.error("Error occurred while clicking Edit plan:", error);
      }
    });

    it("Edit plan Button", async function () {
      try {
        let editdescription = await driver.findElement(By.id('servicePlans_Description'))
        await editdescription.clear();
        await editdescription.sendKeys("edit test")
        await driver.findElement(By.id('defaultButton_Update Plan')).click();
      } catch (error) {
        console.error("Error occurred while updating plan:", error);
      }
    });

    // it("Notification edit", async function () {
    //   try {
    //     await driver.manage().setTimeouts({ implicit: 5000 });
    //     let deletenotification = await driver.findElement(By.css('.rnc__notification-content')).getText();
    //     console.log(deletenotification);
    //   } catch (error) {
    //     console.error("Error occurred while deleting notification:", error);
    //   }
    // });


    it("Delete old plan", async function () {
      try { 
        await driver.sleep(5000); 
        await driver.manage().setTimeouts({ implicit: 3000 });
        let deleteButton = await driver.findElement(By.id('tableIcon_ServicePlansPage_wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww_delete'));
        await driver.wait(until.elementIsVisible(deleteButton), 2000);
        await deleteButton.click();
      } catch (error) {
        console.error("Error occurred while deleting old plan:", error);
      }
    });

    it("Delete Confirm", async function () {
      try {
        await driver.manage().setTimeouts({ implicit: 3000 });
        let deleteButtonConfirm = await driver.findElement(By.id('defaultButton_Confirm'));
        await driver.wait(until.elementIsVisible(deleteButtonConfirm), 2000);
        await deleteButtonConfirm.click();
      } catch (error) {
        console.error("Error occurred while confirming deletion:", error);
      }
    });

    it("Notification delete", async function () {
      try {
        await driver.manage().setTimeouts({ implicit: 5000 });
        let deletenotification = await driver.findElement(By.css('.rnc__notification-content')).getText();
        console.log(deletenotification);
      } catch (error) {
        console.error("Error occurred while deleting notification:", error);
      }
    });

    it("Service Plan search", async function () {
      try {
        let searchField = await driver.findElement(By.id('searchbar_ServicePlansPage'));
        await driver.wait(until.elementIsVisible(searchField), 5000);
        await searchField.sendKeys(randomString(10));
      } catch (error) {
        console.error("Error occurred while searching for a service plan:", error);
      }
    });

  });

  describe("tenants menu", async function () {

    it("Tenants menu click", async function () {
      try {
        let leftMenuBar = await driver.findElement(By.id('leftMenuBar_tenants'));
        await driver.wait(until.elementIsVisible(leftMenuBar), 8000);
        await leftMenuBar.click();
      } catch (error) {
        console.error("Error occurred while clicking Tenants menu:", error);
      }
    });

    it("Notification delete wait", async function () {
      try {
        await driver.wait(until.elementIsNotVisible(driver.findElement(By.css('.rnc__notification-content'))), 10000);
        console.log("Notification is no longer visible.");
      } catch (error) {
        console.error("Error occurred while waiting for notification to disappear:", error);
      }
    });

    it("Add new tenant button click", async function () {
      try {
        let buttonclick = await driver.findElement(By.id('tenants_AddNewTenant'))
        await driver.wait(until.elementIsVisible(buttonclick), 3000);
        await buttonclick.click();
      } catch (error) {
        console.error("Error occurred while clicking Add new tenant button:", error);
      }
    });

    it("Add new tenant", async function () {
      try {
        let tenantName = await driver.findElement(By.id('tenants_TenantName'))
        await tenantName.sendKeys(randomString(10));
        let tenantRealm = await driver.findElement(By.id('tenants_pbxRealm'))
        await tenantRealm.sendKeys(randomString(10));
        let tenantsBrandName = await driver.findElement(By.id('tenants_BrandName'));
        await tenantsBrandName.sendKeys(randomString(10));
        let fileInput = await driver.findElement(By.id('tenants_logoBlackImage_input'));
        await fileInput.sendKeys("./assets/Fohik LOGO01.png");
        let fileInput1 = await driver.findElement(By.id('tenants_logoWhiteImage_input'));
        await fileInput1.sendKeys("./assets/Fohik LOGO01.png");
        let fileInput2 = await driver.findElement(By.id('tenants_favIcon_input'));
        await fileInput2.sendKeys("./assets/Fohik LOGO01.png");
        await driver.findElement(By.id("closeIsconSideModal_tenants_AddNewTenant")).click();
        let searchTenant = await driver.findElement(By.id("searchbar_tenantsPage"));
        await driver.wait(until.elementIsVisible(searchTenant, 2000));
        await searchTenant.sendKeys("System", Key.RETURN);
        let searchkey = await driver.findElement(By.id("body0row0")).getText();
        assert.strictEqual(searchkey, "System")
      } catch (error) {
        console.error("Error occurred while adding new tenant:", error);
      }
    });

    it("Tenants menu click", async function () {
      try {
        let leftMenuBar = await driver.findElement(By.id('leftMenuBar_tenants'));
        await driver.wait(until.elementIsVisible(leftMenuBar), 2000);
        await leftMenuBar.click();
      } catch (error) {
        console.error("Error occurred while clicking Tenants menu:", error);
      }
    });

    it("Edit button click", async function () {
      try {
        let editbuttonclick = await driver.findElement(By.id('tableIcon_tenantsPage_aaaaaaaaaaadarsh_edit'))
        await driver.wait(until.elementIsVisible(editbuttonclick), 2000);
        await editbuttonclick.click();
        await driver.findElement(By.id('tenants_general_EditButton')).click()
        await driver.manage().setTimeouts({ implicit: 5000 });
      } catch (error) {
        console.error("Error occurred while clicking Edit button:", error);
      }
    });

    it("Edit tenant", async function () {
      try {
        await driver.wait(async function () {
          let element = await driver.findElement(By.id('tenants_TenantName'));
          let value = await element.getAttribute('value');
          return value !== null && value !== '';
        }, 10000);
        const inputElement = await driver.findElement(By.id('tenants_TenantName'));
        await driver.wait(until.elementIsVisible(inputElement), 5000);
        const value = await inputElement.getAttribute('value');
        assert.strictEqual(value, "aaaaaaaaaaadarsh")
        let editTenantRealm = await driver.findElement(By.id("tenants_pbxRealm"));
        await driver.wait(until.elementIsVisible(editTenantRealm), 5000);
        await editTenantRealm.sendKeys(" new Realm");
        let fileInput = await driver.findElement(By.id('tenants_logoBlackImage_input'));
        await fileInput.sendKeys("./assets/Fohik LOGO01.png");
        let fileInput1 = await driver.findElement(By.id('tenants_logoWhiteImage_input'));
        await fileInput1.sendKeys("./assets/Fohik LOGO01.png");
        let UpdateButton = await driver.findElement(By.id('defaultButton_Update Tenant'));
        await driver.wait(until.elementIsVisible(UpdateButton), 3000);
        await UpdateButton.click()
      } catch (error) {
        console.error("Error occurred while editing tenant:", error);
      }
    });

    it("Tenants menu click", async function () {
      try {
        let leftMenuBar = await driver.findElement(By.id('leftMenuBar_tenants'));
        await driver.wait(until.elementIsVisible(leftMenuBar), 2000);
        await leftMenuBar.click();
      } catch (error) {
        console.error("Error occurred while clicking Tenants menu:", error);
      }
    });

    it("Users table", async function () {
      try {
        await driver.manage().setTimeouts({ implicit: 5000 });
        await driver.findElement(By.id("tenantView_tab_Users")).click()
      } catch (error) {
        console.error("Error occurred while accessing Users table:", error);
      }
    });

    it("Add Users Button", async function () {
      try {
        await driver.findElement(By.id("tenantView_AddNewUser")).click()
        await driver.manage().setTimeouts({ implicit: 5000 });
      } catch (error) {
        console.error("Error occurred while clicking Add Users Button:", error);
      }
    });

    it("Add user form", async function () {
      try {
        let Fname = await driver.findElement(By.id("tenants_Users_FirstName"))
        await driver.wait(until.elementIsVisible(Fname), 2000);
        await Fname.sendKeys(randomString(10));
        let Lname = await driver.findElement(By.id("tenants_Users_LastName"))
        await driver.wait(until.elementIsVisible(Lname), 2000);
        await Lname.sendKeys(randomString(10));
        let LogingUserName = await driver.findElement(By.id("tenants_Users_LoginUserName"))
        await driver.wait(until.elementIsVisible(LogingUserName), 2000);
        await LogingUserName.sendKeys(randomString(10));
        let LogingUserPassword = await driver.findElement(By.id("tenants_Users_LoginPassword"))
        await driver.wait(until.elementIsVisible(LogingUserPassword), 2000);
        await LogingUserPassword.sendKeys(randomString(10));
        let displayName = await driver.findElement(By.id("tenants_Users_DisplayName"))
        await driver.wait(until.elementIsVisible(displayName), 2000);
        await displayName.sendKeys(randomString(10));
        let EmailAdress = await driver.findElement(By.id("tenants_Users_EmailAddress"))
        await driver.wait(until.elementIsVisible(EmailAdress), 2000);
        await EmailAdress.sendKeys(randomEmail());
        let SIPName = await driver.findElement(By.id("tenants_Users_SIPName"))
        await driver.wait(until.elementIsVisible(SIPName), 2000);
        await SIPName.sendKeys(randomString(10));
        let SIPPin = await driver.findElement(By.id("tenants_Users_SIPPin"))
        await driver.wait(until.elementIsVisible(SIPPin), 2000);
        await SIPPin.sendKeys(randomString(10));
        await driver.findElement(By.id("defaultButton_Add")).click();
        await driver.manage().setTimeouts({ implicit: 5000 });
        await driver.findElement(By.id("tenantView_tab_Users")).click()
        await driver.manage().setTimeouts({ implicit: 5000 });
      } catch (error) {
        console.error("Error occurred while filling Add user form:", error);
      }
    });

    it("Add Mapping service", async function () {
      try {
        await driver.findElement(By.id("tenants_UserPage_tertiaryButton_userfourfourfour")).click();
        let SIPName = await driver.findElement(By.id("tenants_Users_SIPName"))
        await driver.wait(until.elementIsVisible(SIPName), 2000);
        await SIPName.sendKeys(randomString(10));
        let SIPPin = await driver.findElement(By.id("tenants_Users_SIPPin"))
        await driver.wait(until.elementIsVisible(SIPPin), 2000);
              await SIPPin.sendKeys(randomString(10));
              await driver.findElement(By.id("closeIsconSideModal_tenants_users_EditUser")).click();
      } catch (error) {
        console.error("Error occurred while adding Mapping service:", error);
      }
    });

    it("Users Disable", async function () {
      try {
        await driver.findElement(By.id("tenants_UserPage_SeleniumTest_oq38oOQZPn_flipButton")).click();
      } catch (error) {
        console.error("Error occurred while disabling users:", error);
      }
    });

    it("Users Delete", async function () {
      try {
        await driver.findElement(By.id("tableIcon_tenants_UserPage_useroneoneone_delete")).click();
        await driver.findElement(By.id("tenants_users__DeleteConfirm")).click()
      } catch (error) {
        console.error("Error occurred while deleting users:", error);
      }
    });
    driver.quit()
  });

});
