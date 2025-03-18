import React, { useContext } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaHeart } from 'react-icons/fa';
import './Footer.css';
import { AppContext } from '../context/AppContext';
import { translations } from '../translations';

const Footer = () => {
  const { language } = useContext(AppContext);
  const t = translations[language];

  return (
    <footer className="footer">
      <div className="footer-waves">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>
      <div className="footer-content">
        <div className="footer-grid">
          <div className="footer-brand">
            <h2>{language === 'ar' ? 'بنك المستقبل' : 'Future Bank'}</h2>
            <p>{t.footer.copyright}</p>
          </div>
          <div className="footer-links">
            <h3>{language === 'ar' ? 'روابط سريعة' : 'Quick Links'}</h3>
            <ul>
              <li><a href="#">{t.footer.links.privacy}</a></li>
              <li><a href="#">{t.footer.links.terms}</a></li>
              <li><a href="#">{t.footer.links.faq}</a></li>
            </ul>
          </div>
          <div className="footer-social">
            <h3>{language === 'ar' ? 'تواصل معنا' : 'Connect With Us'}</h3>
            <div className="social-icons">
              <a href="#" className="social-icon" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="#" className="social-icon" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" className="social-icon" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" className="social-icon" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 