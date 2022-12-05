import React from "react";

import { ListGroup } from "reactstrap";
import { Link } from "react-router-dom";
import CartItem from "./CartItem.jsx";
import { useDispatch, useSelector } from "react-redux";
import { cartUiActions } from "../store/shopping-cart/cartUiSlice";

import "../styles/shopping_cart.css";

const Carts = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector(state => state.cart.cartItems);

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };

  return (
    <div className="cart__container">
      <ListGroup className="cart">
        <div className="cart__close">
          <span onClick={toggleCart}>
            <i className="ri-close-fill"></i>
          </span>
        </div>

        <div className="cart__item__list">
          {cartProducts.length === 0 ? (
            <h6 className="text-center mt-5">
              No hay productos añadidos al carrito aún.
            </h6>
          ) : (
            cartProducts.map((item, index) => (
              <CartItem key={index} item={item} />
            ))
          )}
          <CartItem />
        </div>

        <div className="cart__bottom d-flex justify-content-between align-items-center">
          <h6>
            Subtotal: <span>$123</span>
          </h6>
          <button>
            <Link to="/checkout">Ir a pagar</Link>
          </button>
        </div>
      </ListGroup>
    </div>
  );
};

export default Carts;
