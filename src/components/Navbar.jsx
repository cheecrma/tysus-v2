import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <Link to="/" style={{ textDecoration: "none", color: "#1a2a4a", display: "flex", alignItems: "center", gap: "0.75rem" }}>
          TYSUS <span>태영스텐레스</span>
        </Link>
      </div>
      <div className="menu">
        <Link
          to="/company"
          style={isActive("/company") ? { color: "#2c4a7c" } : {}}
        >
          회사소개
        </Link>
        <Link
          to="/products"
          style={isActive("/products") ? { color: "#2c4a7c" } : {}}
        >
          제품소개
        </Link>
        <Link
          to="/contact"
          style={isActive("/contact") ? { color: "#2c4a7c" } : {}}
        >
          문의처
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
