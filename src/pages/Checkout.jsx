import React, { useState, useEffect, useRef } from "react";
import { Col, Container, Row } from "reactstrap";
import CommonSection from "../components/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { useSelector } from "react-redux";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import Swal from "sweetalert2";
import "../styles/checkout.css";
import { Link } from "react-router-dom";

function formAlert() {
  let timerInterval;
  Swal.fire({
    icon: "success",
    title: "¡Compra finalizada!",
    timer: 1200,
    confirmButtonColor: "#15aa49",
    timerProgressBar: true,
    didOpen: () => {
      const b = Swal.getHtmlContainer().querySelector("b");
      timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft();
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  }).then((result) => {
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log("I was closed by the timer");
    }
  });
}

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

  const payRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 250 ||
        document.documentElement.scrollTop > 250
      ) {
        payRef.current.classList.add("sticky__bill");
      } else {
        payRef.current.classList.remove("sticky__bill");
      }
    });
    return () => window.removeEventListener("scroll", null);
  }, []);

  return (
    <Helmet title=" - Pago">
      <CommonSection title="Finalizando pedido" />
      <section>
        <Container>
          <Row>
            <Col lg="8" md="6">
              <h6 className="title">Datos de envío</h6>
              <form className="checkout__form" onSubmit={formAlert}>
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
                <h6 className="title">Tipo de envío</h6>
                <div className="delivery">
                  <ToggleButtonGroup
                    type="radio"
                    name="delivery__options"
                    defaultValue="0"
                  >
                    <ToggleButton
                      id="tbg-radio-1"
                      value="0"
                      onChange={handleShippingCost}
                      variant="danger"
                    >
                      Retiro en tienda
                    </ToggleButton>
                    <ToggleButton
                      id="tbg-radio-2"
                      value="3000"
                      onChange={handleShippingCost}
                      variant="danger"
                    >
                      Envío a domicilio
                    </ToggleButton>
                  </ToggleButtonGroup>
                </div>

                <h6 className="title">Propina</h6>
                <div className="tip">
                  <ToggleButtonGroup
                    type="radio"
                    name="tip__options"
                    defaultValue="0"
                  >
                    <ToggleButton
                      id="tbg-radio-3"
                      value="0"
                      onChange={handleTipCost}
                      variant="danger"
                    >
                      No incluir propina
                    </ToggleButton>
                    <ToggleButton
                      id="tbg-radio-4"
                      value="0.05"
                      onChange={handleTipCost}
                      variant="danger"
                    >
                      5% de propina
                    </ToggleButton>
                    <ToggleButton
                      id="tbg-radio-5"
                      value="0.1"
                      onChange={handleTipCost}
                      variant="danger"
                    >
                      10% de propina
                    </ToggleButton>
                  </ToggleButtonGroup>
                </div>

                <h6 className="title">Método de pago</h6>
                <div className="payment">
                  <ToggleButtonGroup
                    type="radio"
                    name="payment__options"
                    defaultValue="0"
                  >
                    <ToggleButton id="tbg-radio-6" value="0" variant="danger">
                      Webpay
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-7" value="1" variant="danger">
                      Efectivo
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-8" value="2" variant="danger">
                      Tarjeta (débito o crédito)
                    </ToggleButton>
                  </ToggleButtonGroup>
                </div>

                <h6 className="title">Tipo de recibo</h6>
                <div className="receive">
                  <ToggleButtonGroup
                    type="radio"
                    name="receive__options"
                    defaultValue="0"
                  >
                    <ToggleButton id="tbg-radio-9" value="0" variant="danger">
                      Boleta
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-10" value="1" variant="danger">
                      Factura
                    </ToggleButton>
                  </ToggleButtonGroup>
                </div>

                <button type="submit" className="pay">
                  Finalizar pedido
                </button>
              </form>
            </Col>

            <Col lg="4" md="6">
              <div className="checkout__bill" ref={payRef}>
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
