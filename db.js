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
    from:{
        type:Sequelize.STRING
    }
})

module.exports={sequelize,db}