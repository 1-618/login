//Express module
let express = require('express');
let app = express();

//Express Middleware for parsing Request body data
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//Express Router to route requests
let router = express.Router();
let frontPageRoute = require('./routes/front-page-router');
let albumsRoute = require('./routes/albums-page-router');
let moviesRoute = require('./routes/movies-page-router');
let booksRoute = require('./routes/books-page-router');

//Homepage endpoint
app.use(frontPageRoute);


//Routing to the routes at login endpoint
app.use(albumsRoute);

module.exports = app;
