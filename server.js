const express=require('express')
const app=express()
const {sequelize,db}=require('./db')

app.set('view engine','hbs')

app.get('/',(req,res)=>{
    res.render('index')
})

app.post('/',(req,res)=>{
    db.create({
        idNO:req.body.sno,
        name:req.body.name,
        info:req.body.info,
        from:req.body.from
    }).then(()=>{
        console.log("added")
    })
})

module.exports={app}

db.sync().then(()=>{
    app.listen(3000)
})