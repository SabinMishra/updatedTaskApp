const mongoose = require('mongoose')
//TASKS



const Task = mongoose.model('Task',{
    description:{
        type:String,
        required:true,
        trim:true

    },
    completed:{
        type:Boolean,
        required:false,
        default:false
    }        
})

module.exports= Task
