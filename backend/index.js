// setting up a server in express 
const express = require('express')
import {someRouter} from 'router/user.router.js'
const app = express()

// this is the superpower of express 

//making some routes
app.use('/api/user', someRouter)
app.listen(PORT, ()=>{
    console.log('server is running at the port:8000')
})