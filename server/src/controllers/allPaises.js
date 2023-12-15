const { Country, Activity } = require('../db');

const allPaises = async () => {
    const paises = await Country.findAll({
        include: {
            model: Activity,
            attributes: ["name", "difficulty", "duration", "season"],
            through: {
                attributes: [],
            },
        },
    });
    return paises;
};

module.exports = allPaises;