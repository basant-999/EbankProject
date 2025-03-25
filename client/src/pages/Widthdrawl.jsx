import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import BASE_URL from '../Config/config';
import { useState } from 'react';

const Widthdrawl = () => {
      const[amount  ,setAmount] = useState("")
      const customerid = localStorage.getItem("useid")
    
      const handleSubmit = async(e)=>{
        e.preventDefault()
        let api = `${BASE_URL}/BankData/transaction`
        try {
          const res =await axios.post(api , {amount : amount , status : "debit",customerid : customerid })
          console.log(res.data)
          alert("Amount  successfully widthdraw")
        } catch (error) {
          console.log(error)
        }
    }
  return (
    <>
   <Container className="mt-5">
   <Row className="justify-content-center">
     <Col xs={12} sm={8} md={6} lg={4}>
       <div className="text-center mb-4">
         <h1>WidthDraw Amount</h1>
       </div>
       <Form>
         <Form.Group controlId="amount">
           <Form.Label>Enter WidthDraw Amount</Form.Label>
           <Form.Control
             type="number"
             name="amount"
             value={amount}
             placeholder="Enter case ammount"
             onChange={(e)=>setAmount(e.target.value)}              />
         </Form.Group>
         <Button variant="danger" type="text" className="w-100 mt-3" onClick={handleSubmit}>
           Widthdwal
         </Button>
       </Form>
     </Col>
   </Row>
 </Container>
 </>
  )
}

export default Widthdrawl