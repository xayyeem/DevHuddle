const mongoose = require('mongoose')
require('dotenv').config()

const dbConnect = async () => {
    await mongoose.connect(process.env.MONGO_URL).then(() => {
        console.log('Connected to MongoDB')
    }).catch((e) => {
        console.log('Error connecting to MongoDB')
        process.exit(1)
    })
}

module.exports = dbConnect