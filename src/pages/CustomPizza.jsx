import React, { useState } from "react";

import CommonSection from "../components/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/shopping-cart/cartSlice.js";

const CustomPizza = () => {
  const [meat, setMeat] = useState("");
  const [meatCost, setMeatCost] = useState(0);
  const [vegetables, setVegetables] = useState("");
  const [vegetablesCost, setVegetablesCost] = useState(0);
  const [cheese, setCheese] = useState("");
  const [cheeseCost, setCheeseCost] = useState(0);
  const [cheeseAmount, setCheeseAmount] = useState("");
  const [cheeseAmountCost, setCheeseAmountCost] = useState(0);
  const [doughType, setDoughType] = useState("");
  const [doughTypeCost, setDoughTypeCost] = useState(0);
  const [size, setSize] = useState("");
  const [sizeCost, setSizeCost] = useState(0);

  const dispatch = useDispatch();

  const handleMeat = (e) => {
    setMeat(e.target.value);
    if (e.target.value === "carne") {
      setMeatCost(1000);
    } else if (e.target.value === "carne mechada") {
      setMeatCost(1200);
    } else if (e.target.value === "pepperoni") {
      setMeatCost(900);
    } else if (e.target.value === "salchicha") {
      setMeatCost(800);
    } else if (e.target.value === "jamón") {
      setMeatCost(800);
    } else if (e.target.value === "pollo") {
      setMeatCost(1000);
    } else if (e.target.value === "tocino") {
      setMeatCost(1500);
    }
  };

  const handleVegetables = (e) => {
    setVegetables(e.target.value);
    if (e.target.value === "aceitunas") {
      setVegetablesCost(1000);
    } else if (e.target.value === "choclo") {
      setVegetablesCost(900);
    } else if (e.target.value === "piña") {
      setVegetablesCost(1500);
    } else if (e.target.value === "cebolla") {
      setVegetablesCost(700);
    } else if (e.target.value === "pimiento") {
      setVegetablesCost(800);
    } else if (e.target.value === "tomate") {
      setVegetablesCost(1000);
    } else if (e.target.value === "champiñones") {
      setVegetablesCost(1200);
    }
  };

  const handleCheese = (e) => {
    setCheese(e.target.value);
    if (e.target.value === "gouda") {
      setCheeseCost(1200);
    } else if (e.target.value === "mozzarella") {
      setCheeseCost(1000);
    }
  };

  const handleCheeseAmount = (e) => {
    setCheeseAmount(e.target.value);
    if (e.target.value === "normal") {
      setCheeseAmountCost(0);
    } else if (e.target.value === "extra") {
      setCheeseAmountCost(500);
    } else if (e.target.value === "doble") {
      setCheeseAmountCost(1000);
    }
  };

  const handleDoughType = (e) => {
    setDoughType(e.target.value);
    if (e.target.value === "normal") {
      setDoughTypeCost(1000);
    } else if (e.target.value === "deñgada") {
      setDoughTypeCost(800);
    }
  };

  const handleSize = (e) => {
    setSize(e.target.value);
    if (e.target.value === "personal") {
      setSizeCost(1000);
    } else if (e.target.value === "mediana") {
      setSizeCost(3000);
    } else if (e.target.value === "familiar") {
      setSizeCost(6000);
    }
  };
    
  return (
    <Helmet title=" - Personaliza tu Pizza">
      <CommonSection title="Personaliza tu Pizza" />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div>
                <h1>Custom Pizza</h1>
                <form className="form">
                  <h6 className="shipping__adress">Carnes</h6>
                  <div className="delivery__options">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        value="0"
                        required
                      ></input>
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault1"
                      >
                        Retiro en tienda
                      </label>
                    </div>
                  </div>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CustomPizza;
