const express = require('express')
const { auth, userAuth } = require('../middlewares/auth')
const app = express()

// handle auth middleware fro auth req
app.use('/admin', auth)
// app.use('/user', userAuth)


app.get('/admin/getData', (req, res) => {
    res.send('all data sent')

})

app.get('/user', userAuth, (req, res) => {
    res.send('heehehehhehe')
})

app.get('/admin/deleteData', (req, res) => {
    const token = 'xyz'
    const checkAuth = token === 'xyz'
    if (!checkAuth) {
        res.status(401).send(
            'unauthorize user'
        )
    } else {
        res.send('Delete all data sent')
    }

})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})