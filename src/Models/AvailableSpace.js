const { Schema, model } = require('mongoose');

const AvailableSpaceSchema = new Schema({
    day: {
        type: String,
        required: true,
    },
    campus: {
        type: String,
        required: true,
    },
    hour: {
        type: String,
        required: true,
    },
    spaces: {
        type: Number,
        required: true,
        default: 4,
    },
    referencePoint: {
        type: String,
        required: true,
    },
    driver: {
        type: Schema.Types.ObjectId,
        ref: 'Driver',
        required: true,
    },
    passengers: [{
        type: Schema.Types.ObjectId,
        ref: 'Passenger',
    }]

}, {
    timestamps: true,
});

module.exports = model('AvailableSpace', AvailableSpaceSchema);