import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Menu from "../pages/Menu";
import CustomPizza from "../pages/CustomPizza";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Contact from "../pages/Contact";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/menu"} />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/custom-pizza" element={<CustomPizza />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Routers;
