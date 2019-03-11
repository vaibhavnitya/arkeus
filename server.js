// call the packages we need
const AppConfig  = require('./config/app.config')
const express    = require('express');        // call express
const app        = express();                 // define our app using express
const bodyParser = require('body-parser');

const router = express.Router();              // get an instance of the express Router

// configure app to use bodyParser()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
app.listen( process.env.PORT || AppConfig.PORT, (res) => {
    console.log('Server is running. Port = ', process.env.PORT || AppConfig.PORT)
});
