const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name : {
        type:String,
        maxlength:50
    },
    email:{
        type:String,
        trim:true, //띄어쓰기(공백)제거
        unique:1 //유일한 것만 (중복안되게)
    },
    password :{
        type:String,
        minlingth:5
    },
    lastname:{
        type:String,
        maxlength:50
    },
    role:{
        type:Number,
        default:0
    },
    image:String,
    token:{
        type:String
    },
    tokenExp:{
        type:Number
    }
})

const User = mongoose.model('User', userSchema)

module.exports = {User}