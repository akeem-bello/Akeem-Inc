const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
userSchema = mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    password:String
})
const saltRound = 10;
userSchema.pre('save', function(next){
    bcrypt.hash(this.password, saltRound, (err, hashedPassword)=>{
        if(err){
            console.log(err)
        }else{
            this.password = hashedPassword
            next()
        }
    })
})
const userModel = mongoose.model("user_tb", userSchema);
module.exports = userModel;