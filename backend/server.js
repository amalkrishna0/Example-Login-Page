
const express=require('express')
const mongoose=require('mongoose')
const app=express()
const employeemodel=require('./modules/schema')
const cors = require('cors'); // Import the cors package

app.listen(4000,()=>{
    console.log("Lisening 4000")
})
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb+srv://amalkrishna528:amalkrishna528@cluster0.shzho1x.mongodb.net/?retryWrites=true&w=majority")
    .then(()=>{
        console.log("connected to database")
    })
    .catch((error)=>{
        console.log(error)
    })

app.post('/register',(req,res)=>
{
   employeemodel.create(req.body).
   then(employees=>res.json(employees)).
   catch(err=>res.json(err))
})