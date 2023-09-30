const mongoose=require('mongoose')

const Schema=mongoose.Schema

const schema=new Schema({
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true})

const employeemodel=mongoose.model("employees",schema)
module.exports=employeemodel