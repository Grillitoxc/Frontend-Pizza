import React from "react";
import { Col, Container, Row } from "reactstrap";
import CommonSection from "../components/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { useSelector } from "react-redux";

import "../styles/checkout.css";

const Checkout = () => {
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const shippingCost = 30;
  const totalAmount = cartTotalAmount + Number(shippingCost);

  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="8" md="6">
              <h6 className="mb-4">Shipping Address</h6>
              <form className="checkout__form">
                <div class="page">
                  <div class="field field_v2">
                    <label for="first-name" class="ha-screen-reader">
                      Nombre
                    </label>
                    <input
                      id="first-name"
                      class="field__input"
                      placeholder="ej. Juan"
                      type="text"
                      required
                    ></input>
                    <span class="field__label-wrap" aria-hidden="true">
                      <span class="field__label">Nombre</span>
                    </span>
                  </div>

                  <div class="field field_v2">
                    <label for="first-name" class="ha-screen-reader">
                      Apellido
                    </label>
                    <input
                      id="last-name"
                      class="field__input"
                      placeholder="ej. Torres"
                      type="text"
                      required
                    ></input>
                    <span class="field__label-wrap" aria-hidden="true">
                      <span class="field__label">Apellido</span>
                    </span>
                  </div>

                  <div class="field field_v2">
                    <label for="first-name" class="ha-screen-reader">
                      Email
                    </label>
                    <input
                      id="email"
                      class="field__input"
                      placeholder="ej. juantorres@gmail.com"
                      type="email"
                      required
                    ></input>
                    <span class="field__label-wrap" aria-hidden="true">
                      <span class="field__label">Email</span>
                    </span>
                  </div>

                  <div class="field field_v2">
                    <label for="first-number" class="ha-screen-reader">
                      Número de contacto
                    </label>
                    <input
                      id="number"
                      class="field__input"
                      placeholder="ej. +569 1234 5678"
                      type="number"
                      required
                    ></input>
                    <span class="field__label-wrap" aria-hidden="true">
                      <span class="field__label">Número de contacto</span>
                    </span>
                  </div>

                  <div class="field field_v2">
                    <label for="region" class="ha-screen-reader">
                      Región
                    </label>
                    <input
                      id="region"
                      class="field__input"
                      placeholder="ej. Región Metropolitana"
                      type="text"
                      required
                    ></input>
                    <span class="field__label-wrap" aria-hidden="true">
                      <span class="field__label">Región</span>
                    </span>
                  </div>

                  <div class="field field_v2">
                    <label for="ciudad" class="ha-screen-reader">
                      Ciudad
                    </label>
                    <input
                      id="ciudad"
                      class="field__input"
                      placeholder="ej. Santiago"
                      type="text"
                      required
                    ></input>
                    <span class="field__label-wrap" aria-hidden="true">
                      <span class="field__label">Ciudad</span>
                    </span>
                  </div>

                  <div class="field field_v2">
                    <label for="provincia" class="ha-screen-reader">
                      Provincia
                    </label>
                    <input
                      id="provincia"
                      class="field__input"
                      placeholder="ej. Maipo"
                      type="text"
                      required
                    ></input>
                    <span class="field__label-wrap" aria-hidden="true">
                      <span class="field__label">Provincia</span>
                    </span>
                  </div>
                </div>
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
                  Shipping: <span>${shippingCost}</span>
                </h6>
                <div className="checkout__total">
                  <h5 className="d-flex align-items-center justify-content-between">
                    Total: <span>${totalAmount}</span>
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
