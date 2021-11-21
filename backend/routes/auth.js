const User = require("../models/User")
const Express = require("express")
const router = Express.Router()

/*      /api/auth/login         */
router.post("/login", (req, res)=> {
    const { email, password} = req.body
    User.findOne({ email: email}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({message: "Login Successfull", user: user})
            } else {
                res.send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    })
}) 

/*      /api/auth/register         */
router.post("/register", (req, res)=> {
    const { name,address,phoneno,age,vaccinated,lifestyledisease,district,village,ward,email,password} = req.body
    User.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {
            const user = new User({
                
                name,
                address,
                phoneno,
                age,
                vaccinated,
                lifestyledisease,
                district,
                village,
                ward,
                email,
                password
               
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully Registered, Please login now." })
                }
            })
        }
    })
    
}) 


module.exports = router