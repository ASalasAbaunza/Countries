const { Router } = require("express");
const getPais = require('../controllers/getPais');
const findPais = require('../controllers/findPais');
const allPaises = require('../controllers/allPaises');

const countriesRouter = Router();

countriesRouter.get('/', async (req, res) => {
    try {
        const response = await allPaises();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({error: error.nessage});
    }
    //res.status(200).send('Recibí un request de tipo get /countries');
});

countriesRouter.get('/name', async (req, res) => {
    let { name } = req.query;
    try {
        if (!name) {
            const response = await allPaises();
            res.status(200).json(response);
        } else {
            const response = await findPais(name);
            if (response.error) {
                res.status(400).json({error: response.error});
            } else {
                res.status(200).json(response);
            }
        }
    } catch (error) {
        res.status(500).json({error: error.nessage});
    }
    //res.status(200).send('Recibí una request de tipo get /countries/name');
});

countriesRouter.get('/:id', async (req, res) => {
    let { id } = req.params;
    try {
        const response = await getPais(id);
        if (response.error) {
            res.status(400).json({error: response.error});
        } else {
            res.status(200).json(response);
        }
    } catch (error) {
        res.status(500).json({error: error.message});
    }
    //res.status(200).send('Recibí un request de tipo get /countries/:idPais');
});

module.exports = countriesRouter;