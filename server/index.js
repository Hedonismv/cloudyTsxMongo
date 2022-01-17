const express = require('express')
const mongoose = require('mongoose')
const config = require('config')

const app = express()
const PORT = config.get('serverPort')
const mongoUrl = config.get('mongoUrl')

const authRouter = require('./routes/auth.routes')

//By default express cant parse the JSON data, then we need to add this
app.use(express.json())

app.use('/api/auth', authRouter)

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