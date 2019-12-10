const passengerController = module.exports = {};

const Passenger = require('../Models/Passenger');


passengerController.createPassenger = async (req, res) =>{
    try{
        const {name, phoneNumber} = req.body;

        const passengerExists = await Passenger.findOne({name: name});

        if(passengerExists){
            return res.status(200).send('Passenger already exists');
        }

        const passenger = await Passenger.create({
            name,
            phoneNumber,
        });
        return res.json(passenger);

    }catch (e) {
        console.log(`Error: ${e.message}`);
        return res.status(400).send({Error: e.message});
    }
};

passengerController.readPassenger = async (req, res) =>{
    const result = await Passenger.findById(req.params.passengerId);
    return res.json(result);
};

passengerController.readAllPassenger = async (req, res) =>{
    const result = await Passenger.find({});
    return res.json(result);
};

passengerController.updatePassenger = async (req, res) =>{
    const result = await Passenger.findOneAndUpdate({_id: req.params.passengerId}, {name: req.body.name, phoneNumber: req.body.phoneNumber}, {new: true});
    return res.json(result);
};

passengerController.deletePassenger = async (req, res) =>{
    const result = await Passenger.findByIdAndRemove(req.params.passengerId);
    return res.send();
};