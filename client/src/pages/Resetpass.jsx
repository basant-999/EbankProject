import React from 'react'
import { useState } from 'react';
import { toast,ToastContainer } from 'react-toastify'
import BASE_URL from '../Config/config';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../css/resetpas.css"

const Resetpass = () => {
  let navigate = useNavigate()
   const [input,Setinput] = useState({})
  let [btnstatus,setbtnStatus]=useState(false);
  const Handleform=async(e)=>{
    e.preventDefault()
    if(input.newpassword != input.confomepass){
      toast.error("Please inter the same password")
    }
    if(input.newpassword === input.confomepass){
      let api = `${BASE_URL}/BankData/changepasswo`

      try {

        let respon = await axios.post(api,({userid:localStorage.getItem("useid"),...input}))
        console.log(respon)
        toast.success(respon.data.msg)
        navigate("/dashboard")
        
      } catch (error) {
        toast.error(error.respon.data.msg)
      }
    }
  }

 const Handleinput=async(e)=>{
    let {name,value} = e.target
    Setinput(valuess=>({...valuess,[name]:value}))
    console.log(input)
 }

 const SendOTP=async(e)=>{
    e.preventDefault()
    let api = `${BASE_URL}/BankData/otpgenerate`
    try {
      let respo = await axios.post(api,{ide:localStorage.getItem("useid")})
      console.log(respo)
      toast.success(respo.data.msg)
      setbtnStatus(true)
    } catch (error) {
      toast.error(error.respo.data.msg)
    }
 }

 const buttonClick=()=>{
        console.log()
 }
  return (
    <>
          <div className='resetPassword_section'>
      <div className="reset_password_main">
        <div className="heading">
          <h1>
            Create new password here
          </h1>
          <div className="body">
            <form  method="post" onSubmit={Handleform}>
              <div className="oldpassword">
                <label >Enter  current Password</label>
                <input type="text" name='oldpassword' onChange={Handleinput} />
              </div>
              <div className='Newpassword'>
                <label >Enter  New Password</label>
                <input type="password" name='newpassword' onChange={Handleinput} />
              </div>
              <div className="confomepassword">
                <label >Enter Conform Password</label>
                <input type="text" name='confomepass' onChange={Handleinput}  />
              </div>
              {
                (btnstatus)?
                <> <input type='number' placeholder='Enter the Otp'  id='otpfiled'  name='otp' onChange={Handleinput}/>
                <button type="submit" onClick={buttonClick}>Submit</button></>:
                <>
               
                <button  onClick={SendOTP}>Generate</button></>
              }
            </form>
          </div>
        </div>
      
      </div>
    </div>
    < ToastContainer />
    </>
  )
}

export default Resetpass