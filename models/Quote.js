const mongoose=require('mongoose')

const QuoteSchema=mongoose.Schema({
    content:String,
    author:String,
})

module.exports=mongoose.model('Quote', QuoteSchema)