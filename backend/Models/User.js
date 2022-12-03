const mongoose= require("mongoose")
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
        min:6,
        max:50,
        unique:true
    },
    email:{
        type:String,
        require:true,
        max:50,
        unique:true
    },
    passward:{
        type:String,
        require:true,
        min:8
    },
    
},{timestamps:true})

module.exports=mongoose.model("User",userSchema)