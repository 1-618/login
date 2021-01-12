//Express module
let express = require('express');
let app = express();

//Express Middleware for parsing Request body data
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Express Router to route requests
let router = express.Router();

//Homepage endpoint
router.use('/', frontPageRoute);


//Routing to the routes at login endpoint
router.use('/login', loginRoute);

module.exports = app;
