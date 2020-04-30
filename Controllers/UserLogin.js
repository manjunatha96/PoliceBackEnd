const express= require('express')
const router=express.Router();
const { userRegisisterModel }=require('../Shared/Database/UserModule/UserRegistartionDB')
const bcrypt=require('bcryptjs')
const Joi=require('joi')
const loging=require('../Middleware/userLogins')

router.get('/userData',[loging],async(req,res)=>{
    const result= await userRegisisterModel.findById(req.user._id).select('-password')
    console.log(req.user._id);
    res.send(result)
})

router.post('/userlogins',async (req,res)=>{

    let {error} = validate(req.body)
    if(error) return res.status(400).send(error.details[0].message)

    let valid= await userRegisisterModel.findOne({mail_id:req.body.mail_id})
    if(!valid) return res.status(400).send('Email is Incorrect..')

    let passwrd=await bcrypt.compare(req.body.password,valid.password)
    if(!passwrd) return res.status(400).send('Password is Incorrect..')
    if(valid.is_active==true){
        const token= valid.genrate() 
        res.send({token})
    }
    else
    {
        res.send('Not Active user')
    }
})

const validate=function(user){
    const regUser={
        mail_id:Joi.string().min(5).max(255).required().email(),
        password:Joi.string().min(5).max(1024).required()
        }
    return Joi.validate(user,regUser)
}

module.exports=router;