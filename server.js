const express = require('express')
const app = express()
const PORT = 4000


// middleware
app.use(express.json())


// temp database
const db = []


app.get('/', (req, res) => {
    console.log('You have reached the home route: GET')
    res.status(200).send({"message": "Hi mom"})
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

app.delete('/delete/:id/:name', (req, res) => {
    const {id, name} = req.params 
    console.log('What do you want to delete?', id, name)
    res.sendStatus(200)
})

app.listen(PORT, () => {
    console.log(`Server has started on port: ${PORT}`)
})