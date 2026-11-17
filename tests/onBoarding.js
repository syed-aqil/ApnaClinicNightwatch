const { checkEmailsForPINApnaClinic } = require("../utils/emailUtils");
const dotenv = require("dotenv");
const elements = require("../utils/selectors");


module.exports = {
  "Login Flow": async function (browser) {
    // await browser.waitForElementVisible("xpath", elements.skip_btn, 10000);
    // await browser.click("xpath", elements.skip_btn)
    // await browser.waitForElementVisible("xpath", elements.loginBtn, 5000);
    await browser.click("xpath", elements.loginBtn);
    browser.assert.ok(true, "Login button Clicked");
    // await browser.waitForElementVisible("xpath", elements.numberField, 5000);
    await browser.setValue("xpath", elements.numberField, process.env.PHONE);
    browser.assert.ok(true, "Phone number Entered");
    // await browser.waitForElementVisible("xpath", elements.sendOtpButton, 2000);
    await browser.click("xpath", elements.sendOtpButton);
    await browser.pause(2000);
    browser.assert.ok(true, "Phone number entered and Get OTP clicked");
    await browser.pause(25000);
    let otp = null;
    const maxRetries = 6;
    for (let i = 0; i < maxRetries; i++) {
      otp = await checkEmailsForPINApnaClinic();
      if (otp) break;
      console.log(` Waiting for OTP... attempt ${i + 1}/${maxRetries}`);
      await browser.pause(5000);
    }
    if (!otp) {
      throw new Error("No valid OTP received in time");
    }
    console.log(`OTP to use for Subscription: ${otp}`);
    const digits = otp.substring(0, 4).split("");
    await browser.setValue("xpath", elements.otpDigit1, digits[0]);
    await browser.setValue("xpath", elements.otpDigit2, digits[1]);
    await browser.setValue("xpath", elements.otpDigit3, digits[2]);
    await browser.setValue("xpath", elements.otpDigit4, digits[3]);
    browser.assert.ok(true, "OTP entered");
    await browser.appium.pressKeyCode(4);
    await browser.click("xpath", elements.verifyOTP_btn);
    await browser.pause(10000);
    browser.assert.ok(true, "Logged In Successfully");
  },

  
  "Online Consultation": async function (browser) {
    await browser.click("xpath", elements.onlineConsultation);
    await browser.pause(1000);
    browser.assert.ok(true, "Navigated to Online Consultation");
    await browser.click("xpath", elements.generalMedicine);
    await browser.pause(1000);
    browser.assert.ok(true, "Selected Consultation Category General Medicine");
    await browser.click("xpath", elements.generalPhysician);
    await browser.pause(1000);
    browser.assert.ok(true, "Selected Consultation type General Physician");
    await browser.click("xpath", elements.selecrPhysician);
    await browser.pause(1000);
    browser.assert.ok(true, "Selected General Physician for Consultation");
    await browser.click("xpath", elements.backBtn);
    await browser.pause(1000);
    await browser.click("xpath", elements.backBtn);
    await browser.pause(1000);
    await browser.click("xpath", elements.backBtn);
    await browser.pause(1000);
    await browser.click("xpath", elements.backBtn);
    await browser.pause(1000);
    browser.assert.ok(true, "Navigated back to home page");
  },


  "Pharmacy Store": async function (browser) {
    await browser.click("xpath", elements.pharmacy);
    await browser.pause(1000);
    browser.assert.ok(true, "Navigated to Pharmacy");
    await browser.click("xpath", elements.searchMedicne);
    await browser.setValue("xpath", elements.searchMedicne, "Panadol");
    browser.assert.ok(true, "Search for Medicine");
    await browser.pause(1000);
    await browser.click("xpath", elements.searchIcon);
    await browser.pause(1000);
    browser.assert.ok(true, "Searched Medicine");
    await browser.click("xpath", elements.selectTab);
    await browser.pause(1000);
    browser.assert.ok(true, "Selected the Searched Tablets");
    await browser.click("xpath", elements.backBtn);
    await browser.pause(1000);
    await browser.click("xpath", elements.backBtn);
    browser.assert.ok(true, "Navigated back to home page");
  },


  "Lab Tests": async function (browser) {
    await browser.click("xpath", elements.labTesting);
    await browser.pause(1000);
    browser.assert.ok(true, "Navigated to Lab Tests");
    await browser.click("xpath", elements.selectCity);
    await browser.pause(1000);
    browser.assert.ok(true, "Selected the City");
    await browser.click("xpath", elements.selectTest);
    await browser.pause(1000);
    browser.assert.ok(true, "Selected the Tested Type");
    await browser.click("xpath", elements.backBtn);
    await browser.pause(1000);
    await browser.click("xpath", elements.backBtn);
    await browser.pause(1000);
    browser.assert.ok(true, "Navigated back to home page");
  },


  "Surgery Booking": async function (browser) {
    await browser.click("xpath", elements.surgeryBooking);
    await browser.pause(1000);
    browser.assert.ok(true, "Navigated to Surgery Booking Section");
    await browser.click("xpath", elements.selectCity)
    await browser.pause(2000)
    browser.assert.ok(true, "Selected City for Surgery Booking");
    await browser.click("xpath", elements.hairTransplant);
    await browser.pause(1000);
    browser.assert.ok(true, "Selected Surgery Type");
    await browser.click("xpath", elements.surgeryCenter);
    await browser.pause(1000);
    browser.assert.ok(true, "Selected Surgery Center");
    await browser.click("xpath", elements.backBtn);
    await browser.pause(1000);
    await browser.click("xpath", elements.backBtn);
    await browser.pause(1000);
    await browser.click("xpath", elements.backBtn);
    await browser.pause(1000);
    browser.assert.ok(true, "Navigated to Home Page");
  },


  "Navbar Items": async function (browser) {
    await browser.click("xpath", elements.myBookings);
    await browser.pause(1000);
    browser.assert.ok(true, "Navigated to My Bookings from Navbar");
    await browser.click("xpath", elements.support);
    await browser.pause(1000);
    browser.assert.ok(true, "Navigated to Support Section from Navbar");
    await browser.click("xpath", elements.profile);
    await browser.pause(1000);
    browser.assert.ok(true, "Navigated to Profile from Navbar");
    await browser.pause(1000);
    await browser.click("xpath", elements.home);
    await browser.pause(1000);
    browser.assert.ok(true, "Navigated to Home from Navbar");
  },


  "Logout Flow": async function (browser) {
    await browser.click("xpath", elements.burgerMenu);
    browser.assert.ok(true, "Open Profile Menu");
    await browser.pause(3000);
    await browser.perform(function () {
      const actions = this.actions();
      return actions
        .move({ x: 560, y: 1400 })
        .press()
        .move({ origin: "pointer", x: 0, y: -500, duration: 1000 })
        .release();
    });
    await browser.pause(3000);
    await browser.click("xpath", elements.logOut);
    browser.assert.ok(true, "Logout clicked");
    await browser.pause(3000);
    await browser.click("xpath", elements.confirmLogout);
    browser.assert.ok(true, "Logged Out Successfully");
    await browser.end();
  },
};
