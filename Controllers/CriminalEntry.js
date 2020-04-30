const express=require('express')
const router=express.Router();
const _=require('lodash');
//const { articalModel } = require('../Shared/Database/PoliceModule/ArticalEntryDB')


// router.get('/getCriminalEntry', async(req,res)=>{
//     console.log('getting')    
//     let result= await articalModel.find()
//     res.send(result)
// })

router.post('/CriminalEntry', async(req,res)=>{

    await res.send("result")
})

// router.put('/updateCriminalEntry/:id',async(req,res)=>{
  
//      articalModel.findByIdAndUpdate({_id:req.params.id},{$set:
//         _.pick(req.body,['artical_descrption'])
//     },{new : true},(err,docs)=>{
//         if(!err)res.send('updated successfully..')
//         else console.error('Error while updating role data..',JSON.stringify(err,undefined,2))      
//      })
// })

// router.put('/deleteCriminalEntry/:id',async(req,res)=>{
  
//     articalModel.findByIdAndUpdate({_id:req.params.id},{$set:{is_active:false}
//    },{new : true},(err,docs)=>{
//        if(!err)res.send('Deleted succesfully..')
//        else console.error('Error while updating role data..',JSON.stringify(err,undefined,2))      
//     })
// })

module.exports=router;