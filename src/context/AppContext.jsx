import React, { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // تحقق من وجود تفضيلات محفوظة في localStorage
  const savedTheme = localStorage.getItem('theme') || 'light';
  const savedLanguage = localStorage.getItem('language') || 'ar';
  
  const [darkMode, setDarkMode] = useState(savedTheme === 'dark');
  const [language, setLanguage] = useState(savedLanguage);
  
  // حفظ التفضيلات في localStorage عند تغييرها
  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    
    // تعيين اتجاه الصفحة بناءً على اللغة
    document.documentElement.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', language);
  }, [darkMode, language]);
  
  // تبديل الوضع المظلم
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
  
  // تبديل اللغة
  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };
  
  return (
    <AppContext.Provider value={{ darkMode, toggleTheme, language, toggleLanguage }}>
      {children}
    </AppContext.Provider>
  );
}; 