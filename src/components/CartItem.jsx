import React from "react";

import { ListGroupItem } from "reactstrap";
import "../styles/cart_item.css";

const cartItem = ({item}) => {
  const { id, name, prince, quantity, image, totalPrice } = item;

  return (
    <ListGroupItem className="border-0 cart__item">
      <div className="cart__item d-flex gap-2">
        <img src={image} alt="product-img" />

        <div className="cart__product w-100 d-flex align-items-center gap-4 justify-content-between">
          <div>
            <h6 className="cart__product__title">{name}</h6>
            <p className="cart__product__price d-flex align-items-center gap-5">
              {quantity}x <span>${totalPrice}</span>
            </p>
            <div className="d-flex align-items-center justify-content-between increase__decrease__btn">
              <span className="increase__btn">
                <i class="ri-add-line"></i>
              </span>
              <span className="quantity">{quantity}</span>
              <span className="decrease__btn">
                <i class="ri-subtract-line"></i>
              </span>
            </div>
          </div>

          <span className="delete__btn">
            <i class="ri-close-line"></i>
          </span>
        </div>
      </div>
    </ListGroupItem>
  );
};

export default cartItem;
