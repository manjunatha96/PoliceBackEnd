const mongoose=require('mongoose')
const config=require('config');

const crimalEntrySchema=mongoose.Schema({
    first_name:{
        type:String
    },
    last_name:{
        type:String
    },
    mobile_no:{
        type:Number
    },
    dob:{
        type:Date
    },
    address_line1:{
        type:String
    },
    address_line2:{
        type:String
    },
    city:{
        type:String
    },
    district:{
        type:String
    },
    state:{
        type:String
    },
    pin_code:{
        type:Number
    },
    case_descption:{
        type:String
    },
    Case_date:{
        type:Date,
    },
    Artical_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Aratical_Master',
    },
    created_date:{
        type:Date,
        default:Date.now
    },
    is_active:{
        type:Boolean,
        default:true
    }

})
const crimalEntryModel=mongoose.model('PoliceRegister', crimalEntrySchema)

module.exports={crimalEntryModel}