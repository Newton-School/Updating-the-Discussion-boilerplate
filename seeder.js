const fs = require("fs");
const Discussion = require('./models/Discussion.js');
const discussion_list = JSON.parse(fs.readFileSync(`${__dirname}/./data/discussions.json`));

async function seedWithDummyData() {
    try {
        // CLEAR Dawait Subject.deleteMany({});
        await Discussion.deleteMany({});

        const createddiscussion = await Discussion.insertMany(discussion_list);

        console.log(`${createddiscussion.length} discussion created.`);
    } catch (error) {
        console.error(`Error seeding data: ${error}`);
        process.exit(1);
    }
}

module.exports = seedWithDummyData