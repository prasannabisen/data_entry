const {sequelize,db}=require('./db')

db.create({
    idNo:1,
    name:'prasanna',
    info:'There were biographical forms and consent forms she hadnt really read, all signed in a loopy, angry signature, and a copy of Tobys birth certificate.',
    from:'keshkal'
}).then(()=>{
    console.log("data is entered")
})