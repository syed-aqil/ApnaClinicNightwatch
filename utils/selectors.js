const elements = {
  loginBtn: {
    selector: 'new UiSelector().description("Login")',
    locateStrategy: "-android uiautomator",
  },

  numberField: {
    selector: 'new UiSelector().text("3XXXXXXXXX")',
    locateStrategy: "-android uiautomator",
  },

  sendOtpButton: {
    selector: 'new UiSelector().text("Send OTP")',
    locateStrategy: "-android uiautomator",
  },

  otpDigit1: {
    selector:
      'new UiSelector().className("android.widget.EditText").instance(1)',
    locateStrategy: "-android uiautomator",
  },

  otpDigit2: {
    selector:
      'new UiSelector().className("android.widget.EditText").instance(2)',
    locateStrategy: "-android uiautomator",
  },

  otpDigit3: {
    selector:
      'new UiSelector().className("android.widget.EditText").instance(3)',
    locateStrategy: "-android uiautomator",
  },
  
  otpDigit4: {
    selector:
      'new UiSelector().className("android.widget.EditText").instance(4)',
    locateStrategy: "-android uiautomator",
  },
  
  verifyOTP_btn: {
    selector: 'new UiSelector().text("Verify")',
    locateStrategy: "-android uiautomator",
  },

  onlineConsultation: {
    selector:
      'new UiSelector().className("android.widget.ImageView").instance(6)',
    locateStrategy: "-android uiautomator",
  },

  generalMedicine: {
    selector: 'new UiSelector().text("General & Internal Medicine")',
    locateStrategy: "-android uiautomator",
  },

  generalPhysician: {
    selector: 'new UiSelector().text("General Physician")',
    locateStrategy: "-android uiautomator",
  },

  selecrPhysician: {
    selector: 'new UiSelector().text("Assist. Prof. Dr. Fahad Usman")',
    locateStrategy: "-android uiautomator",
  },

  backBtn: {
    selector:
      'new UiSelector().className("android.widget.ImageView").instance(1)',
    locateStrategy: "-android uiautomator",
  },

  pharmacy: {
    selector:
      'new UiSelector().className("android.widget.ImageView").instance(7)',
    locateStrategy: "-android uiautomator",
  },

  searchMedicne: {
    selector: 'new UiSelector().text("Search name..")',
    locateStrategy: "-android uiautomator",
  },

  searchIcon: {
    selector:
      'new UiSelector().className("android.widget.ImageView").instance(4)',
    locateStrategy: "-android uiautomator",
  },

  selectTab: {
    selector: 'new UiSelector().text("Panadol 500mg Tablet 10 S")',
    locateStrategy: "-android uiautomator",
  },

  burgerMenu: {
    selector:
      'new UiSelector().className("android.widget.ImageView").instance(1)',
    locateStrategy: "-android uiautomator",
  },

  labTesting: {
    selector:
      'new UiSelector().className("android.widget.ImageView").instance(8)',
    locateStrategy: "-android uiautomator",
  },

  selectCity: {
    selector: 'new UiSelector().text("Islamabad")',
    locateStrategy: "-android uiautomator",
  },

  selectTest: {
    selector: 'new UiSelector().text("Liver Function Test (LFT)")',
    locateStrategy: "-android uiautomator",
  },

  surgeryBooking: {
    selector:
      'new UiSelector().className("android.widget.ImageView").instance(9)',
    locateStrategy: "-android uiautomator",
  },

  hairTransplant: {
    selector: 'new UiSelector().text("Hair Transplant")',
    locateStrategy: "-android uiautomator",
  },

  surgeryCenter: {
    selector: 'new UiSelector().text("Dr. Omamah Yusuf")',
    locateStrategy: "-android uiautomator",
  },

  myBookings: {
    selector: 'new UiSelector().text("My Bookings")',
    locateStrategy: "-android uiautomator",
  },

  support: {
    selector: 'new UiSelector().text("Support")',
    locateStrategy: "-android uiautomator",
  },


  profile: {
    selector: 'new UiSelector().text("Profile")',
    locateStrategy: "-android uiautomator",
  },

  home: {
    selector: 'new UiSelector().text("Home")',
    locateStrategy: "-android uiautomator",
  },

  logOut: {
    selector: 'new UiSelector().text("Logout")',
    locateStrategy: "-android uiautomator",
  },

  confirmLogout: {
    selector: 'new UiSelector().description("Logout")',
    locateStrategy: "-android uiautomator",
  },
};
module.exports = elements;
