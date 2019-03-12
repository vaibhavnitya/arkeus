const mongoose     = require('mongoose');
const Schema       = mongoose.Schema;

const QuizSchema   = new Schema({
    name: String
});

module.exports = mongoose.model('Quiz', QuizSchema);