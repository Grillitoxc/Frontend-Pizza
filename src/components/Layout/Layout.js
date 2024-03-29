import React from "react";

import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Routers from "../../routes/Routers";

import Carts from "../Carts.jsx";
import { useSelector } from "react-redux";

const Layout = () => {
  const showCart = useSelector((state) => state.cartUi.cartIsVisible);

  return (
    <div>
      <Header />
      {showCart && <Carts />}
      <div>
        <Routers />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
