const { Schema, model } = require('mongoose');

const Passenger = new Schema({
    name: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    }

}, {
    timestamps: true,
});

module.exports = model('Passenger', Passenger);