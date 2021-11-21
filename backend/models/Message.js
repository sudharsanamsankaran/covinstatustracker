const mongoose = require('mongoose')

const messageSchema = mongoose.Schema({
  uid:Number,
  msg:String,
  reply:String,
})
 module.exports = mongoose.model('Message',messageSchema);