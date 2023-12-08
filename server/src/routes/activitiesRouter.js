const { Router } = require("express");
const createActivity = require('../controllers/createActivity');
const getActivities = require('../controllers/getActivities');

const activitiesRouter = Router();

activitiesRouter.get('/', async (req, res) => {
    try {
        let response = await getActivities();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({error: error.nessage});
    }
    //res.status(200).send('Recibí un request de tipo get /activities');
});

activitiesRouter.post('/', async (req, res) => {
    let { name, difficulty, duration, season, countries } = req.body;
    if (!name || !difficulty || !season) {
        res.status(401).json({error: "Información incompleta"});
    } else if (typeof difficulty != 'number' || (duration && typeof duration != 'number')) {
        res.status(401).json({error: "Información incorrecta"});
    } else {
        try {
            let response = await createActivity({ name, difficulty, duration, season, countries });
            res.status(200).json(response);
        } catch (error) {
            res.status(500).json({error: error.nessage});
        }
    }
    //res.status(200).send('Recibí un request de tipo post /activities');
});

module.exports = activitiesRouter;