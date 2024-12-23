import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Cart from "./Components/Cart";
import datas from "./Data/Data";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [cartList, setCartList] = useState([]);

  const updateCart = (cartItem) => {
    const tempCartList = cartList;

    if (!cartItem.quantity) {
      cartItem.quantity = 1;
      tempCartList.push(cartItem);
    } else {
      cartItem.quantity++;
    }

    setCartList(tempCartList);
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<Home datas={datas} updateCart={updateCart} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart datas={cartList} />} />
      </Routes>
    </>
  );
}

export default App;
