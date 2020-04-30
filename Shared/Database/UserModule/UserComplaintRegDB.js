const mongoose=require('mongoose')
const jwt=require('jsonwebtoken')
const config=require('config');

const complaintRegisterSchema=mongoose.Schema({
    user_id:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserRegister',
    },
    person1:{
        type:String
    },
    other_persons:{
        type:String
    },
    complaint_data:{
        type:Date
    },
    descrption:{
        type:String
    },
    location:{
        type:String
    }, 
    stolen_date:{
        type:Date
    },
    stolen_time:{
        type:String
    },
    address_line1:{
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
    created_date:{
        type:Date,
        default:Date.now
    },
    is_active:{
        type:Boolean,
        default:true
    },
    status:{
        type:String,
        default:'Pending'
    }

})
complaintRegisterSchema.methods.genrate= function (){
    return jwt.sign({_id:this._id,mail_id:this.mail_id,is_active:this.is_active },config.get('jwtPrivateKey'))
}
const ComplaintRegisisterModel=mongoose.model('ComplaintRegister', complaintRegisterSchema)

module.exports={ComplaintRegisisterModel}