import React from "react";
import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Product from "./pages/products/Product";
import Footer from "./components/footer/Footer";
import ProductDetails from "./pages/products/ProductDetails";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Cart from "./pages/cart/Cart";

function App() {
  return (
    <div className="relative">
      <div className="pb-45.5">
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="product/:id" element={<ProductDetails/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
