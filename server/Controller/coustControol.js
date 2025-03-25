
const CustomerModel = require("../model/coustModel");
const transactionModel = require ("../model/transactionModel")
const autoPassword = require("../middleweare/autopass")
const nodemailer = require("nodemailer");
const bcrypt = require("bcryptjs");
const otpmodel = require("../model/otpmodel")
 

const InsertUserData = async(req,res)=>{
   const {firstname,lastname,email,city,mobile,fulladdress,pincode,statename }=req.body;
    const myPAss = autoPassword.autoPassword()

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(myPAss,salt);
    try {
      let  alredy = await CustomerModel.findOne({email:email})
      if(alredy){
        return res.status(400).send({msg:"this email alredy rgister"})
      }
      else if(!alredy){
        let mailTransporter =
        nodemailer.createTransport(
            {
                service: 'gmail',
                auth: {
                    user: 'basantkushwaha678@gmail.com',
                    pass: 'dzvr hmah sohf ylfd'
                }
            });

            let mailDetails = {
              from: 'basantkushwaha678@gmail.com',
               to : email,
               subject : "E-Banking registration",
               text : `Dear ${firstname} ${lastname} Your account successfully created \n Your Password is ${myPAss}`
          };

          mailTransporter
          .sendMail(mailDetails,
              function (err, data) {
                  if (err) {
                      console.log('Error Occurs');
                  } else {
                      console.log('Email sent successfully');
                  }
              });

              const Customer = await  CustomerModel.create({
                firstname:firstname,
                lastname:lastname,
                email:email,
                city:city,
                mobile:mobile,
                fulladdress:fulladdress,
                pincode:pincode,
                statename:statename,
                password:hashPassword
            })
      }

      res.status(200).send({msg:"Your Account Is Open SuccessFully "})
    } catch (error) {
    res.status(400).send({msg:"Error in Something oops"})
      
    }
    
}



const CustomerLoginData = async(req,res)=>{
    const {email, password} = req.body;
    try {
      const Customer = await CustomerModel.findOne({email:email}); 
      if(!Customer){
       return res.status(400).send({msg:"Email Not Found"});
      }
      const hashPassword = await bcrypt.compare(password ,Customer.password )
      // console.log(hashPassword);
      if(!hashPassword){
       return res.status(400).send({msg:"Password Not Match"});
      } 
      res.status(200).send(Customer); 
  
    } catch (error) {
        res.status(400).send({msg:"Error in Server Side "})
    }
}


const SubmitCashData=async(req,res)=>{
   
    const{amount , status , customerid} = req.body;
    const data = await transactionModel.create({
      amount : amount,
      status : status,
      customerid : customerid
    })
  res.status(200).send(data)

}

const balanceDisplay=async(req,res)=>{
    const {userid} = req.query
  const balance = await transactionModel.find({customerid : userid})
  res.status(200).send(balance)

}

const Accountstate=async(req,res)=>{
   const {userid} = req.body
  try {
    const AccData = await transactionModel.find({customerid:userid}).sort({date:-1})
    res.status(200).send(AccData)
  } catch (error) {
    res.status(500).send({msg:"server error"})
  }
}

const Ministatement=async(req,res)=>{
   
  const {userid} = req.body
  try {
    const reoo = await transactionModel.find({CustmerId:userid}).sort({Date:-1}).limit(10)
    res.status(200).send(reoo)
  } catch (error) {
    res.status(500).send({msg:"server error"})
  }
}

const Searchstatement=async(req,res)=>{
  const{userid,startdate,enddate} = req.body
  try{

  let findData =await transactionModel.find({    
    $and: [
        {"date":{ $gte: startdate ,
        $lte: enddate }},
      { 
        customerid:userid}
    ],
  })
//   console.log(findData)
if(findData.length ==0){
// console.log("no")
return res.status(400).send({msg:"false"})
}
res.status(200).send(findData)
} catch (error) {
res.status(500).send({msg:"server error"})
}

}

const Changepass=async(req,res)=>{
const { userid,oldpassword,newpassword,confomepass,otp} = req.body
console.log(req.body);
    let finddata =await CustomerModel.findById(userid);
    console.log("user found")
try {
  
  const passwordMatching = await bcrypt.compare(oldpassword, finddata.password);
  console.log("password matched")
  if (!passwordMatching) {
      // console.log(passwordMatching);
      return res.status(400).send({ msg: "inCorrect password!" });
  }

  const findOtp =await otpmodel.findOne({custmerId:userid})
  console.log(findOtp);
  if(findOtp.otp != otp){
      return res.status(400).send({ msg: "In_Correct otp please write Currect otp" });
  }
 console.log("opt mached");
            let salt =await bcrypt.genSalt(10);
                  let hasPassword=await bcrypt.hash(newpassword,salt);

                  console.log("new hash password");
            let updataPassword =await CustomerModel.findByIdAndUpdate(userid,{password:hasPassword})

            console.log("updated password")

            

              res.status(200).send({msg:"Your pasword is Reset it..!!"})
            } catch (error) {
            res.status(500).send({msg:"Server Error"})
          }  

}

const Optgenerate =async(req,res)=>{
 const{ide} = req.body
 console.log(req.body)
  try{
 let odata = await CustomerModel.findById(ide)

 const Newotp = Math.floor(Math.random()*777)
  const Mtranspotor = nodemailer.createTransport({
         
    service: 'gmail',
    auth: {
        user: 'basantkushwaha678@gmail.com',
        pass: 'dzvr hmah sohf ylfd'
    }
  })
  let maildetails = {
    from : "basantkushwaha678@gmail.com",
    to : odata.email,
    subject : "Otp",
    text: "Hello, this is a Otp to create Eaccount by  email!",
    html: `This one time password (OTP) this is deleted in 5 min <h1>${Newotp}</h1> `
  }
         Mtranspotor.sendMail(maildetails )
         
    let searchotp = await otpmodel.findById(ide)
    console.log(searchotp);
      if(searchotp){
            await otpmodel.findByIdAndUpdate(searchotp._id,{otp:Newotp})
           return res.status(200).send({msg:"send the Otp in Your Email please check it..!!"})
      }
       await otpmodel.create({
        custmerId:ide,
        otp:Newotp
       })
       res.status(200).send({msg:"send the Otp in Your Email please check it..!!"})
      }catch (error){
        res.status(500).send({msg:'server error'});
      }
}



module.exports = {
    InsertUserData,
    CustomerLoginData,
    SubmitCashData,
    balanceDisplay,
    Accountstate,
    Ministatement,
    Searchstatement,
    Changepass,
    Optgenerate
}