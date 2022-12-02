import React, { useState, useEffect } from "react";

import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col } from "react-bootstrap";

import "../styles/menu.css";

import PizzaIcon from "../assets/images/pizza_icon.svg";
import BebestiblesIcon from "../assets/images/bebestibles_icon.svg";
import SalsasIcon from "../assets/images/salsas_icon.svg";

import products from "../assets/fake-data/products.js";
import PizzaCard from "../components/PizzaCard.jsx";

const Menu = () => {
  const [category, setCategory] = useState("all");
  const [allProducts, setAllProducts] = useState(products);

  useEffect(() => {
    if (category === "all") {
      setAllProducts(products);
    }
    if (category === "pizza") {
      const filteredProducts = products.filter(
        (item) => item.category === "pizzas"
      );
      setAllProducts(filteredProducts);
    }
    if (category === "bebestible") {
      const filteredProducts = products.filter(
        (item) => item.category === "bebestibles"
      );
      setAllProducts(filteredProducts);
    }
    if (category === "salsa") {
      const filteredProducts = products.filter(
        (item) => item.category === "salsas"
      );
      setAllProducts(filteredProducts);
    }
  }, [category]);

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
              <div className="category d-flex justify-content-center align-items-center gap-5 mb-4">
                <button
                  className={`d-flex align-items-center gap-2 
                  ${category === "pizza" ? "BtnActive" : ""} `}
                  onClick={() => setCategory("pizza")}
                >
                  <img src={PizzaIcon} alt="" />
                  Pizzas
                </button>
                <button
                  className={`d-flex align-items-center gap-2
                  ${category === "bebestible" ? "BtnActive" : ""} `}
                  onClick={() => setCategory("bebestible")}
                >
                  <img src={BebestiblesIcon} alt="" />
                  Bebestibles
                </button>
                <button
                  className={`d-flex align-items-center gap-2 
                  ${category === "salsa" ? "BtnActive" : ""} `}
                  onClick={() => setCategory("salsa")}
                >
                  <img src={SalsasIcon} alt="" />
                  Salsas
                </button>
              </div>
            </Col>

            {allProducts.map((item) => (
              <Col lg="3" md="4" key={item.id} className="mb-4">
                <PizzaCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Menu;
