var constants = require("./constants");

module.exports = {
  login: async (page) => {
    await page.goto(constants.loginURL);
    await page.waitForSelector("#mail");
    await page.waitForSelector("#password");
    await page.type("#mail", constants.credentials.email);
    await page.type("#password", constants.credentials.password);
    await page.click(".signin-button");
  }
}