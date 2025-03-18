import React, { useContext, useState } from 'react';
import { FaMoon, FaSun, FaLanguage, FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';
import logo from '../assets/logo.svg';
import { AppContext } from '../context/AppContext';
import { translations } from '../translations';

const Header = () => {
  const { darkMode, toggleTheme, language, toggleLanguage } = useContext(AppContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[language];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        {/* <h1>{language === 'ar' ? 'بنك السراج' : 'Sirag Bank'}</h1> */}
        <img src={logo} alt="Sirag Bank" />
      </div>
      
      <button className="mobile-menu-toggle" onClick={toggleMobileMenu} aria-label="Toggle menu">
        {mobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
      
      <nav className={`nav ${mobileMenuOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="#" className="active">{t.header.home}</a></li>
          <li><a href="#">{t.header.services}</a></li>
          <li><a href="#">{t.header.about}</a></li>
          <li><a href="#">{t.header.contact}</a></li>
        </ul>
      </nav>
      
      <div className="settings">
        <button className="theme-toggle" onClick={toggleTheme} aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
        <button className="language-toggle" onClick={toggleLanguage} aria-label="Change language">
          <FaLanguage />
          <span>{t.settings.language}</span>
        </button>
      </div>
    </header>
  );
};

export default Header; 