const mongoose = require("mongoose");

require("dotenv").config();

const database = ()=>{ 
              mongoose.connect(process.env.DATABASE_URL,{
     useUnifiedTopology:true,
     useNewUrlParser:true
       }).then(()=>{
     console.log("Data Base connected.")
        }).catch((err)=>{
      console.error("Problem while connecting the data base",err.message);
      process.exit(1);
})
}

module.exports = database;