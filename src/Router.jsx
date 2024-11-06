import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Products from "./Products";
import EditItems from "./EditProduct";
import EditProduct from "./EditProduct";
import App from "./App";
import Navbar from "./Navbar";
const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/app" element={<App />} />
        <Route path="/edit-product/:id" element={<EditProduct />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
