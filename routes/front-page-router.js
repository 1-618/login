let express = require('express')
frontPageRoute = express.Router()

frontPageRoute.get('/', (req, res) => {
    res.render('front-page')
})

module.exports = frontPageRoute
