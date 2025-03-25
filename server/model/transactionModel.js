const mongoose  =require("mongoose")

const transactionSchema = new mongoose.Schema({
     customerid  : {
        type : mongoose.Schema.Types.ObjectId,
        ref :"customer"
     },
   //   amount : Number,
   //   status : String,
   //   date : {
   //      type : Date,
   //      default : Date.now
   //   } 

   amount:{
      type:Number,
      require: true
  },
  amountDetail:{
      type:String,
      require: true
  },
  status:{
      type:String,
      require:true
  },
  date:{
      type:Date,
      default:Date.now,
      require:true
  },
  otp:{
    type:Number,
    require:true
}

})



module.exports = mongoose.model("transaction" , transactionSchema)