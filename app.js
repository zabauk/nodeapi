const express=require('express')
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const Quote=require('./route/quoteRoutes')

//create application
const app=express()

//connect mongodb
mongoose.connect('mongodb://localhost/motivation',  {useNewUrlParser: true, useUnifiedTopology: true})
const db=mongoose.connection
db.once('open', ()=>{
    console.log('connection established')
})

//middleware
app.use(bodyParser.json())


//route
app.get('/', (req, res)=>{
    res.send('Home Page')
})

//route from router
app.use('/quotes', Quote)

//start serveron port 3000
app.listen(3000, console.log('Server running on port 3000'))