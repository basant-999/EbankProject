import React, { useEffect, useState } from 'react'
import BASE_URL from "../Config/config"
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Card, Button, Alert } from 'react-bootstrap'


const BalaceInquery = () => {
    const [balance, setBalance] = useState([])

    const loadData = async () => {
        const api = `${BASE_URL}/BankData/balance/?userid=${localStorage.getItem("useid")}`
        const res = await axios.get(api)
        console.log(res.data)
        setBalance(res.data)
      }
    
      useEffect(() => {
        loadData()
      }, [])

      let creditAmount = 0
      let debitAmount = 0
      let netbalance = 0

      balance.map((key) => {
        if (key.status === "credited") {
          creditAmount += key.amount
        }
        if (key.status === "debit") {
          debitAmount += key.amount
        }
      })
      netbalance = creditAmount - debitAmount
  return (
    <Container className="mt-5">
    <Row className="justify-content-center">
      <Col md={8} lg={6}>
        <Card className="shadow-lg border-0">
          <Card.Header className="bg-secondary text-white text-center p-3">
            <h3>Balance Inquiry</h3>
          </Card.Header>
          <Card.Body>
              <>
                <Row className="mb-3">
                  <Col xs={6}>
                    <div><strong>Credit Amount:</strong> {creditAmount}</div>
                  </Col>
                  <Col xs={6}>
                    <div><strong>Debit Amount:</strong> {debitAmount}</div>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col xs={12}>
                    <div><strong>Net Balance:</strong> {netbalance}</div>
                  </Col>
                </Row>
                <Button variant="dark" className="w-100" onClick={loadData}>
                  Ammount 
                
                </Button>
              </>
           
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
  )
}

export default BalaceInquery