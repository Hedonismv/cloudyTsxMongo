const express = require('express')
const mongoose = require('mongoose')
const config = require('config')

const app = express()
const PORT = config.get('serverPort')
const mongoUrl = config.get('mongoUrl')
const fileUpload = require('express-fileupload')

const authRouter = require('./routes/auth.routes')
const fileRouter = require('./routes/file.routes')

app.use(fileUpload({})) // write middleware before routes

//By default express cant parse the JSON data, then we need to add this
app.use(express.json())

//routes
app.use('/api/auth', authRouter)
app.use('/api/files', fileRouter)


const start = async () => {
    try{
        console.log(mongoUrl)
        await mongoose.connect(mongoUrl)

        app.listen(PORT, () => {
            console.log(`Server was started on port ${PORT}`)
        })
    }catch (e) {
        console.log(e)
        process.exit(1)
    }
}

start()