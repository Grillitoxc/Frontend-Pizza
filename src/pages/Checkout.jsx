import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import CommonSection from "../components/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { useSelector } from "react-redux";

import "../styles/checkout.css";

const Checkout = () => {
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const [shippingCost, setShippingCost] = useState(0);
  const [tipCost, setTipCost] = useState(0);
  const tipAmount = Number(cartTotalAmount * tipCost);
  const totalAmount = cartTotalAmount + Number(shippingCost) + tipAmount;

  const handleShippingCost = (e) => {
    console.log(e.target.value);
    setShippingCost(e.target.value);
  };

  const handleTipCost = (e) => {
    console.log(e.target.value);
    setTipCost(e.target.value);
  };

  return (
    <Helmet title=" - Pago">
      <CommonSection title="Finalizando pedido" />
      <section>
        <Container>
          <Row>
            <Col lg="8" md="6">
              <h6 className="shipping__adress">Datos de envío</h6>
              <form className="checkout__form">
                <div className="page">
                  <div className="field field_v2">
                    <label htmlFor="first-name" className="ha-screen-reader">
                      Nombre
                    </label>
                    <input
                      id="first-name"
                      className="field__input"
                      placeholder="ej. Juan"
                      type="text"
                      required
                    ></input>
                    <span className="field__label-wrap" aria-hidden="true">
                      <span className="field__label">Nombre</span>
                    </span>
                  </div>

                  <div className="field field_v2">
                    <label htmlFor="first-name" className="ha-screen-reader">
                      Apellido
                    </label>
                    <input
                      id="last-name"
                      className="field__input"
                      placeholder="ej. Torres"
                      type="text"
                      required
                    ></input>
                    <span className="field__label-wrap" aria-hidden="true">
                      <span className="field__label">Apellido</span>
                    </span>
                  </div>

                  <div className="field field_v2">
                    <label htmlFor="first-name" className="ha-screen-reader">
                      Email
                    </label>
                    <input
                      id="email"
                      className="field__input"
                      placeholder="ej. juantorres@gmail.com"
                      type="email"
                      required
                    ></input>
                    <span className="field__label-wrap" aria-hidden="true">
                      <span className="field__label">Email</span>
                    </span>
                  </div>

                  <div className="field field_v2">
                    <label htmlFor="first-number" className="ha-screen-reader">
                      Número de contacto
                    </label>
                    <input
                      id="number"
                      className="field__input"
                      placeholder="ej. +569 1234 5678"
                      type="number"
                      required
                    ></input>
                    <span className="field__label-wrap" aria-hidden="true">
                      <span className="field__label">Número de contacto</span>
                    </span>
                  </div>

                  <div className="field field_v2">
                    <label htmlFor="region" className="ha-screen-reader">
                      Región
                    </label>
                    <input
                      id="region"
                      className="field__input"
                      placeholder="ej. Región Metropolitana"
                      type="text"
                      required
                    ></input>
                    <span className="field__label-wrap" aria-hidden="true">
                      <span className="field__label">Región</span>
                    </span>
                  </div>

                  <div className="field field_v2">
                    <label htmlFor="ciudad" className="ha-screen-reader">
                      Ciudad
                    </label>
                    <input
                      id="ciudad"
                      className="field__input"
                      placeholder="ej. Santiago"
                      type="text"
                      required
                    ></input>
                    <span className="field__label-wrap" aria-hidden="true">
                      <span className="field__label">Ciudad</span>
                    </span>
                  </div>

                  <div className="field field_v2">
                    <label htmlFor="provincia" className="ha-screen-reader">
                      Provincia
                    </label>
                    <input
                      id="provincia"
                      className="field__input"
                      placeholder="ej. Maipo"
                      type="text"
                      required
                    ></input>
                    <span className="field__label-wrap" aria-hidden="true">
                      <span className="field__label">Provincia</span>
                    </span>
                  </div>
                </div>

                {/* ========= checks ========= */}
                <h6 className="shipping__adress">Tipo de envío</h6>
                <div className="delivery__options">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      value="0"
                      onClick={handleShippingCost}
                      required
                    ></input>
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault1"
                    >
                      Retiro en tienda
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      value="3000"
                      onClick={handleShippingCost}
                      required
                    ></input>
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault2"
                    >
                      Envío a domicilio
                    </label>
                  </div>
                </div>

                <h6 className="shipping__adress">Propina</h6>
                <div className="tip__options">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault3"
                      value="0"
                      onClick={handleTipCost}
                      required
                    ></input>
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault3"
                    >
                      No incluir propina
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault4"
                      value="0.05"
                      onClick={handleTipCost}
                      required
                    ></input>
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault4"
                    >
                      5% de propina
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault5"
                      value="0.1"
                      onClick={handleTipCost}
                      required
                    ></input>
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault5"
                    >
                      10% de propina
                    </label>
                  </div>
                </div>

                <h6 className="Método de pago">Propina</h6>

                <button type="submit" className="addTOCart__btn2">
                  Finalizar pedido
                </button>
              </form>
            </Col>

            <Col lg="4" md="6">
              <div className="checkout__bill">
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Subtotal: <span>${cartTotalAmount}</span>
                </h6>
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Propina: <span>${tipAmount}</span>
                </h6>
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Costo de envío: <span>${shippingCost}</span>
                </h6>
                <div className="checkout__total">
                  <h5 className="d-flex align-items-center justify-content-between">
                    Total a pagar: <span>${totalAmount}</span>
                  </h5>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
