let express = require('express')
frontPageRoute = express.Router()

frontPageRoute.get('/', (req, res) => {
    res.render('views/frontPage')
})

module.exports = frontPageRoute
