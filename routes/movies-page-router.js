let express = require('express')
moviesRoute = express.Router()

moviesRoute.get('/', (req, res) => {
    res.render('views/movies-page')
})

module.exports = moviesRoute
