const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    symptoms: String,
    testdate:Number,
    selfisolation:String,
    medicalcenter:String,
    medicinestatus:String,
    issues:String,
    email: String,
})
 module.exports = mongoose.model('Post',postSchema);