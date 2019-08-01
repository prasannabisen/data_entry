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
        res.redirect('/home')
    })
})

app.get('/home',(req,res)=>{
    res.send(300)
})

app.get('/read',(req,res)=>{
    db.findAll({where:{idNO:3}})
    .then((det)=>{
        res.send(det);
    })
    .catch(err=>{
        console.log(err);
    })
})

module.exports={app}

db.sync().then(()=>{
    app.listen(3000)
})