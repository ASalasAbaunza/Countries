const { Activity } = require('../db');

const createActivity = async ({ 
    name, 
    difficulty, 
    duration, 
    season, 
    countries,
}) => {
    let newActivity = await Activity.create({ 
        name, 
        difficulty, 
        duration, 
        season,
    });

    newActivity.addCountries(countries);
    return newActivity;
};

module.exports = createActivity;