let express = require('express');
loginRoute = express.Router();

loginRoute.get('/login', (req, res) =>{
    res.render('views/login')
})
    .post('/login', (req, res) => {

    })
module.exports = loginRoute;
