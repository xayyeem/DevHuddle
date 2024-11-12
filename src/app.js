const express = require('express')
const app = express()

app.get('/user', (req, res) => {
    res.send({ firstname: 'khalid', lastname: 'khalid' })
})

app.post('/user', (req, res) => {
    res.send('saved success')
})

app.delete('/user', (req, res) => {
    res.send('deleted success')
})

app.use('/test', (req, res) => {
    res.send('hello from test')
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})