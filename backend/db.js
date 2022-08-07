const { Pool } = require('pg')

const pool=new Pool({
    user:"ckowuuythpssae",
    password:"12e63df7a6e05060a38180add8854da4df5ba0cff4e55b751ac32fa9e4668d9f",
    host:"ec2-35-168-122-84.compute-1.amazonaws.com",
    port:5432,
    database:"d485l196m4p098",
    ssl:{
        rejectUnauthorized:false
    }
})


module.exports = {pool}