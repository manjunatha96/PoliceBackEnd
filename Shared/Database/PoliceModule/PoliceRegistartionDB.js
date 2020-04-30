const mongoose=require('mongoose')
const jwt=require('jsonwebtoken')
const config=require('config');

const policeRegisterSchema=mongoose.Schema({
    first_name:{
        type:String
    },
    last_name:{
        type:String
    },
    mobile_no:{
        type:Number
    },
    mail_id:{
        type:String
    },
    password:{
        type:String
    },
    dob:{
        type:Date
    },
    joining_date:{
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
    designation:{
        type:String
    },
    role:{
        type:String
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
policeRegisterSchema.methods.genrate= function (){
    return jwt.sign({_id:this._id,mail_id:this.mail_id,role:this.role,is_active:this.is_active },config.get('jwtPrivateKey'))
}
const policeRegisisterModel=mongoose.model('PoliceRegister', policeRegisterSchema)

module.exports={policeRegisisterModel}