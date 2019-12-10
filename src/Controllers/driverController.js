const driverController = module.exports = {};
const Driver = require('../Models/Driver');

driverController.createDriver = async (req, res) =>{
    try{
        const {name, car, licensePlate} = req.body;

        const driverExists = await Driver.findOne({name: name});

        if(driverExists){
            return res.status(200).send('Driver already exists');
        }

        const driver = await Driver.create({
            name,
            car,
            licensePlate,
        });
        return res.json(driver);

    }catch (e) {
        console.log(`Error: ${e.message}`);
        return res.status(400).send({Error: e.message});
    }
};

driverController.readDriver = async (req, res) =>{
    const result = await Driver.findById(req.params.driverId);
    return res.json(result);
};

driverController.readAllDriver = async (req, res) =>{
    const result = await Driver.find({});
    return res.json(result);
};

driverController.updateDriver = async (req, res) =>{
    const result = await Driver.findOneAndUpdate({_id: req.params.driverId}, {name: req.body.name, licensePlate: req.body.licensePlate}, {new: true});
    return res.json(result);
};

driverController.deleteDriver = async (req, res) =>{
    const result = await Driver.findByIdAndRemove(req.params.driverId);
    return res.send();
};