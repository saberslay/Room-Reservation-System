const express = require('express')
const bookingsystemrouter = require('./routes/BookingSysteam')
const app = express()

app.set('view engine', 'ejs')

app.use('/BookingSysteam', bookingsystemrouter)

app.get('/',async (req, res) => {
    res.render('index')
})

app.listen(process.env.PORT || 1996);