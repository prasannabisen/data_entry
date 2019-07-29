const express=require('express')
const app=express()
const {sequelize,db}=require('./db')

app.set('view engine','hbs')

app.get('/',(req,res)=>{
    res.render('index')
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('/',(req,res)=>{
    db.create({
        idNO:req.body.sno,
        name:req.body.name,
        info:req.body.info,
        from:req.body.from
    }).then(()=>{
        res.redirect('localhost:3000/home')
    })
})

app.get('/home',(req,res)=>{
    res.send(300)
})

module.exports={app}

db.sync().then(()=>{
    app.listen(3000)
})