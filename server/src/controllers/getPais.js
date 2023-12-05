const { Country } = require('../db');

const getPais = async (id) => {
    const pais = await Country.findByPk(id);
    if (!pais) {
        return {error: 'No hay países con ese ID'};
    } else {
        return pais;
    }
};

module.exports = getPais;