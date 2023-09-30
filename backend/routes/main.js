const express=require('express')
const schema=require('../modules/schema')
const router=express.Router()
const{
    createUser
}=require('../controllers/user_controllers')

router.get('/register',createUser)

module.export=router