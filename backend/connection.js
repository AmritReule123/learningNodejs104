
/// hami yaha database connection ko code/logic lekxam
const { Sequelize, DataTypes } = require("sequelize")


const sequelize  = new Sequelize("postgresql://postgres.yqrnyiytigxzgskoqvgq:meronewconnectionhunxa@aws-1-ap-southeast-2.pooler.supabase.com:6543/postgres")

sequelize.authenticate()
.then(()=>{
    console.log("authenticated vayo, connected!!")
})

.catch((err)=>{
    console.log("Error" + err)
})


//object banauda hunxa
const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

module.exports = sequelize;