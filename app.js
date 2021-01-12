//Express module
let express = require('express');
let app = express();

//Express Middleware for parsing Request body data
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Set the view engine to ejs
app.set('view engine', 'ejs');


//Express Router to route requests
let router = express.Router();
let loginRoute = require('./routes/login-page-router')
let frontPageRoute = require('./routes/front-page-router')

//Homepage endpoint
app.use(frontPageRoute);


//Routing to the routes at login endpoint
app.use(loginRoute);

module.exports = app;
