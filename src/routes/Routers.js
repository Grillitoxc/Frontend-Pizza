import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Menu from "../pages/Menu";
import AllPizzas from "../pages/AllPizzas";
import PizzaDetails from "../pages/PizzaDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Contact from "../pages/Contact";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/menu"} />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/pizzas" element={<AllPizzas />} />
      <Route path="/pizzas/:id" element={<PizzaDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Routers;
