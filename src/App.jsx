import React from "react";
import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Product from "./pages/products/Product";
import Footer from "./components/footer/Footer";
import ProductDetails from "./pages/products/ProductDetails";

function App() {
  return (
    <div className="">
      <div className="pb-45.5">
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="product/:id" element={<ProductDetails/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
