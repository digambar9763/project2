// import 
const express=require("express")
const mongoose=require("mongoose")
const dotenv= require("dotenv")
const cors=require("cors")
const userRoute = require("./Routes/users")
//  app

const app =express()
dotenv.config()
app.use(express.json())
app.use(cors())


// mongoose 
 mongoose.connect(process.env.mongo_url,{useNewUrlParser:true})
 .then(()=>{
    console.log("mongodb conected")
 })
.catch((err)=>
    console.log(err)
)
//routes
app.use("/api/users",userRoute)

// listen server

app.listen(3000, ()=>{console.log("server is running")})
