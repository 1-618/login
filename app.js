//Express module
let db = require('./models/db');
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
app.use(router);

//test it to make sure everything is working
app.get('/', (req, res) => {
    res.render('books-page')
})


app.get('/add-a-book', (req, res) => {
    res.render('Add-new-book');
    res.redirect('/')
});

router.post('/add', (req, res) => {
    console.log(req.body);
})

module.exports = app;
