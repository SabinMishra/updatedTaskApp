const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')
const req = require('express/lib/request')
const { default: isAlphanumeric } = require('validator/lib/isAlphanumeric')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        unique:true,
        required:true,
        trim:true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        }
    }
    ,
    age:{
        type:Number,
        default:0,
        validate(value){
            if(value<0){
                throw new Error('Age must be a positive number')
            }
        }
    },
    password:{
        type: String,
        required:true,
        validate(value){
            if(value.length<6){
                throw new Error('Password length must be longer than 6 characters')
            }else if(value === 'password'){
                throw new Error('PAssword cannot be only password')
            }
            else if(value.toLowerCase().includes('password')){
                throw new Error('Password cannot contain password')
            }
        },
        trim:true
    }

})

userSchema.statics.findByCredentials = async (email, password)=>{
    const user = await User.findOne({email})

    if(!user){
        throw new Error('Unable to login')
    }
    const isMatch = await bcrypt.compare(password, user.password)

    if(!isMatch){
        throw new Error('Unable to login')
    }

    return user
}  

//Run some code before a user is saved and hash password after
userSchema.pre('save',async function(next){
    const user = this

    //check if password is changed and hash it
    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 8)
    }


    //If we never call next then it will never end so that user is not created 
    next()
})

const User = mongoose.model('User', userSchema)

module.exports = User;