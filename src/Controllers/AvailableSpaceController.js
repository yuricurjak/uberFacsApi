const availableSpaceController = module.exports = {};
const AvailableSpace = require('../Models/AvailableSpace');

availableSpaceController.createAvailableSpace = async (req, res) =>{
    try{
        const {day, campus, hour, referencePoint, driver} = req.body;

        const availableSpace = await AvailableSpace.create({
            day,
            campus,
            hour,
            referencePoint,
            driver //id do objeto
        });
        return res.json(availableSpace);

    }catch (e) {
        console.log(`Error: ${e.message}`);
        return res.status(400).send({Error: e.message});
    }
};

availableSpaceController.readAvailableSpace = async (req, res) =>{
    const result = await AvailableSpace.findById(req.params.availableSpaceId).populate(['driver', 'passengers']);
    return res.json(result);
};

availableSpaceController.readAllAvailableSpace = async (req, res) =>{
    const result = await AvailableSpace.find({}).populate(['driver', 'passengers']);
    return res.json(result);
};

availableSpaceController.updateAvailableSpace = async (req, res) =>{
    let {spaces} = await AvailableSpace.findById(req.params.availableSpaceId);
    const result = await AvailableSpace.findOneAndUpdate({_id: req.params.availableSpaceId}, {$push: {passengers: req.body.passengerId}, spaces: --spaces}, {new: true});
    return res.json(result);
};

availableSpaceController.deleteAvailableSpace = async (req, res) =>{
    const result = await AvailableSpace.findByIdAndRemove(req.params.availableSpaceId);
    return res.send();
};
