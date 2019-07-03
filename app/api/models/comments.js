const mongoose = require('mongoose');
//Define a schema
const Schema = mongoose.Schema;
const CommentSchema = new Schema({
 title: {
  type: String,
  trim: true,  
  required: true,
 },
 content: {
    type: String,
    trim: true,  
    required: true,
   },
 created_at: {
  type: Date,
  trim: true,
  required: true,
  default: Date.now,
 }
});
module.exports = mongoose.model('Comment', CommentSchema)