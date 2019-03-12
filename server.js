// call the packages we need
const AppConfig  = require('./config/app.config')
const express    = require('express')        // call express
const app        = express()                 // define our app using express
const bodyParser = require('body-parser')

const router = express.Router()              // get an instance of the express Router

// configure app to use bodyParser()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Database connection ----------------------------------------------------------------
const mongoose  = require('mongoose')
// mongoose.connect('mongodb://node:node@novus.modulusmongo.net:27017/Iganiq8o') // connect to our database

const Bear      = require('./app/models/quiz')
// ---------------------------------------------------------------

// router -----------------------------------------
// middleware to use for all requests
router.use((req, res, next) => {
    // do logging
    console.log('Router : server.js. Forwarding ...')
    next() // make sure we go to the next routes and don't stop here
})

const quizRouter        = require('./app/routes/quiz.route')
// -----------------------------------------------------------------------

// test route to make sure everything is working
router.get('/', function(req, res) {
    res.json({ message: 'Welcome to the ARKEUS server' })
})

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router)
app.use('/api/quiz', quizRouter)
// ----------------------------------------------------------------------

// START THE SERVER -----------------------------------
app.listen( process.env.PORT || AppConfig.PORT, () => {
    console.log('Server is running. Port = ', process.env.PORT || AppConfig.PORT)
})
// -------------------------------------------------------------------------