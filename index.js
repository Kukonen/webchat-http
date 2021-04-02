require('dotenv').config()
const express = require('express')
const userRouter = require('./routes/user.route')

const PORT = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use('/api', userRouter)
app.use(express.static('static'))

const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`server start in port ${PORT}`)
        })
    }
    catch (e) {
        console.log(`ERROR ${e}`)
    }
}

start()
