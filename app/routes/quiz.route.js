const express = require('express')
const router = express.Router()

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Router: quiz.route.js. Time: ', Date.now())
  next()
})

// define the home page route
router.get('/', function (req, res) {
  res.json({ message: 'hooray! welcome to quiz api!' })
})

// define the about route
router.get('/:quizId', function (req, res) {
  res.json({ message: 'hooray! welcome to single quiz api!' })
})

module.exports = router