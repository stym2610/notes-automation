module.exports = {
    logout: async (page) => {
        await page.waitForSelector(".profile-icon-container");
        await page.click(".profile-icon-container");
        await page.waitForSelector(".logout-button");
        await page.screenshot({path : 'screenshot1.png'});
        await page.click(".logout-button");
    }
}