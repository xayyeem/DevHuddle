const express = require('express')
const { auth, userAuth } = require('../middlewares/auth')
const dbConnect = require('../config/database')
const User = require('../model/user')
const app = express()


app.post('/signup', async (req, res) => {
    const userObj = {
        firstName: 'Khalid',
        lastName: 'Jafri',
        email: 'khalidjafriq@gmail.com',
        password: 'password123',
        age: '23',
        gender: 'male'
    }
    // creating a new instance of user model
    const user = new User(userObj)
    await user.save()
    res.status(201).json({
        message: 'User created successfully',
        data: user
    })
})


app.listen(3000, () => {
    console.log('Server is running on port 3000')
    dbConnect()
})