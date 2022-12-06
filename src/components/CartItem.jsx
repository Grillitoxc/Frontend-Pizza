import React from "react";

import { ListGroupItem } from "reactstrap";
import { cartActions } from "../store/shopping-cart/cartSlice";
import { useDispatch } from "react-redux";

import "../styles/cart_item.css";

const CartItem = ({ item }) => {
  const { id, name, price, quantity, image, totalPrice } = item;

  const dispatch = useDispatch();

  const incrementItem = () => {
    dispatch(
      cartActions.addItem({
        id,
        name,
        price,
        image,
      })
    );
  };

  const decreaseItem = () => {
    dispatch(cartActions.removeItem(id));
  };

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };

  return (
    <ListGroupItem className="border-0 cart__item">
      <div className="cart__item d-flex gap-2">
        <img src={image} alt="product-img" />

        <div className="cart__product w-100 d-flex align-items-center gap-4 justify-content-between">
          <div>
            <h6 className="cart__product__title">{name}</h6>
            <p className="cart__product__price d-flex align-items-center gap-5 mb-1">
              {quantity}x <span>${totalPrice}</span>
            </p>
            <div className="d-flex align-items-center justify-content-between increase__decrease__btn">
              <span className="increase__btn" onClick={incrementItem}>
                <i class="ri-add-line"></i>
              </span>
              <span className="quantity">{quantity}</span>
              <span className="decrease__btn" onClick={decreaseItem}>
                <i class="ri-subtract-line"></i>
              </span>
            </div>
          </div>

          <span className="delete__btn" onClick={deleteItem}>
            <i class="ri-close-line"></i>
          </span>
        </div>
      </div>
    </ListGroupItem>
  );
};

export default CartItem;