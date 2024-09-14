# Truecaller Automation

This project automates the login process for the Truecaller app on Android devices using BrowserStack and Appium. 
The script navigates through the app's login flow, selecting language, signing in via Google, allowing permissions, and entering the phone number.

Note: As it is having many screens stopping the automation after entering the phone number

## Project Structure

```bash
truecaller-automation/  
├── config/  
│   ├── browserstack.json  
├── tests/  
│   ├── truecallerLoginTest.js  
├── .gitignore  
├── README.md  
├── package.json  
└── appium-config.js  
```
## Prerequisites

- Node.js (>= 12.x)
- BrowserStack account
- Android APK file uploaded to BrowserStack
- Appium


## Installation

### Clone the repository: (It is public for review with Truecaller, will make prive after the review)

   ```bash
   git clone https://github.com/pallavithanikonda/truecaller-automation.git 
   ```

### Install the required dependencies:

   ```bash
   npm install
   ```

### Update the Appium configuration in the appium-config.js file to include your desired capabilities such as device name, platform version, and app details

    ```bash
    exports.config = {
        services: ['appium'],
        capabilities: [{
            deviceName: 'Android Emulator',
            platformName: 'Android',
            platformVersion: '11.0',
            app: 'path/to/truecaller.apk',
            automationName: 'UiAutomator2'
        }]
    };
    ```

## Running the Test

### To run the automated test:

    ```bash
   npm test
   ```
This command will trigger the test script and start the Truecaller login automation


## Test Script

The test script `truecallerLoginTest.js` automates the login process for the Truecaller app. It performs the following steps:

**Page 1: Pick your language**

Finds the element with text "English" and clicks on it.

**Page 2: Get Started**

Finds the element with text "GET STARTED" and clicks on it.

**Page 3: Choose an account**

Finds the element with the text `pallavi.thanikonda@gmail.com` and clicks on it.

**Page 4: Allow permissions**

Finds the element with text "Allow" and clicks on it.

**Page 5: Enter phone number**

Finds the element with the resource-id `com.truecaller:id/editText` and sets its value to `08123456789`.
Finds the element with text "VERIFY MY NUMBER" and clicks on it.


## Troubleshooting

- Make sure that the Appium server is running before executing the test.
- Ensure the device/emulator is properly connected and recognized.
- If you encounter issues, check the Appium logs for more detailed error messages.


## Note
This is only a sudo code and not been tested.