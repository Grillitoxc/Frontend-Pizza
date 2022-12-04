import React from "react";

import "../styles/pizza_card.css";

import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { cartActions } from "../store/shopping-cart/cartSlice.js";

const PizzaCard = (props) => {
  const { id, name, image, price } = props.item;
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        name,
        image,
        price,
      })
    );
  };

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
          <button className="pizza__card__btn" onClick={addToCart}>Añadir al carrito</button>
        </div>
      </div>
    </div>
  );
};

export default PizzaCard;
