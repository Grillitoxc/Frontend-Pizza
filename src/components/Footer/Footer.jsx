import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.png";
import "../../styles/footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <Container>
          <Row>
            <Col lg="3" md="4" sm="6">
              <div className="footer__logo text-start">
                <img src={logo} alt="logo" />
              </div>
            </Col>

            <Col lg="3" md="4" sm="6">
              <h5 className="footer__title">Pizzitaxc</h5>
              <ListGroup className="list__group">
                <ListGroupItem className="list__item border-0 ps-0">
                  <a href="/">Sobre nosotros</a>
                </ListGroupItem>
                <ListGroupItem className="list__item border-0 ps-0">
                  <a href="/">Certificado de calidad</a>
                </ListGroupItem>
                <ListGroupItem className="list__item border-0 ps-0">
                  <a href="/">Medidas de seguridad</a>
                </ListGroupItem>
                <ListGroupItem className="list__item border-0 ps-0">
                  <a href="/">Trabaja con nosotros</a>
                </ListGroupItem>
                <ListGroupItem className="list__item border-0 ps-0">
                  <a href="/">Términos y condiciones</a>
                </ListGroupItem>
              </ListGroup>
            </Col>

            <Col lg="3" md="4" sm="6">
              <h5 className="footer__title">Ayuda</h5>
              <ListGroup className="list__group">
                <ListGroupItem className="list__item border-0 ps-0">
                  <a href="/">Contacto</a>
                </ListGroupItem>
                <ListGroupItem className="list__item border-0 ps-0">
                  <a href="/">Preguntas frecuentes</a>
                </ListGroupItem>
                <ListGroupItem className="list__item border-0 ps-0">
                  <a href="/">Tiendas y horarios</a>
                </ListGroupItem>
                <ListGroupItem className="list__item border-0 ps-0">
                  <a href="/">Asistencia virtual</a>
                </ListGroupItem>
              </ListGroup>
            </Col>

            <Col lg="3" md="4" sm="6">
              <h5 className="footer__title">Recibe ofertas</h5>
              <p>
                Se parte de nuestra comunidad y recibe ofertas uniéndote al
                programa de Pizzitaxc
              </p>
              <div className="subscribe">
                <input type="email" placeholder="Email" />
                <span>
                  <i class="ri-mail-line"></i>
                </span>
              </div>

              <h5 className="footer__title mt-3">Redes sociales</h5>
              <div className="social__links d-flex align-items-center gap-5 justify-content-center">
                <span>
                  {" "}
                  <Link to="/">
                    <i className="ri-facebook-line"></i>
                  </Link>{" "}
                </span>
                <span>
                  <Link to="/">
                    <i className="ri-github-line"></i>
                  </Link>
                </span>
                <span>
                  {" "}
                  <Link to="/">
                    <i className="ri-youtube-line"></i>
                  </Link>{" "}
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
      <h6 className="sub__footer">
        Copyright © 2022 Pizzitaxc. Todos los derechos reservados. Diseñado por
        Grillitoxc.
      </h6>
    </div>
  );
};

export default Footer;
