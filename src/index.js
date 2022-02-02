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



app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})

const jwt = require('jsonwebtoken')

const myFunction = async ()=>{
   const token = jwt.sign({_id : 'abc123'},'thisismynewcourse')
   console.log(token)
}


myFunction()
// const bcrypt = require('bcrypt')
// const myFunction = async ()=>{
//     const password = 'Red12345@@'
//     const hashedPassword = await bcrypt.hash(password, 8)

//     console.log(password)
//     console.log(hashedPassword)

//     const isMatch = await bcrypt.compare('Red12f345@@', hashedPassword)
//     console.log(isMatch)

// }
// myFunction()