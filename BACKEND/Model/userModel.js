
const mongoose = require("mongoose");


const userSchema = mongoose.Schema({
    firstName:{
        type:String,
        required:[true,"required"],
        trim:true
    },
    lastName:{
         type:String,
         required:[true,"required"],
         trim:true
    },
    email:{
        type:String,
        required:[true,"email required"],
        trim:true,
        
    },
    password:{
        type:String,
        required:[true,"password required"],
        trim:true,
        minLength:[8,"password must be 8 charecter"]
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model("User",userSchema);