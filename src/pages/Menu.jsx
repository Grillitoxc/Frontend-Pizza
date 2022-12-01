import React from "react";

import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col } from "react-bootstrap";

import "../styles/menu.css";

import PizzaIcon from "../assets/images/pizza_icon.svg";
import BebestiblesIcon from "../assets/images/bebestibles_icon.svg";
import SalsasIcon from "../assets/images/salsas_icon.svg";

import pizzas from "../assets/fake-data/pizzas.js";
import PizzaCard from "../components/PizzaCard.jsx";

const Home = () => {
  return (
    <Helmet title=" - Menú">
      {/* ======= menu ======= */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Pizzas</h2>
            </Col>
            <Col lg="12">
              <div className="category d-flex justify-content-center align-items-center gap-5">
                <button className="all__btn BtnActive">Todo</button>
                <button className="d-flex align-items-center gap-2">
                  <img src={PizzaIcon} alt="" />
                  Pizzas
                </button>
                <button className="d-flex align-items-center">
                  <img src={BebestiblesIcon} alt="" />
                  Bebestibles
                </button>
                <button className="d-flex align-items-center gap-2">
                  <img src={SalsasIcon} alt="" />
                  Salsas
                </button>
              </div>
            </Col>

            {pizzas.map((item) => (
              <Col lg="3" md="4" key={item.id} className='mt-3'>
                <PizzaCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
