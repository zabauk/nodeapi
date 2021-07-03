require("dotenv").config();

const express=require('express')
const jwt=require('jsonwebtoken')

const app=express()

app.use(express.json())

//POSTS
const posts=[
    {
        "username":"hann htay",
        "title":"Hello world"
    },
    {
        "username":"maungmaung",
        "title":"Testing one two three"
    }
]

app.get('/posts', authenticateToken,(req, res)=>{
    console.log(req.user)
    res.json(posts.filter(post=>post.username===req.user.username))
})



app.post('/login', (req, res)=>{
    //user
    const user={'username':req.body.username}
    const accessToken=jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
    res.json({token: accessToken})
})

//authenticate token
function authenticateToken(req, res, next){
    const authHeader=req.headers['authorization']
    const token=authHeader && authHeader.split(' ')[1]
    if (token===null) return res.sendStatus(401)
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user)=>{
        if(err) return res.sendStatus(403)
        req.user=user
        next()
    })

}

app.listen(3000, ()=>console.log('Server running on port 3000'))