const express=require('express')
const router=express.Router();
const _=require('lodash');
const { articalModel } = require('../Shared/Database/PoliceModule/ArticalEntryDB')


router.get('/getSectionEntrys', async(req,res)=>{
    console.log('getting')    
    let result= await articalModel.find()
    res.send(result)
})

router.post('/SectionEntrys', async(req,res)=>{

    const result= new articalModel({
        artical_name:req.body.artical_name,
        artical_descrption:req.body.artical_descrption
    })
    await result.save()
    await res.send(result)
})

router.put('/updateSectionEntrys/:id',async(req,res)=>{
  
     articalModel.findByIdAndUpdate({_id:req.params.id},{$set:
        _.pick(req.body,['artical_descrption'])
    },{new : true},(err,docs)=>{
        if(!err)res.send('updated successfully..')
        else console.error('Error while updating role data..',JSON.stringify(err,undefined,2))      
     })
})

router.put('/deleteSectionEntrys/:id',async(req,res)=>{
  
    articalModel.findByIdAndUpdate({_id:req.params.id},{$set:{is_active:false}
   },{new : true},(err,docs)=>{
       if(!err)res.send('Deleted succesfully..')
       else console.error('Error while updating role data..',JSON.stringify(err,undefined,2))      
    })
})

module.exports=router;