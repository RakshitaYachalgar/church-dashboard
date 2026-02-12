import { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import logo from "../../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="navbar">

        {/* LEFT */}
        <div className="nav-left">
          <img src={logo} alt="POWAHA" className="nav-logo" />
          <span className="brand">POWAHA</span>
        </div>

     
        <div className="nav-center">
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
        </div> 

        {/* RIGHT */}
        <div className="nav-right">
          <Link to="/login" className="nav-link">Login</Link>
          <Link to="/RegisterRole" className="nav-btn">Get Started</Link>

          {/* HAMBURGER */}
          <div 
            className={`hamburger ${open ? "active" : ""}`} 
            onClick={() => setOpen(!open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${open ? "show" : ""}`}>
        <Link to="/" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
        <Link to="/login" onClick={() => setOpen(false)}>Login</Link>
        <Link to="/RegisterRole" className="mobile-btn" onClick={() => setOpen(false)}>
          Get Started
        </Link>
      </div>
    </>
  );
}
