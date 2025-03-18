import React, { useEffect, useRef, useContext } from 'react';
import './MaintenanceBody.css';
import { AppContext } from '../context/AppContext';
import { translations } from '../translations';

const MaintenanceBody = () => {
  const bodyRef = useRef(null);
  const { darkMode, language } = useContext(AppContext);
  const t = translations[language];

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!bodyRef.current) return;
      
      const { clientX, clientY } = e;
      const { width, height, left, top } = bodyRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      const gradientX = Math.round(x * 100);
      const gradientY = Math.round(y * 100);
      
      bodyRef.current.style.background = `radial-gradient(circle at ${gradientX}% ${gradientY}%, var(--gradient-start), var(--gradient-mid), var(--gradient-end))`;
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [darkMode]);

  return (
    <div className="maintenance-body" ref={bodyRef}>
      <div className="maintenance-content">
        <div className="maintenance-icon">
          <svg viewBox="0 0 24 24" width="100" height="100" fill="currentColor">
            <path d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10,10,0,0,1,12,22Z" opacity="0.4"/>
            <path d="M12,6a1,1,0,0,0-1,1v8a1,1,0,0,0,2,0V7A1,1,0,0,0,12,6Z"/>
            <circle cx="12" cy="18" r="1"/>
          </svg>
        </div>
        <h2>{t.maintenance.sorry}</h2>
        <h1>{t.maintenance.title}</h1>
        <p>{t.maintenance.message}</p>
        <p className="return-time">{t.maintenance.returnTime}</p>
      </div>
    </div>
  );
};

export default MaintenanceBody; 