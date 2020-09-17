'use strict';

const Migrator = require('./migrator.js');
const utils = require('./utils.js');

(async () => {
    // Start database migrator
    const migrator = new Migrator();
    await migrator.load();

    // Wait until migrations are done to proceed
    while (!migrator.done) {
        await utils.snooze(1000);
    }
})();