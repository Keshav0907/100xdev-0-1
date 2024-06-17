const mongoose = require('mongoose');


mongoose.connect("Your own mongo connection string")

const todoSchema = mongoose.Schema({
  title: String, // String is shorthand for {type: String}
  description: String,
  completed: Boolean,
});


const todo = mongoose.model('todos',todoSchema)


module.exports = {
    todo
}