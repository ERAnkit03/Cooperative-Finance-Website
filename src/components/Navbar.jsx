import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { LanguageContext } from "../context/LanguageContext";

const NAV_LINKS = {
  en: [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/contact", label: "Contact" },
  ],
  mr: [
    { to: "/", label: "मुख्यपृष्ठ" },
    { to: "/about", label: "आमच्याबद्दल" },
    { to: "/services", label: "सेवा" },
    { to: "/contact", label: "संपर्क" },
  ],
};

function TopBar() {
  return (
    <div className="top-bar">
      <div className="container d-flex justify-content-end align-items-center">
        <div className="d-flex flex-wrap align-items-center gap-3 gap-md-4">
          <a href="tel:+919209546376" className="top-bar-link">
            <i className="bi bi-telephone-fill"></i>
            <span>+91 92095 46376</span>
          </a>
          <a href="mailto:shivadnyapatsanstha@gmail.com" className="top-bar-link">
            <i className="bi bi-envelope-fill"></i>
            <span>shivadnyapatsanstha@gmail.com</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { language, setLanguage } = useContext(LanguageContext);

  const brandStyle = {
    fontFamily: language === "en" ? "var(--font-display)" : "var(--font-mr)",
    color: language === "en" ? "var(--color-indigo-dark)" : "var(--color-marigold-dark)",
    fontSize: "1.05rem",
  };

  const taglineStyle = {
    fontFamily: language === "en" ? "var(--font-body)" : "var(--font-mr)",
    color: language === "en" ? "var(--color-marigold-dark)" : "var(--color-indigo-dark)",
    fontSize: "0.7rem",
    fontWeight: 600,
  };

  return (
    <>
      <TopBar />
      <nav className="navbar navbar-expand-lg brand-navbar sticky-top py-2">
        <div className="container">
          <NavLink to="/" className="navbar-brand d-flex align-items-center gap-2">
            <img
              src="/assets/logo.jpeg"
              alt="Logo"
              width="46"
              height="46"
              className="rounded-circle"
              style={{ objectFit: "cover", border: "2px solid var(--color-indigo)" }}
            />
            <span className="d-flex flex-column lh-sm">
              <span className="fw-bold" style={brandStyle}>
                {language === "en"
                  ? "Shivadnya Nagari Sahakari Patsanstha Ltd."
                  : "शिवाज्ञा नागरी सहकारी पतसंस्था मर्यादित"}
              </span>
              <span style={taglineStyle}>
                {language === "en" ? "Shukrawar Peth, Pune" : "शुक्रवार पेठ, पुणे"}
              </span>
            </span>
          </NavLink>

          <button className="navbar-toggler border-0" type="button" onClick={() => setOpen(!open)}>
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${open ? "show" : ""}`}>
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-1 mb-3 mb-lg-0">
              {NAV_LINKS[language].map((link) => (
                <li className="nav-item" key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.to === "/"}
                    className="nav-link"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}

              <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
                <button
                  className={`btn btn-sm me-2 lang-toggle-btn ${
                    language === "en" ? "btn-primary" : "btn-outline-primary"
                  }`}
                  onClick={() => setLanguage("en")}
                >
                  English
                </button>
                <button
                  className={`btn btn-sm mr-text lang-toggle-btn ${
                    language === "mr" ? "btn-primary" : "btn-outline-primary"
                  }`}
                  onClick={() => setLanguage("mr")}
                >
                  मराठी
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}