const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    required: true
  },
  deadline: {
    type: Date
  }
});

const Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;
