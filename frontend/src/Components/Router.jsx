import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import Cart from "./Cart";
import Checkout from "./Checkout";
import Home from "./Home";
import Login from "./Login";
import Navbar from "./Navbar";
import Payment from "./Payment";
import ProductComponent from "./ProductComponent";
import ProductDetail from "./ProductDetail";
import Register from "./Register";

function Router() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}>
          Home
        </Route>
        <Route path='/products' element={<ProductComponent />}></Route>
        <Route path={`/products/:id`} element={<ProductDetail />}></Route>
        <Route path={`/cart`} element={<Cart />}></Route>
        <Route path={`/login`} element={<Register />}></Route>
        <Route path={`/checkout`} element={<Checkout />}></Route>
        <Route path={`/payment`} element={<Payment />}></Route>
      </Routes>
    </div>
  );
}

export default Router;
