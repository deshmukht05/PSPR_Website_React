import React, { useState, useEffect } from 'react';
import "../css/Header.css";

export const Header = () => {
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
      if (isMenuOpen && !event.target.closest('.components') && !event.target.closest('.mobile-toggle')) {
        closeMenu();
      }
    };

    // Prevent body scroll when menu is open
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.classList.remove('menu-open');
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Mobile Menu Backdrop */}
      {isMenuOpen && (
        <div 
          className="mobile-menu-backdrop active" 
          onClick={closeMenu}
        />
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
            {isMenuOpen ? '✕' : '☰'}
          </button>

          {/* Navigation Links */}
          <div className={`components ${isMenuOpen ? 'active' : ''}`}>
            <ul>
              <li>
                <a href="#home" onClick={closeMenu}>Home</a>
              </li>
              <li>
                <a href="#about" onClick={closeMenu}>About</a>
              </li>
              <li>
                <a href="#services" onClick={closeMenu}>Service</a>
              </li>
              <li>
                <a href="#projects" onClick={closeMenu}>Projects</a>
              </li>
              <li>
                <a href="#team" onClick={closeMenu}>Team</a>
              </li>
            </ul>
            
            {/* Mobile Contact Button */}
            <div className="mobile-nav-button">
              <button>
                <a href="#contact" onClick={closeMenu}>Contact Us</a>
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