import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
// import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

const About = () => {
  return (
   <>
   <Container>
      <Row>
        <Col xs={6} md={4}>
          <img src="https://media.istockphoto.com/id/2143222197/photo/businesses-use-smartphones-with-online-banking-digital-technology-mobile-banking-for-shopping.jpg?s=1024x1024&w=is&k=20&c=pBMcF44hVSu_nNXgwZnbkcgMNsZWaQZb7jWllve6vUE=" alt="" height="100px"width="100px" />
        </Col>
        <Col xs={6} md={4}>
          <img src="https://media.istockphoto.com/id/2159476849/photo/businessman-holding-online-banking-digital-technology-mobile-banking-shopping-payment-finance.jpg?s=2048x2048&w=is&k=20&c=Rxt8HUQV0ldSsYrjvAc2Hv4ulU_3teSztfV0UnLzI8s=" alt=""height="100px"width="100px"  />
        </Col>
        <Col xs={6} md={4}>
          <img src="https://media.istockphoto.com/id/1540766455/photo/customers-with-phones-wait-in-line-to-see-bank-teller.jpg?s=1024x1024&w=is&k=20&c=MOXkgpi2nT480BbMqWHfd5WC6TRp7yIY6FJ3i1YW-ZA=" alt="" height="100px"width="100px" />
        </Col>    
      </Row>
    </Container>
   </>
  )
}

export default About