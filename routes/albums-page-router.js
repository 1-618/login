let express = require('express');
albumsRoute = express.Router();

albumsRoute.get('/', (req, res) => {
    res.render('views/albums-page')
})
    .post('/login', (req, res) => {

    })
module.exports = albumsRoute;
