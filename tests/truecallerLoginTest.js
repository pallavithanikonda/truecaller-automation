const { getDriver } = require('../appium-config');

// Helper function for sleeping (in milliseconds)
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Helper method to get element using XPath with retries
const getElement = async (driver, xpath, retries = 3, waitTime = 2000) => {
  let element = null;
  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      element = await driver.$(xpath);
      if (element) {
        return element;
      }
    } catch (error) {
      console.error(`Attempt ${attempt + 1} failed: Unable to find element: ${xpath}`);
      if (attempt < retries - 1) {
        await sleep(waitTime); // Wait before retrying
      } else {
        throw new Error(`Failed to find element after ${retries} attempts: ${xpath}`);
      }
    }
  }
};

describe('Truecaller Login Test', () => {
  let driver;

  before(async () => {
    driver = await getDriver();
  });

  after(async () => {
    await driver.deleteSession();
  });

  it('should login to Truecaller', async () => {
    try {
      // Page 1: Pick your language
      const englishLang = await getElement(driver, '//*[@text="English"]');
      await englishLang.click();

      // Page 2: Get Started
      const getStartedButton = await getElement(driver, '//*[@text="GET STARTED"]');
      await getStartedButton.click();

      // Page 3: Choose a google account
      const account = await getElement(driver, '//*[@text="pallavi.thanikonda@gmail.com"]');
      await account.click();

      // Page 4: Allow permissions
      const allowButton = await getElement(driver, '//*[@text="Allow"]');
      await allowButton.click();

      // Page 5: Enter phone number
      const phoneNumberField = await getElement(driver, '//*[@resource-id="com.truecaller:id/editText"]');
      await phoneNumberField.setValue('08123456789');


      const verifyButton = await getElement(driver, '//*[@text="VERIFY MY NUMBER"]');
      await verifyButton.click();

    } catch (error) {
      console.error(`Test failed: ${error.message}`);
      throw error; // Re-throw error to fail the test
    }
  });
});
