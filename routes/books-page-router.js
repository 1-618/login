let express = require('express')
booksRoute = express.Router()

booksRoute.get('/', (req, res) => {
    res.render('views/books-page')
})

module.exports = booksRoute
