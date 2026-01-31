import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// 페이지들 불러오기
import Home from "./pages/Home";
import Company from "./pages/Company";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* 네비게이션 (모든 페이지 상단 고정) */}
        <Navbar />

        {/* 페이지 내용이 바뀌는 부분 */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* 푸터 (모든 페이지 하단 고정) */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
