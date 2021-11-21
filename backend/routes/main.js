const Post = require("../models/Post")
const Message = require("../models/Message")
const Express = require("express")
const router = Express.Router()


router.post("/post", (req, res)=> {
    const {symptoms,testdate,selfisolation,medicalcenter,medicinestatus,issues,email} = req.body
            const post = new Post({
                symptoms,
                testdate,
                selfisolation,
                medicalcenter,
                medicinestatus,
                issues,
                email,
               
            })
            post.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( {post })
                }
            })
          
        })

router.post("/msg", (req, res)=> {        
    const {uid,msg,reply} = req.body
    const message = new Message({
        uid,
        msg,
        reply,
        })

    message.save(err =>{
        if(err){
            res.send(err)
        }else{
            res.send({message})
        }
    })    
})

router.get("/msg/:uid", (req, res)=> {        
    const uid = req.params.uid
    Message.find({ uid: uid}, (err, msg) => {
        res.send({msg})
    })

})



module.exports = router        