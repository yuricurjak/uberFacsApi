const { Schema, model } = require('mongoose');

const DriverSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    car: {
        type: String,
        required: true,
    },
    licensePlate: {
        type: String,
        unique: true,
        uppercase: true,
        required: true,
    },

}, {
    timestamps: true,
});

module.exports = model('Driver', DriverSchema);