const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({

    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:[true,"userId is required"]
        
    },
    todoTask:{
        type:String,
        required:true,
        trim:true,
        minLength:[3,"task must be greater then 3 charecter"],

       },
      status:{
        type:String,
        enum:["pending","complete"],
        default:"pending"
      },
       dueDate:{
        type:Date,
         validate:{
            validator:function(value){
                return value > new Date();
            },
            message:"Due date must be future"
         }
       },
       createdAt:{
        type:Date,
        default:Date.now
       }

});

module.exports = mongoose.model("Task",taskSchema);