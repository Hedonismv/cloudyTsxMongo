const express = require('express')
const mongoose = require('mongoose')
const config = require('config')

const app = express()
const PORT = config.get('serverPort')
const mongoUrl = config.get('mongoUrl')

const start = async () => {
    try{
        await mongoose.connect(mongoUrl)

        app.listen(PORT, () => {
            console.log(`Server was started on port ${PORT}`)
        })
    }catch (e) {
        
    }
}

start()