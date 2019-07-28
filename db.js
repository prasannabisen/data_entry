const Sequelize=require('sequelize')
const {app}=require('./server')

const sequelize=new Sequelize({
    dialect:'sqlite',
    storage:'info.db'
})

const db=sequelize.define('info',{
    idNO:{
        type:Sequelize.INTEGER,
    },
    name:{
        type:Sequelize.STRING
    },
    info:{
        type:Sequelize.STRING
    },
    form:{
        type:Sequelize.STRING
    }
})

module.exports={sequelize,db}

db.sync().then(()=>{
    app.listen(3000)
})