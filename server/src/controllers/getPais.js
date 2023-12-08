const { Country, Activity } = require('../db');

const getPais = async (id) => {
    const pais = await Country.findByPk(id, {
        include: {
            model: Activity,
            attributes: ["name", "difficulty", "duration", "season"],
            through: {
                attributes: [],
            },
        },
    });
    if (!pais) {
        return {error: 'No hay países con ese ID'};
    } else {
        return pais;
    }
};

module.exports = getPais;