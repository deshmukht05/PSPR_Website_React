import React, { useState, useEffect } from "react";
import "../css/Header.css";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const handleColorChange = ({ isActive }) => {
    return {color: isActive ? "#a6ce38" : "#444"};
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close menu when clicking on links
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        !event.target.closest(".components") &&
        !event.target.closest(".mobile-toggle")
      ) {
        closeMenu();
      }
    };

    // Prevent body scroll when menu is open
    if (isMenuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.body.classList.remove("menu-open");
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Mobile Menu Backdrop */}
      {isMenuOpen && (
        <div className="mobile-menu-backdrop active" onClick={closeMenu} />
      )}

      <nav>
        <div className="navbar-components">
          <div className="logo">
            <img src="Logo.png" alt="Logo" />
          </div>

          {/* Mobile Menu Toggle - Now properly aligned to right */}
          <button
            className="mobile-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>

          {/* Navigation Links */}
          <div className={`components ${isMenuOpen ? "active" : ""}`}>
            <ul>
              <li>
                <NavLink to="/" style={handleColorChange} onClick={closeMenu}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  style={handleColorChange}
                  onClick={closeMenu}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/service"
                  style={handleColorChange}
                  onClick={closeMenu}
                >
                  Service
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  style={handleColorChange}
                  onClick={closeMenu}
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/team"
                  style={handleColorChange}
                  onClick={closeMenu}
                >
                  Team
                </NavLink>
              </li>
            </ul>

            {/* Mobile Contact Button */}
            <div className="mobile-nav-button">
              <button>
                <a href="#contact" onClick={closeMenu}>
                  Contact Us
                </a>
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Contact Button */}
        <div className="navbar-button">
          <button>
            <a href="#contact">Contact Us</a>
          </button>
        </div>
      </nav>
    </>
  );
};
