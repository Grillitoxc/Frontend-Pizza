import React from "react";

import "../styles/pizza_card.css";

import { Link } from "react-router-dom";

const PizzaCard = (props) => {
  const { name, image, price } = props.item;

  return (
    <div className="pizza__card">
      <div className="pizza__card__img">
        <img src={image} alt="pizza-img" className="w-50" />
      </div>
      <div className="pizza__card__content">
        <h5>
          <Link>{name}</Link>
        </h5>
        <div className="d-flex justify-content-between align-items-center">
          <span className="pizza__card__price">${price}</span>
          <button className="pizza__card__btn">Añadir al carrito</button>
        </div>
      </div>
    </div>
  );
};

export default PizzaCard;
