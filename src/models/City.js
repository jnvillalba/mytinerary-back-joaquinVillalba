const {Schema, model} = require('mongoose');

const schemaCity = new Schema({
    name: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    image:{
        type: String,
        required: false
    }
})

const City = model('City', schemaCity);

module.exports = City