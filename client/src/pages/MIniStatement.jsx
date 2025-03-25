import { useState,useEffect } from 'react';
import { toast,ToastContainer } from 'react-toastify'
import BASE_URL from '../Config/config';
import axios from 'axios';
import "../css/ministate.css"

const MIniStatement = () => {

    let[data,setdata]=useState([])
    let[filterdata,setFilterdata]=useState([]);
    let[show,setshow]=useState(false)
    let[show_statment,setShowStatment]=useState(false);
    let [startdate,setstartdate]=useState("") //date ke liye
    let[endDate,setEndDate]=useState("");  //date ke liye
  
  
  
  
  const Searchbar=async()=>{
    // console.log(date)
    let api = `${BASE_URL}/BankData/searchState`;
    if(startdate==""  || endDate==""){
      console.log("not fill");
      toast.error("Please Fill the Date file ....!!")
    }
    else{
      try {
        let response =await axios.post(api,{userid:localStorage.getItem("useid"),startdate:startdate,enddate:endDate})
        console.log(response.data)
       
        setFilterdata(response.data);
        setShowStatment(true)
        setshow(false)
        
      } catch (error) {
        console.log(error.response.data);
        setshow(true)
      }
    }
  }
  
  
    const Loading=async()=>{
        let api = `${BASE_URL}/BankData/ministatement`;
      try {
        let response =await axios.post(api,{userid:localStorage.getItem("useid")})
        // console.log(response.data);
        setdata(response.data);
      } catch (error) {
        console.log("error");
      }
    }
    let answer=0;
  
  
  
    useEffect(()=>{
      Loading()
    },[])
  
  return (
   
    <>
      <div className='mini_statement'>
      <div className="mini_sort">
        <div className="mini_first_sort">
          <p>Enter the start Date </p>
          <input type="date" name='startdate' value={startdate} onChange={(e)=>{setstartdate(e.target.value)}} />
        </div>
        <div className="mini_Second_sort">
          <p>Enter the last Date</p>
          <input type="date"  name='enddate' value={endDate} onChange={(e)=>{setEndDate(e.target.value)}}/>
        </div>
        <button onClick={Searchbar}>Search </button>
      </div>
      <div className="account_statement_detail">
       {
        (show)?(<p id='notAdata'>not a Data...!!!</p>):
        // this is show your statment inn the filter and also show top 8 statment
      (show_statment)?(<table id="customers">
        <thead>
          <tr>
            <th>Date</th>
            <th>Transactions</th>
            <th>Credit</th>
            <th>Dedit</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {
            filterdata.map((e,index)=>{
              const dateString = e.date;
                const date = new Date(dateString);

                const formattedDate = date.toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short", 
                  year: "numeric",
                });
                if (e.status === "credited") {
                  answer += e.amount; // Add deposit
                  // console.log(answer)
              } else if (e.status === "debit") {
                answer -= e.amount; // Add deposit
                // console.log(answer)
              }
              return(
              <tr key={index}>
                <td>{formattedDate}</td>
                <td>UPI</td>
                {
                  (e.status=="credited")?<td style={{color:"green", fontWeight:"490"}}>{e.amount}</td>:<td>___</td>
                }
                {
                  (e.status=="debit")?<td style={{color:"red", fontWeight:"490"}}>{e.amount}</td>:<td>___</td>
                }
                <td>{answer}</td>
              </tr>
            )})
          }

        </tbody>
      </table>):(<table id="customers">
        <thead>
          <tr>
            <th>Date</th>
            <th>Transactions</th>
            <th>Credit</th>
            <th>Dedit</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((e,index)=>{
              const dateString = e.date;
                const date = new Date(dateString);

                const formattedDate = date.toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short", 
                  year: "numeric",
                });
              return(
              <tr key={index}>
                <td>{formattedDate}</td>
                <td>UPI</td>
                {
                  (e.status=="credited")?<td style={{color:"green", fontWeight:"490"}}>{e.amount}</td>:<td>___</td>
                }
                {
                  (e.status=="debit")?<td style={{color:"red", fontWeight:"490"}}>{e.amount}</td>:<td>___</td>
                }
                
              </tr>
            )})
          }

        </tbody>
      </table>)
       }
      </div>
    </div>
<ToastContainer/>
    </>
  )
}

export default MIniStatement