const Router = require('express')
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const {check, validationResult} = require('express-validator')
const jwt = require('jsonwebtoken')
const config = require('config')
const authMiddleware = require('../middleware/auth.middleware')
const fileService = require('../services/fileServices')
const File = require('../models/File')


const router = Router()


//Router for registration path (path, callbackFunc) POST METHOD
router.post('/registration',[
    check('email', "Invalid email").isEmail(),
    check('password', 'Password must be a longer than 6 symbols').isLength({min:6})
], async (req, res) => {
    try{

        const errors = validationResult(req)

        if(!errors.isEmpty()){
            return res.status(400).json({message: 'Invalid registration data, try again'})
        }

        const {email, password} = req.body // receive the email and password

        const candidate = await User.findOne({email}) // try to find the existing email AWAIT

        //checking if email exist
        if(candidate){
            return res.status(400).json({message: `User with email ${email} is already exist`})
        }

        const hashedPassword = await bcrypt.hash(password, 10)  // await
        //add to new User hashed Password and email
        const user = new User({email, password: hashedPassword})
        // save user to the Database
        await user.save()
        await fileService.createDir(new File({user: user.id, name: ''})) // Forgot import LOL
        //return the response from server
        return res.json({message: "User successfully created"})

    }catch (e) {
        console.log(e.message)
        return res.status(400).json({message: `${e.message}`}) // DONT use status(e.code) - throw Error
    }
})


router.post('/login', async (req,res) => {
    try{
        const {email, password} = req.body
        const user = await User.findOne({email})

        if(!user){
            return res.status(400).json({message: 'User with this email was not found'})
        }

        const isPasswordValid = bcrypt.compareSync(password, user.password)

        if(!isPasswordValid){
            return res.status(400).json({message: 'Invalid user password'})
        }

        const token = jwt.sign({id: user.id}, config.get('secretKey'), {expiresIn: "1h"})
        return res.json({
            token,
            user: {
                id: user.id,
                email: user.email,
                diskSpace: user.diskSpace,
                usedSpace: user.usedSpace,
                avatar: user.avatar
            }
        })

    }catch (e) {
        return res.status(e.code).json({message: e.message})
    }
})

router.get('/auth', authMiddleware, async (req,res) => {
    try{
        const user = await User.findOne({_id: req.user.id})
        const token = jwt.sign({id: user.id}, config.get('secretKey'), {expiresIn: "1h"})
        return res.json({
            token,
            user: {
                id: user.id,
                email: user.email,
                diskSpace: user.diskSpace,
                usedSpace: user.usedSpace,
                avatar: user.avatar
            }
        })
    }catch (e) {
        return res.status(e.code).json({message: e.message})
    }
})


module.exports = router;

