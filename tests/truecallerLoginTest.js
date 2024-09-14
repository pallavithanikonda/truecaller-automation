/**
 * @description Truecaller Login Test
 * 
 * This test script automates the login process for Truecaller app using Appium and BrowserStack.
 * 
 * @dependencies
 * - appium-config: The configuration file for Appium setup.
 * 
 * @steps
 * 1. Initialize the driver using the getDriver() function from appium-config.
 * 2. Perform the following steps:
 *    a. Page 1: Pick your language
 *       - Find the element with text "English" and click on it.
 *    b. Page 2: Get Started
 *       - Find the element with text "GET STARTED" and click on it.
 *    c. Page 3: Choose an account
 *       - Find the element with text "pallavi.thanikonda@gmail.com" and click on it.
 *    d. Page 4: Allow permissions
 *       - Find the element with text "Allow" and click on it.
 *    e. Page 5: Enter phone number
 *       - Find the element with resource-id "com.truecaller:id/editText" and set its value to "08123456789".
 *       - Find the element with text "VERIFY MY NUMBER" and click on it.
 * 
 * @author Pallavi Thanikonda
 */

const { getDriver } = require('../appium-config');

describe('Truecaller Login Test', () => {
  let driver;

  before(async () => {
    driver = await getDriver();
  });

  after(async () => {
    await driver.deleteSession();
  });

  it('should login to Truecaller', async () => {
    // Page 1: Pick your language
    const englishLang = await driver.$('//*[@text="English"]');
    await englishLang.click();

    // Page 2: Get Started
    const getStartedButton = await driver.$('//*[@text="GET STARTED"]');
    await getStartedButton.click();

    // Page 3: Choose an account
    const account = await driver.$('//*[@text="pallavi.thanikonda@gmail.com"]'); // Choose the first account
    await account.click();

    // Page 4: Allow permissions
    const allowButton = await driver.$('//*[@text="Allow"]');
    await allowButton.click();

    // Page 5: Enter phone number
    const phoneNumberField = await driver.$('//*[@resource-id="com.truecaller:id/editText"]');
    await phoneNumberField.setValue('08123456789');
    const verifyButton = await driver.$('//*[@text="VERIFY MY NUMBER"]');
    await verifyButton.click();
    
  });
});
