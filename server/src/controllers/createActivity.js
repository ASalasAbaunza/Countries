const { Activity } = require('../db');

const createActivity = async ({ 
    name, 
    difficulty, 
    duration, 
    season, 
    countries,
}) => {
    console.log({ name, difficulty, duration, season, countries });
    let newActivity = await Activity.create({ 
        name, 
        difficulty, 
        duration, 
        season,
    });
    console.log(newActivity);

    newActivity.addCountries(countries);
    console.log(newActivity);
    return newActivity;
};

module.exports = createActivity;