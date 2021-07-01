const express=require('express')
const router=express.Router()

//get router link
router.get('/', (req, res)=>{
    res.send('Get all routes')
})

//post router

module.exports=router