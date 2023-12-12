const { Country } = require('../db');

const allPaises = async () => {
    const paises = await Country.findAll({
        attributes: ["name", "flag", "continent"],
    });
    return paises;
};

module.exports = allPaises;