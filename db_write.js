const {sequelize,db}=require('./db')
const {app}=require('./server')

app.use(express.urlencoded({extended: true}))

app.get('/home',(req,res)=>{
    res.send('page 2')
})