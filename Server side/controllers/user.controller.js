const userModel = require('../models/user.model');
const adminModel = require('../models/admin.model');
const productsModel = require('../models/products.model');

const registerUser = (req, res)=>{
    const userDetails = req.body;
    const email = userDetails.email;
    userModel.findOne({email:email}, (err, result)=>{
        if(err){
            res.status(500).send({message: 'Internal Server Error', status:false})
        }else{
            if(result){
                res.send({message: 'Email already exists', status:false})
            }else{
                let form = new userModel(userDetails);
                form.save((err)=>{
                    if(err){
                        res.status(501).send({message: 'Sign up failed, please try again', status:false})
                    }else{
                       res.send({message: 'Sign up successful', status:true}) 
                    }
                })
            }
        }
    })
}

const userSignIn = (req, res)=>{
    const userDetails = req.body;
    const email = userDetails.email;
    const password = userDetails.password;
    userModel.findOne({email:email}, (err, user)=>{
        if(err){
            res.status(500).send({message: 'Internal Server Error.', satatus:false})
        }else{
            if(!user){
                res.send({message: 'Email does not exist, kindly create an account.', status: false})
            }else{
                user.validatePassword(password, (err, same)=>{
                    if(err){
                        res.status(500).send({message: 'Internal Server Error', status: false})
                    }else{
                        if(!same){
                            res.send({message: 'Your password is incorrect', status: false})
                        }else{
                            res.send({message: 'Sign up successful', status: true})
                        }
                    }
                })
            }
        }
    })
}
module.exports = {registerUser, userSignIn}