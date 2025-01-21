const express = require('express')
const app = express()
const PORT = 4000


// middleware
app.use(express.json())
app.use(express.static('public'))
app.use(require('cors')())
app.use(mw)

function mw(req, res, next) {
    console.log('HIT THE MIDDLEWARE')
    const {id} = req.query
    console.log(id)
    if (id != 8) {
        return res.sendStatus(403)
    }
    next()
}


// temp database
const db = []


// scheduler


// Cannot override express.static since it serves index.html to GET request from default home route
// app.get('/', (req, res) => {
//     console.log('You have reached the home route: GET')
//     res.sendStatus(200)
// })

app.delete('/', (req, res) => {
    console.log('You have reached the home route: Delete')
    res.sendStatus(200)
})

app.post('/api/info', (req, res) => {
    const {information} = req.body
    console.log('THE POSTED MESSAGE WAS: ', information)
    db.push(information)
    console.log('DB: ', db)
    res.status(201).json({'yourMessage': information})
})

app.put('/api', (req, res) => {
    const {word, banana} = req.query
    console.log(word, banana)
    res.sendStatus(200)
})


app.delete('/delete/divenire/cool', (req, res) => {
    res.send('Didnt make it')
})

app.delete('/delete', (req, res) => {
    const {id} = req.params 
    console.log('What do you want to delete?', id)
    res.sendStatus(200)
})

app.listen(PORT, () => {
    console.log(`Server has started on port: ${PORT}`)
})