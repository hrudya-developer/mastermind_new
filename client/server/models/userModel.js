const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({

    name:{
        type:String,
        required:[true, "please enter your name"],

    },
    mobile:{
        type:String,
        required:[true, "please enter your mobile number"],
        unique:[true, "This mobile number is already registered"]
    },


    email: {type:String,
        required:[true, 'please enter your email'],
        unique:[true, "This email is already registered"]
    },

    password:{
        type:String,
        required:[true, "please enter your password"]
    },
    role:{
        type:String,
        enum:["admin", "user"],
        default:"user"
    },
    status:{
        type:Boolean,
        default:true
    }
}

);

userSchema.pre('save', async function () {

    if(!this.isModified('password')){
        return;
    }

    this.password = await bcrypt.hash(this.password,10);

});

const User = mongoose.model('User', userSchema);
module.exports = User;