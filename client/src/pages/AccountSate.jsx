import React, { useEffect, useState } from 'react'
import BASE_URL from '../Config/config'
import axios from 'axios'
import { toast,ToastContainer } from 'react-toastify'
import "../css/accountState.css"

const AccountSate = () => {
  const[mydata,Setmydata] = useState([])

  const load=async()=>{
    let api = `${BASE_URL}/BankData/accountstatement`;
    try {
      let response = await axios.post(api,{"userid":localStorage.getItem("useid")})
      console.log(response.data)
      Setmydata(response.data)

    } catch (error) {
      console.log(error)
      toast.error(error.response.data.msg)
    }
     
  }
  useEffect(()=>{
    load()
  },[])

  let answer = 0
  return (
   <>
   
   <div className='account_statement'>
      <div className="account_statement_section">
        <div className="account_statement_detail">
          <table id="customers">
            <thead>
              <tr>
                <th>Date</th>
                {/* <th>Transactions</th> */}
                <th>Credit</th>
                <th>Debit</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>
              {
            

                mydata.map((e,index)=>{

                  const dateString = e.date;
                  const date = new Date(dateString);

                  const formattedDate = date.toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short", // "Mar"
                    year: "numeric",
                  });
                  if (e.status === "credited") {
                    answer += e.amount; // Add deposit
                    // console.log(answer)
                } else if (e.status === "debit") {
                  answer -= e.amount; // Add deposit
                  // console.log(answer)
                }return(
                  
                  <tr key={index}>
                    <td>{formattedDate}</td>
                    {/* <td>{e.amountDetail}</td> */}
                    {
                      (e.status=="credited")?<td style={{color:"green",fontWeight:"600"}}>{e.amount}</td>:<td>----</td>
                    }
                    {
                      (e.status=="debit")?<td style={{color:"red", fontWeight:"600"}}>{e.amount}</td>:<td>----</td>
                    }
                    <td>{ answer}</td>
                  </tr>
                )})
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <ToastContainer/>
   </>
  )
}

export default AccountSate