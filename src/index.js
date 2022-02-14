const express = require('express')
const res = require('express/lib/response')
require('./db/mongoose')

const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const app = express()
const port = process.env.PORT || 3000



//parse the input to the server
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

//Without middleware: new requrest -> run route handler

//With middleware: new request-> do something  -> run route handler


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})

