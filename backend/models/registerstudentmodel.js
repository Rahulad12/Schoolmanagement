import mongoose  from "mongoose";

const RegisterStudentSchema = new mongoose.Schema({
    
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    dateofbirth:{
        type:Date,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    grade:{
        type:String,
        required:true
    },
    fathername:{
        type:String,
        required:true
    },
    mothername:{
        type:String,
        required:true
    },
    phonenumber:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
    
    
})

const RegisterStudent = mongoose.model('RegisterStudent',RegisterStudentSchema);
export default RegisterStudent;

