const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        minLength: 4,
    },
    lastName: {
        type: String
    },
    emailId: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        min: 18,
        max: 150
    },
    gender: {
        type: String,
        validate(value) {
            if (!['male', 'female', 'other'].includes(value)) {
                throw new Error('gender not valid')
            }
        }
    },
    photoUrl: {
        type: String,
        default: 'https://via.placeholder.com/150x150'
    },
    about: {
        type: String,
        default: 'No About Me'
    },
    skills: {
        type: [String]
    }

}, {
    timestamps: true,
    
})

module.exports = mongoose.model('User', userSchema)