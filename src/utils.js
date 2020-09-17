'use strict';

const snooze = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

module.exports = {
    snooze,
};