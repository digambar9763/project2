const router = require("express").Router()
const User = require("../Models/User")
const bcrypt = require('bcryptjs');

// create USER

router.post("/register", async (req, res) => {

    try {
        // generate secure passward
        const salt = await bcrypt.genSalt(10);
        const securePassward = await bcrypt.hash(req.body.passward, salt)
        // create new user 
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            passward: securePassward,

        })
        // save user and send response
        const user = await newUser.save()
        res.status(200).json(user._id)

    } catch (err) {
        res.status(500).json(err)
    }
})

// user login 
router.post("/login", async function (req, res) {
    try {
        const user = await User.findOne({ username: req.body.username })
        
        !user && (res.status(400).json("wrong username or passward"))

       
        // passward validate 

        const validPassward =  await bcrypt.compare(
            req.body.passward,
            user.passward
        )
        

        !validPassward && (res.status(400).json("wrong username or passward"))

        // send res
        res.status(200).json({ _id: user._id, username: user.username })

    } catch (err) {
        //   res.status(500).json(err)
        
    }
})
// user logout



module.exports = router