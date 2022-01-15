import { Routes, Route, Link } from "react-router-dom";
import React from "react";
import HomePage from "./pages/homepages/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import Register from "./pages/register/Register";
import "./App.css";

function NotFound() {
  return (
    <div>
      <h1>404 Not Found</h1>
      <Link to="/">Go home</Link>
    </div>
  );
}
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
