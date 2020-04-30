require('express-async-errors')
const rolesFile=require('../Controllers/roleController')
const registrationUser=require('../Controllers/registrations')
const userInformation=require('../Controllers/userInformationContoller')
const logins=require('../Controllers/LoginController')
const error=require('../Middleware/error')
const fileUpload=require('../Controllers/fileupload')
const roleAssignment=require('../Controllers/RoleAssignment')
const empAttendance=require('../Controllers/EmployeeAttendance')
const PoliceRegister=require('../Controllers/PoliceRegistaration')
const PoliceLogin=require('../Controllers/PoliceLogin')
const SectionEntry=require('../Controllers/SectionEntry')
const CrimanlEntrys= require('../Controllers/CriminalEntry')
const UserRegister= require('../Controllers/UserRegistaration')
const UserLogin= require('../Controllers/UserLogin')
const userComplaints= require('../Controllers/ComplaintRegistartion')
module.exports=function(app){
    app.use('/role',rolesFile)
    app.use('/register',registrationUser)
    app.use('/info',userInformation)
    app.use('/login', logins)
    app.use('/file',fileUpload)
    app.use('/userRole',roleAssignment)
    app.use('/attendance',empAttendance)
    app.use('/PoliceReg',PoliceRegister)
    app.use('/policeLogin', PoliceLogin)
    app.use('/Sections',SectionEntry)
    app.use('/Criminal',CrimanlEntrys)
    app.use('/UserReg',UserRegister)
    app.use('/userLogin',UserLogin)
    app.use('/userComplaint', userComplaints)
    app.use(error)
}