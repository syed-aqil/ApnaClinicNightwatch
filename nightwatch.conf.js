// nightwatch.conf.js
module.exports = {
  src_folders: ["tests"],

  test_settings: {
    app: {
      selenium: {
        start_process: true,
        use_appium: true,
        host: "localhost",
        port: 4723,
        server_path: "",
        cli_args: [],
        default_path_prefix: "",
      },
      webdriver: {
        timeout_options: {
          timeout: 150000,
          retry_attempts: 3,
        },
        keep_alive: false,
        start_process: false,
      },
    },

    "app.android.real": {
      extends: "app",
      desiredCapabilities: {
        browserName: null,
        platformName: "Android",
        "appium:options": {
          automationName: "UiAutomator2",
          platformVersion: "16",
          deviceName: "Pixel",
          udid: "19301FDEE003AS",
          appPackage: "com.apna.clinic.android",
          appActivity: "com.apna.clinic.android.MainActivity",
          appWaitActivity: "*",
          appWaitForLaunch: true,
          noReset: true,
          autoGrantPermissions: true,
          newCommandTimeout: 120,
        },
      },
    },
  },
};
