const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: String,
    address:String,
    phoneno:Number,
    age:Number,
    vaccinated:String,
    lifestyledisease:String,
    district:String,
    village:String,
    ward:Number,
    email: String,
    password: String
})
module.exports = mongoose.model('User',userSchema);