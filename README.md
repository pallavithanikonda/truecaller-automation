# truecaller-automation

This project automates the login process for the Truecaller app on Android devices using WebdriverIO and Appium. 
The script navigates through the app's login flow, selecting language, signing in via Google, allowing permissions, and entering the phone number.

## Project Structure

```bash
truecaller-automation/
│
├── tests/
|    └──pageObjects/
│       └── truecallerLogin.page.js  # automation script
|    └──specs/
│       └── truecallerLogin.spec.js  # Your automation script
│
├── wdio.conf.js  # WebdriverIO configuration file
│
├── .gitignore  # To ignore unnecessary files
├── package.json  # Project metadata and dependencies
├── README.md  # Project documentation
