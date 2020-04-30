const express=require('express')
const router= express.Router()
const _=require('lodash')
const bcrypt=require('bcryptjs')
const { policeRegisisterModel} = require('../Shared/Database/PoliceModule/PoliceRegistartionDB') 

router.post('/policeRegister', async(req,res)=>{
    
    const result=new policeRegisisterModel(req.body,_.pick['first_name','last_name','mobile_no','mail_id','password',
    'dob','joining_date','address_line1','address_line2','city','district','state','pin_code','designation','role'])
    const salt= await bcrypt.genSalt(10)
    result.password= await bcrypt.hash(result.password,salt)
    const token= result.genrate()
    await result.save()
    await res.send(token)

})
router.put('/updatepoliceRegister/:id',async(req,res)=>{
  
    policeRegisisterModel.findByIdAndUpdate({_id:req.params.id},{$set:
       _.pick(req.body,['first_name','last_name','mobile_no','mail_id',
       'dob','joining_date','address_line1','address_line2','city','district','state','pin_code','designation','role'])
   },{new : true},(err,docs)=>{
       if(!err)res.send('updated successfully..')
       else console.error('Error while updating role data..',JSON.stringify(err,undefined,2))      
    })
})

router.put('/deletepoliceRegister/:id',async(req,res)=>{
  
    policeRegisisterModel.findByIdAndUpdate({_id:req.params.id},{$set:{is_active:false}
   },{new : true},(err,docs)=>{
       if(!err)res.send('Deleted succesfully..')
       else console.error('Error while updating role data..',JSON.stringify(err,undefined,2))      
    })
})

module.exports=router;