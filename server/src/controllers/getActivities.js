const { Activity } = require('../db');

const getActivities = async () => {
    let activities = await Activity.findAll();
    return activities;
};

module.exports = getActivities;