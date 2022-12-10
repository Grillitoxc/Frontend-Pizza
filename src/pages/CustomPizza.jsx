import React, { useState, useEffect, useRef } from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import "../styles/custom_pizza.css";
import CustomPizzaImg from "../assets/fake-data/fake-images/custom_pizza.svg";
import Swal from "sweetalert2";

import CommonSection from "../components/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/shopping-cart/cartSlice.js";

function formAlert() {
  let timerInterval;
  Swal.fire({
    icon: "success",
    title: "¡Producto añadido al carrito!",
    timer: 1600,
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

const CustomPizza = () => {
  const [meatCost, setMeatCost] = useState(1000);
  const [vegetablesCost, setVegetablesCost] = useState(1000);
  const [cheeseCost, setCheeseCost] = useState(1200);
  const [cheeseAmountCost, setCheeseAmountCost] = useState(500);
  const [doughTypeCost, setDoughTypeCost] = useState(1000);
  const [sizeCost, setSizeCost] = useState(1000);
  const totalAmount =
    Number(meatCost) +
    Number(vegetablesCost) +
    Number(cheeseCost) +
    Number(cheeseAmountCost) +
    Number(doughTypeCost) +
    Number(sizeCost);

  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: -1,
        name: "Pizza personalizada",
        image: CustomPizzaImg,
        price: totalAmount,
      })
    );
  };

  const [value1, setValue1] = useState([1]);
  const handleMeat = (val) => {
    setValue1(val);
    console.log(val);
    let total = [];
    let totalCost = 0;
    for (let i of val) {
      if (i === 1) total.push("1000");
      else if (i === 2) total.push("1200");
      else if (i === 3) total.push("900");
      else if (i === 4) total.push("800");
      else if (i === 5) total.push("800");
      else if (i === 6) total.push("1000");
      else if (i === 7) total.push("1500");
    }
    for (let j of total) totalCost += parseInt(j);
    setMeatCost(totalCost);
  };

  const [value2, setValue2] = useState([1]);
  const handleVegetables = (val) => {
    setValue2(val);
    console.log(val);
    let total = [];
    let totalCost = 0;
    for (let i of val) {
      if (i === 1) total.push("1000");
      else if (i === 2) total.push("900");
      else if (i === 3) total.push("1500");
      else if (i === 4) total.push("700");
      else if (i === 5) total.push("800");
      else if (i === 6) total.push("1000");
      else if (i === 7) total.push("1200");
    }
    for (let j of total) totalCost += parseInt(j);
    setVegetablesCost(totalCost);
  };

  const handleCheese = (e) => {
    setCheeseCost(e.target.value);
  };

  const handleCheeseAmount = (e) => {
    setCheeseAmountCost(e.target.value);
  };

  const handleDoughType = (e) => {
    setDoughTypeCost(e.target.value);
  };

  const handleSize = (e) => {
    setSizeCost(e.target.value);
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
    <Helmet title=" - Personaliza">
      <CommonSection title="Personaliza tu Pizza" />
      <section>
        <Container>
          <Row>
            <Col lg="8" md="6">
              <div>
                <form className="form">
                  <h6 className="title">Carnes</h6>
                  <div className="meat">
                    <ToggleButtonGroup
                      type="checkbox"
                      value={value1}
                      onChange={handleMeat}
                      name="meat__options"
                      required
                    >
                      <ToggleButton id="tbg-btn-1" value={1} variant="danger">
                        Carne ($1000)
                      </ToggleButton>
                      <ToggleButton id="tbg-btn-2" value={2} variant="danger">
                        Carne Mechada ($1200)
                      </ToggleButton>
                      <ToggleButton id="tbg-btn-3" value={3} variant="danger">
                        Pepperoni ($900)
                      </ToggleButton>
                      <ToggleButton id="tbg-btn-4" value={4} variant="danger">
                        Salchicha ($800)
                      </ToggleButton>
                      <ToggleButton id="tbg-btn-5" value={5} variant="danger">
                        Jamón ($800)
                      </ToggleButton>
                      <ToggleButton id="tbg-btn-6" value={6} variant="danger">
                        Pollo ($1000)
                      </ToggleButton>
                      <ToggleButton id="tbg-btn-7" value={7} variant="danger">
                        Tocino ($1500)
                      </ToggleButton>
                    </ToggleButtonGroup>
                  </div>

                  <h6 className="title">Vegetales</h6>
                  <div className="vegetables">
                    <ToggleButtonGroup
                      type="checkbox"
                      value={value2}
                      onChange={handleVegetables}
                      name="vegetables__options"
                      required
                    >
                      <ToggleButton id="tbg-btn-8" value={1} variant="danger">
                        Aceitunas ($1000)
                      </ToggleButton>
                      <ToggleButton id="tbg-btn-9" value={2} variant="danger">
                        Choclo ($900)
                      </ToggleButton>
                      <ToggleButton id="tbg-btn-10" value={3} variant="danger">
                        Piña ($1500)
                      </ToggleButton>
                      <ToggleButton id="tbg-btn-11" value={4} variant="danger">
                        Cebolla ($700)
                      </ToggleButton>
                      <ToggleButton id="tbg-btn-12" value={5} variant="danger">
                        Pimiento ($800)
                      </ToggleButton>
                      <ToggleButton id="tbg-btn-13" value={6} variant="danger">
                        Tomate ($1000)
                      </ToggleButton>
                      <ToggleButton id="tbg-btn-14" value={7} variant="danger">
                        Champiñones ($1200)
                      </ToggleButton>
                    </ToggleButtonGroup>
                  </div>

                  <h6 className="title">Tipo de queso</h6>
                  <div className="cheese">
                    <ToggleButtonGroup
                      type="radio"
                      name="cheese__options"
                      defaultValue="1200"
                      required
                    >
                      <ToggleButton
                        id="tbg-btn-15"
                        value="1200"
                        variant="danger"
                        onChange={handleCheese}
                      >
                        Gouda ($1200)
                      </ToggleButton>
                      <ToggleButton
                        id="tbg-btn-16"
                        value="1000"
                        variant="danger"
                        onChange={handleCheese}
                      >
                        Mozzarella ($1000)
                      </ToggleButton>
                    </ToggleButtonGroup>
                  </div>

                  <h6 className="title">Cantidad de queso</h6>
                  <div className="cheese__amount">
                    <ToggleButtonGroup
                      type="radio"
                      name="cheese__amount__options"
                      defaultValue="500"
                      required
                    >
                      <ToggleButton
                        id="tbg-btn-17"
                        value="500"
                        variant="danger"
                        onChange={handleCheeseAmount}
                      >
                        Normal ($500)
                      </ToggleButton>
                      <ToggleButton
                        id="tbg-btn-18"
                        value="1000"
                        variant="danger"
                        onChange={handleCheeseAmount}
                      >
                        Doble ($1000)
                      </ToggleButton>
                      <ToggleButton
                        id="tbg-btn-19"
                        value="1500"
                        variant="danger"
                        onChange={handleCheeseAmount}
                      >
                        Extra ($1500)
                      </ToggleButton>
                    </ToggleButtonGroup>
                  </div>

                  <h6 className="title">Tipo de masa</h6>
                  <div className="dough">
                    <ToggleButtonGroup
                      type="radio"
                      defaultValue="1000"
                      name="dough__options"
                      required
                    >
                      <ToggleButton
                        id="tbg-btn-20"
                        value="1000"
                        variant="danger"
                        onChange={handleDoughType}
                      >
                        Normal ($1000)
                      </ToggleButton>
                      <ToggleButton
                        id="tbg-btn-21"
                        value="800"
                        variant="danger"
                        onChange={handleDoughType}
                      >
                        Delgada ($800)
                      </ToggleButton>
                    </ToggleButtonGroup>
                  </div>

                  <h6 className="title">Tamaño</h6>
                  <div className="size">
                    <ToggleButtonGroup
                      type="radio"
                      defaultValue="1000"
                      name="size__options"
                      required
                    >
                      <ToggleButton
                        id="tbg-btn-22"
                        value="1000"
                        variant="danger"
                        onChange={handleSize}
                      >
                        Personal ($1000)
                      </ToggleButton>
                      <ToggleButton
                        id="tbg-btn-23"
                        value="3000"
                        variant="danger"
                        onChange={handleSize}
                      >
                        Mediana ($3000)
                      </ToggleButton>
                      <ToggleButton
                        id="tbg-btn-24"
                        value="6000"
                        variant="danger"
                        onChange={handleSize}
                      >
                        Familiar ($6000)
                      </ToggleButton>
                    </ToggleButtonGroup>
                  </div>
                </form>

                <button
                  type="submit"
                  className="addToCart__Custom"
                  onClick={() => {
                    addToCart();
                    formAlert();
                  }}
                >
                  Añadir al carrito
                </button>
              </div>
            </Col>

            <Col lg="4" md="6">
              <div className="checkout__bill" ref={payRef}>
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Carnes: <span>${meatCost}</span>
                </h6>
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Vegetales: <span>${vegetablesCost}</span>
                </h6>
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Tipo de queso: <span>${cheeseCost}</span>
                </h6>
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Cantida de queso: <span>${cheeseAmountCost}</span>
                </h6>
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Tipo de masa: <span>${doughTypeCost}</span>
                </h6>
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Tamaño: <span>${sizeCost}</span>
                </h6>
                <div className="checkout__total">
                  <h5 className="d-flex align-items-center justify-content-between">
                    Costo de la pizza: <span>${totalAmount}</span>
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

export default CustomPizza;
