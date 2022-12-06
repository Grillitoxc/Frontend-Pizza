import React from "react";

import CommonSection from "../components/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import "../styles/cart.css";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import { cartActions } from "../store/shopping-cart/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <Helmet title=" - Pedidos">
      <CommonSection title="Pedidos" />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              {cartItems.length === 0 ? (
                <h5 className="empty__cart text-center mt-5 mb-5">
                  Aún no hay pedidos añadidos, vuelve a la pestaña de{" "}
                  <b>Menú </b>
                  para agregar tus pizzas o ármalas con tus ingredientes
                  favoritos en el apartado <b>Arma tu pizza</b>.{" "}
                </h5>
              ) : (
                <div className="filter ">
                  <table className="table mt-4">
                    <thead>
                      <tr>
                        <th>Imagen</th>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Eliminar</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item) => (
                        <Tr item={item} key={item.id} />
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              <div className="subtotal my-4">
                <h6>
                  Subtotal: $
                  <span className="cart__subtotal">{totalAmount}</span>
                </h6>
                <p>Propinas y envío se calculan al momento de pagar.</p>
                <div className="cart__page-btn">
                  <button className="addTOCart__btn1 me-3">
                    <Link to="/menu">Seguir comprando </Link>
                  </button>
                  <button className="addTOCart__btn2">
                    <Link to="/checkout">Ir a pagar</Link>
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const Tr = (props) => {
  const { id, image, name, price, quantity } = props.item;
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };
  return (
    <tr>
      <td className="text-center cart__img-box">
        <img src={image} alt="" />
      </td>
      <td className="text-center">{name}</td>
      <td className="text-center">${price}</td>
      <td className="text-center">{quantity}</td>
      <td className="text-center cart__item-del">
        <i className="ri-delete-bin-line" onClick={deleteItem}></i>
      </td>
    </tr>
  );
};

export default Cart;
