const { Country } = require('../db');
const { Op } = require('sequelize');

const findPais = async (name) => {
    name = name.split('');
    name.unshift('%');
    name.push('%');
    name = name.join('');
    const paises = await Country.findAll({
        where: {
            name: {
                [Op.iLike]: name
            }
        }
    })
    if (paises.length === 0) {
        return {error: 'No existen países con ese nombre'};
    }
    return paises;
};

module.exports = findPais;