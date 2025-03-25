const mongoose =require("mongoose");
const Schema =new mongoose.Schema({
    custmerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"customer"
    },
    otp:{
        type:Number,
        require:true
    }
})

module.exports= mongoose.model("otp",Schema);