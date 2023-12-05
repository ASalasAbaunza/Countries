const { Router } = require("express");

const activitiesRouter = Router();

activitiesRouter.get('/', (req, res) => {
    
    res.status(200).send('Recibí un request de tipo get /activities');
});

activitiesRouter.post('/', (req, res) => {
    
    res.status(200).send('Recibí un request de tipo post /activities');
});

module.exports = activitiesRouter;