const {Schema, model} = require('mongoose');
const schemaUser = new Schema({
    name: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        required: false,
        
    },
    
})

const User = model(
    'User',
    schemaUser
)

module.exports = User