require('dotenv').config()
const cors = require('cors')
const express = require('express')
const app = express()
const kanye = require('./data/kanye')

app.use(cors())

const getRandomQuote = (max) => {
    return Math.floor(Math.random() * max)
}

app.get('/api/kanye', (req, res) => {
    console.log(typeof(kanye[getRandomQuote(kanye.length)]))
    res.send(kanye[getRandomQuote(kanye.length)])
})



app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`)
})