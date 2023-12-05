const { Country } = require('../db');

const allPaises = async () => {
    const paises = await Country.findAll();
    return paises;
};

module.exports = allPaises;