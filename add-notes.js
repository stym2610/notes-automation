const constants = require("./constants");

module.exports = {
    addNote: async (page, numOfNotes) => {
        if(numOfNotes > 15)
            numOfNotes = 15;
        for(var i = 0; i < numOfNotes; i++){
            await page.waitForSelector(".add-note-field");
            await page.type(".add-note-field", constants.notesArray[i]);
            await page.keyboard.press('Enter');
        }
    }
}