const express=require('express')
const mongoose=require('mongoose')
const bodyParser=require('body-parser')

//create application
const app=express()

//route
app.get('/', (req, res)=>{
    res.send('Home Page')
})

//start serveron port 3000
app.listen(3000, console.log('Server running on port 3000'))