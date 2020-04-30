const mongoose=require('mongoose');
const Joi=require('joi')

const articalSchema=mongoose.Schema({
    artical_name:{
        type:String
        // require:true,
        // unique:true
    },
    artical_descrption:{
        type:String,
    },
    is_active:{
        type:Boolean,
        default:true
    },
    created_date:{
        type:Date,
        default:Date.now
    }
})
const articalModel=mongoose.model('Aratical_Master',articalSchema)

// const validateRole=function(rolz){
//     const roles={
//         role_name:Joi.string().min(5).max(50).required()
//     }
//     return Joi.validate(rolz,roles)
// }

// module.exports.validate=validateRole;
module.exports={articalModel};