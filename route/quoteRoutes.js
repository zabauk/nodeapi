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

//get specific quote
router.get('/get/:id', async(req, res)=>{
    const quote=await Quote.findById({_id:req.params.id})
    res.json(quote)
})

//delete record
router.delete('/delete/:id', async(req, res)=>{
    const deldata=await Quote.findByIdAndDelete({_id:req.params.id})
    res.json(deldata)
})

module.exports=router