const {Schema, model} = require('mongoose');
const schemaUser = new Schema({
    name: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        required: false,
        
    },
    country: {
        type: String,
    },
})

const User = model(
    'User',
    schemaUser
)

module.exports = User