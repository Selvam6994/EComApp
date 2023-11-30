import React, { createContext, useState } from "react";

import "./index.css";
import Navbar from "./Navbar";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import ProductCategory from "./ProductCategory";
import Fruits from "../Product Components/Fruits";
import Chocolates from "../Product Components/Chocolates";
import Spices from "../Product Components/Spices";
import Coffee from "../Product Components/Coffee";
import NaturalOils from "../Product Components/NaturalOils";

export const addCartContext = createContext()
function DesktopApp() {
  const [cartCount,setCartCount] = useState(0)
  return (
    <div>
      <addCartContext.Provider value={[cartCount,setCartCount]}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<ProductCategory />} />
        <Route path="/categories/fruits" element={<Fruits />} />
        <Route path="/categories/chocolates" element={<Chocolates />} />
        <Route path="/categories/spices" element={<Spices />} />
        <Route path="/categories/coffee" element={<Coffee />} />
        <Route path="/categories/naturalolis" element={<NaturalOils />} />
      </Routes>
      </addCartContext.Provider>
    </div>
  );
}

export default DesktopApp;
