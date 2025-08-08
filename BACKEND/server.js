const express = require("express");

const app  = express();

app.use(express.json());



 require("dotenv").config();

 const PORT = process.env.PORT || 7000 



app.listen(PORT,()=>{
    console.log(`App is listen at ${PORT} `)
});

app.get("/",(req,res)=>{
    res.send(`<h2>Welcome to Dev</h2>`);
})