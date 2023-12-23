import React, { createContext, useState } from "react";

import "./index.css";
import Navbar from "./Navbar";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import ProductCategory from "../Desktop View/ProductCategory";
import Fruits from "../Desktop View/Fruits";
import Chocolates from "../Desktop View/Chocolates";
import Spices from "../Desktop View/Spices";
import Coffee from "../Desktop View/Coffee";
import NaturalOils from "../Desktop View/NaturalOils";
import Cart from "./Cart";

export const addCartContext = createContext();
function DesktopApp() {
  const [cartItem, setCartItem] = useState([]);

  return (
    <div>
      <addCartContext.Provider value={[cartItem, setCartItem]}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<ProductCategory />} />
          <Route path="/categories/fruits" element={<Fruits />} />
          <Route path="/categories/chocolates" element={<Chocolates />} />
          <Route path="/categories/spices" element={<Spices />} />
          <Route path="/categories/coffee" element={<Coffee />} />
          <Route path="/categories/naturalolis" element={<NaturalOils />} />
          <Route path="/myCart" element={<Cart />} />
        </Routes>
      </addCartContext.Provider>
    </div>
  );
}

export default DesktopApp;
