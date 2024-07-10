module.exports = {
  e2e: {
    chromeWebSecurity: false, //workaround to bypass saucelabs authorization bug
    setupNodeEvents(on, config) {
    },
    env: {
      base_url: 'https://www.saucedemo.com/',
      username: 'standard_user',
      password: 'secret_sauce'
    }
  },
};
