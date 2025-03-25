import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
import BASE_URL from '../Config/config';

function SubmitCash() {
  const[amount  ,setAmount] = useState("")
  const customerid = localStorage.getItem("useid")

  const handleSubmit = async(e)=>{
    e.preventDefault()
    let api = `${BASE_URL}/BankData/transaction`
    try {
      const res =await axios.post(api , {amount : amount , status : "credited",customerid : customerid })
      console.log(res.data)
      alert("Amount  successfully add your account")
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
            <h1>Deposit Amount</h1>
          </div>
          <Form>
            <Form.Group controlId="amount">
              <Form.Label>Enter Amount</Form.Label>
              <Form.Control
                type="number"
                name="amount"
                value={amount}
                placeholder="Enter case ammount"
                onChange={(e)=>setAmount(e.target.value)}              />
            </Form.Group>
            <Button variant="success" type="text" className="w-100 mt-3" onClick={handleSubmit}>
              Deposit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default SubmitCash