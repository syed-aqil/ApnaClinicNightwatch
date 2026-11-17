# Apna Clinic – Mobile App Automation (Nightwatch + Appium)

End-to-end **Android app** automation for the Apna Clinic patient app, built with **Nightwatch.js** and **Appium (UiAutomator2)** and run on a real device.

![Nightwatch](https://img.shields.io/badge/Nightwatch.js-5D6D7E?style=flat-square&logo=nightwatch&logoColor=white)
![Appium](https://img.shields.io/badge/Appium-662CAB?style=flat-square&logo=appium&logoColor=white)
![Android](https://img.shields.io/badge/Android-3DDC84?style=flat-square&logo=android&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

## What it covers

- **Login with OTP:** phone-number entry, OTP request, then the code is read from the email inbox over IMAP (`utils/emailUtils.js`, up to 6 retries) and typed digit by digit
- **Online consultation:** navigate to consultations, pick the General Medicine category and choose a physician
- **Pharmacy:** navigation into the pharmacy section
- **Central selectors:** all XPath / `UiSelector` locators kept in one place (`utils/selectors.js`)

## Project structure

```
ApnaClinicNightwatch/
├── tests/
│   └── onBoarding.js       # login, consultation and pharmacy flows
├── utils/
│   ├── emailUtils.js       # IMAP reader that extracts the OTP
│   └── selectors.js        # central Android selectors
├── nightwatch.conf.js      # Appium + real-device capabilities
└── apnaclinic.txt          # sample run output
```

## Running it

Requirements: Node.js, Appium 2 with the UiAutomator2 driver, Android SDK (adb), and a device with USB debugging on.

```bash
npm install
cp .env.example .env    # fill in the values
adb devices             # confirm the device is connected
npx nightwatch --env app.android.real
```

Set your device's `udid` in `nightwatch.conf.js` (from `adb devices`).

## Configuration

See [`.env.example`](.env.example): the test account's phone number, and the inbox (with an app password) that receives the OTP.

---

Author: [Syed Aqil Shah](https://github.com/syed-aqil) · QA Automation & Security Engineer
