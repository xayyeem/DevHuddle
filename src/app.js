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


app.get('/feed', async (req, res) => {
    try {
        // const email = 
        const userdata = await User.find({ emailId: req.body.email });
        if (!userdata) {
            return res.status(404).json({
                message: 'User not found'
            })
        } else {

            res.status(200).json({
                message: 'Data fetched successfully',
                data: userdata
            })
        }
    } catch (error) {
        res.status(400).json({
            message: 'Error fetching data',
            error: error
        })
    }
})

app.delete('/delete', async (req, res) => {
    const userId = req.body._id
    try {
        const deleteUser = await User.indByIdAndDelete({ _id: userId })
        res.send(deleteUser)

        // res.
    } catch (error) {

    }
})


app.patch('/user/:id', async (req, res) => {
    try {
        const data = req.body
        const userId = req.params
        await User.findByIdAndUpdate({ userId: data }, data)
        const allowedUpdate = ['userId', 'photoUrl', 'about', 'gender', 'age']
        const isUpdateAllowed = Object.keys(data).every(k => allowedUpdate.includes(k))
        if (!isUpdateAllowed) {
            res.status(400).json({
                message: 'Invalid update'
            })
        }
        res.send('updated success')
    } catch (error) {

    }
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
    dbConnect()
})