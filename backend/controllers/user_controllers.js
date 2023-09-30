const schema=require('../modules/schema')
const mongoose=require('mongoose')

const createUser=async(req,res)=>{
    const {name,username,password}=req.body

    try{
        const users=await schema.create({name,username,password})
        res.status(200).json(workout)
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
}