const puppeteer = require("puppeteer");
const loginHelper = require("./login");
const logoutHelper = require("./logout");
const addNotesHelper = require("./add-notes");
const DeleteNoteHelper = require("./delete-note");

(async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();

    await loginHelper.login(page);

    // await addNotesHelper.addNote(page, 1);

    await DeleteNoteHelper.deleteAll(page);
    // await logoutHelper.logout(page);

    // await browser.close();
})();