require('./db/mongoose')
const User = require('./models/user')

//61f54d133c3b5aea50ef496c

User.findByIdAndUpdate('61f54d2e3e866db6e6d2e082', { age:1}).then((user)=>{
    console.log(user)
    return User.countDocuments({age:1})

}).then((result)=>{
    console.log(result)
}).catch((e)=>{
    console.log(e)
})