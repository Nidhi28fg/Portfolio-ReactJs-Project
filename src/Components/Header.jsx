import React from "react";
import { FaHome, FaUser, FaBriefcase, FaEnvelope } from "react-icons/fa";

const Header = () => {
  return (
    <header
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "3rem",
        background: "rgba(34, 49, 63, 0.85)", // Darker background
        backdropFilter: "blur(10px)", // Blurred background effect
        padding: "1.2rem 2rem",
        top: 0,
        width: "100%",
        zIndex: 10,
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)", // Subtle shadow for depth
        transition: "background 0.3s ease", // Smooth transition for hover
      }}
    >
      <a
        href="#home"
        style={linkStyle}
      >
        <FaHome style={iconStyle} /> Home
      </a>
      <a
        href="#about"
        style={linkStyle}
      >
        <FaUser style={iconStyle} /> About
      </a>
      <a
        href="#portfolio"
        style={linkStyle}
      >
        <FaBriefcase style={iconStyle} /> Portfolio
      </a>
      <a
        href="#footer"
        style={linkStyle}
      >
        <FaEnvelope style={iconStyle} /> Contact
      </a>
    </header>
  );
};

const linkStyle = {
  color: "#fff",
  fontSize: "1.1rem",
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  padding: "0.5rem",
  transition: "color 0.3s ease",
  borderRadius: "8px",
  textTransform: "uppercase",
  fontWeight: "bold",
  letterSpacing: "0.05em",
};

const iconStyle = {
  fontSize: "1.5rem",
};

export default Header;
