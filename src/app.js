const express = require('express')
const { auth, userAuth } = require('../middlewares/auth')
const dbConnect = require('../config/database')
const User = require('../model/user')
const app = express()

app.use(express.json())


app.post('/signup', async (req, res) => {
    // console.log(req.body)

    try {
        const user = new User(req.body)
        user.save()
        res.status(200).json({
            message: 'User created successfully',
            data: user
        })
    } catch (error) {
        res.status(400).json({
            message: 'Error creating user',
            error: error
        })
    }
})


app.listen(3000, () => {
    console.log('Server is running on port 3000')
    dbConnect()
})