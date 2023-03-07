const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:{
        type: 'string',
        required: true,
    },
    url:{
        type: 'string',
        // required: true,
        
    },
    gender:{
        type: 'string',
        required: true,
    },
    age:{
        type: Number,
        min: 1,
        max: 100,
        required: true,
    },
    address:{
        type: 'string',
        required: true,
    },
    created:{
        type: Date,
        default: Date.now(),
    }
})

module.exports = mongoose.model('users', userSchema);