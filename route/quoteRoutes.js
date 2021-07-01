const express=require('express')
const router=express.Router()
const Quote=require('../models/Quote')

//get router link
router.get('/', async(req, res)=>{
    const quotes=await Quote.find()
    res.json(quotes)
})

//post router
router.post('/new', async(req, res)=>{
    const newQuote=new Quote(req.body)
    const saveQuote=await newQuote.save()
    res.json(saveQuote)
})

module.exports=router