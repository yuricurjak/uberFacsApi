const routes = require('express').Router();
const bodyParser = require('body-parser');
const driverController = require('../Controllers/driverController');
const passengerController = require('../Controllers/passengerController');
const availableSpaceController = require('../Controllers/AvailableSpaceController');
routes.use(bodyParser.json());

routes.get('/drivers', driverController.readAllDriver);
routes.get('/drivers/:driverId', driverController.readDriver);
routes.post('/drivers', driverController.createDriver);
routes.put('/drivers/:driverId', driverController.updateDriver);
routes.delete('/drivers/:driverId', driverController.deleteDriver);

routes.get('/passengers', passengerController.readAllPassenger);
routes.get('/passengers/:passengerId', passengerController.readPassenger);
routes.post('/passengers', passengerController.createPassenger);
routes.put('/drivers/:driverId', passengerController.updatePassenger);
routes.delete('/drivers/:driverId', passengerController.deletePassenger);

routes.get('/availableSpace', availableSpaceController.readAllAvailableSpace);
routes.get('/availableSpace/:availableSpaceId', availableSpaceController.readAvailableSpace);
routes.post('/availableSpace', availableSpaceController.createAvailableSpace);
routes.put('/availableSpace/:availableSpaceId', availableSpaceController.updateAvailableSpace);
routes.delete('/drivers/:driverId', availableSpaceController.deleteAvailableSpace);




module.exports = routes;