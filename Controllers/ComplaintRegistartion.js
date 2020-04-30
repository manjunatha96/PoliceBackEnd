const express=require('express')
const router=express.Router();
const _=require('lodash');
const { ComplaintRegisisterModel } = require('../Shared/Database/UserModule/UserComplaintRegDB')
const loging= require('../Middleware/userLogins')

router.get('/getCriminalEntry',[loging], async(req,res)=>{
    const result= await ComplaintRegisisterModel.find({user_id:req.user._id, is_active:true})
    console.log(result);
    await res.send(result)

})

router.post('/ComplaintEntry',[loging], async(req,res)=>{
   
    const result=new ComplaintRegisisterModel({
        user_id:req.user._id ,
        person1:req.body.person1,
        other_persons:req.body.other_persons,
        complaint_data:req.body.complaint_data,
        descrption:req.body.descrption,
        stolen_date:req.body.stolen_date,
        stolen_time:req.body.stolen_time,
        address_line1:req.body.address_line1,
        city:req.body.city,
        district:req.body.district,
        state:req.body.state,
        pin_code:req.body.pin_code
    })
     const token= result.genrate()
    await result.save()
    await res.send(token)
})

router.put('/updateComplaintEntry/:id',[loging],async(req,res)=>{
  
    ComplaintRegisisterModel.findByIdAndUpdate({_id:req.params.id,user_id:req.user._id, is_active:true},{$set:
        _.pick(req.body,['person1','other_persons','descrption','address_line1','city','district','state','pin_code'])
    },{new : true},(err,docs)=>{
        if(!err)res.send('updated successfully..')
        else console.error('Error while updating role data..',JSON.stringify(err,undefined,2))      
     })
})

router.put('/deleteComplaintEntry/:id',async(req,res)=>{
  
    ComplaintRegisisterModel.findByIdAndUpdate({_id:req.params.id},{$set:{is_active:false}
   },{new : true},(err,docs)=>{
       if(!err)res.send('Deleted succesfully..')
       else console.error('Error while updating role data..',JSON.stringify(err,undefined,2))      
    })
})

module.exports=router;