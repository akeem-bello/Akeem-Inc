const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
adminSchema = mongoose.Schema({
    name:String,
    email:String,
    password:String
});

const saltRound = 10;
adminSchema.pre('save', function(next){
    bcrypt.hash(this.password, saltRound, (err, hashedPassword)=>{
        if(err){
            console.log(err)
        }else{
            this.password = hashedPassword;
            next();
        }
    })
})

adminSchema.methods.validatePassword = function(password, callback){
    bcrypt.compare(password, this.password, (err, same)=>{
        if(!err){
            callback(err, same);
        }else{
            next();
        }
    })
}

const adminModel = mongoose.model('admin_tb', adminSchema);
module.exports = adminModel;