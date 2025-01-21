const express = require('express')
const app = express()
const PORT = 4000

app.get('/', (req, res) => {
    console.log('You have reached the home route: GET')
    res.status(200).send({"message": "Hi mom"})
})

app.delete('/', (req, res) => {
    console.log('What do you want to delete?')
    res.sendStatus(200)
})

app.listen(PORT, () => {
    console.log(`Server has started on port: ${PORT}`)
})