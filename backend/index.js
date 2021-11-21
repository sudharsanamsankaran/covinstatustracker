const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

//middleware
const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

//database conf.
mongoose.connect("mongodb://localhost:27017/covidTracker", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})

//routes
const authRout = require('./routes/auth')
app.use('/api/auth',authRout)

const mainRout = require('./routes/main')
app.use('/api/main',mainRout)

//server init
app.listen(8000,() => {
    console.log("BE started at port 8000")
})