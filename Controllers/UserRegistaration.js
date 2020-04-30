const express=require('express')
const router= express.Router()
const _=require('lodash')
const bcrypt=require('bcryptjs')
const { userRegisisterModel } = require('../Shared/Database/UserModule/UserRegistartionDB') 

router.post('/userRegister', async(req,res)=>{
    
    const result=new userRegisisterModel(req.body,_.pick['first_name','last_name','mobile_no','mail_id','password',
    'dob','address_line1','address_line2','city','district','state','pin_code'])
    const salt= await bcrypt.genSalt(10)
    result.password= await bcrypt.hash(result.password,salt)
    const token= result.genrate()
    await result.save()
    await res.send(token)

})
router.put('/updatepUserRegister/:id',async(req,res)=>{
  
    userRegisisterModel.findByIdAndUpdate({_id:req.params.id},{$set:
       _.pick(req.body,['first_name','last_name','mobile_no','mail_id',
       'dob','address_line1','address_line2','city','district','state','pin_code'])
   },{new : true},(err,docs)=>{
       if(!err)res.send('updated successfully..')
       else console.error('Error while updating role data..',JSON.stringify(err,undefined,2))      
    })
})

router.put('/deleteUserRegister/:id',async(req,res)=>{
  
    userRegisisterModel.findByIdAndUpdate({_id:req.params.id},{$set:{is_active:false}
   },{new : true},(err,docs)=>{
       if(!err)res.send('Deleted succesfully..')
       else console.error('Error while updating role data..',JSON.stringify(err,undefined,2))      
    })
})

module.exports=router;