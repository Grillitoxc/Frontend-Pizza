import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import logo from "../../assets/images/logo8.png";

const Footer = () => {
  return (
    <Container>
      <Row>
        <Col lg="3" md="4" sm="6">
        <div className="logo footer__logo text-start">
            <img src={logo} alt="logo" />
            <h5>Delicious Pizza</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, libero dignissimos. Consequuntur, soluta autem. Fugit fugiat velit facere iure reiciendis quae natus, porro culpa cumque. Autem tempora quidem tenetur enim.</p>
          </div>
        </Col>

        <Col lg="3" md="4" sm="6">
          <h4>Horario de servicio</h4>
          <ListGroup>
            <ListGroupItem className="border-0">
              <span>Lunes a Viernes</span>
              <p>8:00am - 00:00am</p>
            </ListGroupItem>

            <ListGroupItem className="border-0">
              <span>Sábados, Domingos y festivos</span>
              <p>10:00am - 18:00pm</p>
            </ListGroupItem>
          </ListGroup>
          
        </Col>

        <Col lg="3" md="4" sm="6"></Col>

        <Col lg="3" md="4" sm="6"></Col>
      </Row>

    </Container>
  );
};

export default Footer;