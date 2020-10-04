const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

app.get('/',async (req, res) => {
    res.render('index')
})
app.get('/edit', function(req, res) {  res.render('edit');});
app.listen(process.env.PORT || 1996);