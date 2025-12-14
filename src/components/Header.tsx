'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { useActiveSection } from '@/hooks/useActiveSection';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const sectionIds = ['hero-section', 'products-section', 'features-section', 'contact-section'];
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { name: 'Главная', href: 'hero-section' },
    { name: 'Коллекция', href: 'products-section' },
    { name: 'Преимущества', href: 'features-section' },
    { name: 'Контакты', href: 'contact-section' },
  ];

  // Определяем, на какой секции мы находимся для изменения стилей 
  const isLightSection = activeSection !== 'hero-section' && activeSection !== 'contact-section';

  return (
    <motion.header
      className={`header ${isScrolled ? 'header--scrolled' : ''} ${isLightSection ? 'header--light' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="header__container">
        {/* логотип */}
        <motion.div
          className="header__logo"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          onClick={() => scrollToSection('hero-section')}
          style={{ cursor: 'pointer' }}
        >
          <span className="header__logo-text">YTech</span>
          <span className="header__logo-subtitle">Premium Electronics</span>
        </motion.div>

        {/* навигация  */}
        <nav className="header__nav">
          {navItems.map((item, index) => (
            <motion.button
              key={item.name}
              className={`header__nav-item ${activeSection === item.href ? 'header__nav-item--active' : ''}`}
              onClick={() => scrollToSection(item.href)}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ color: isLightSection ? '#D4AF37' : '#D4AF37' }}
            >
              {item.name}
            </motion.button>
          ))}
        </nav>

        
        <div className="header__actions">
          <motion.a
            href="tel:+78005553535"
            className="header__phone"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone size={18} />
            <span>+7 (800) 555-35-35</span>
          </motion.a>
          
          <motion.button
            className="header__consult-btn"
            onClick={() => scrollToSection('contact-section')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Консультация
          </motion.button>

          {/* кнопка мобильного меню*/}
          <button
            className="header__menu-button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* моб навигация*/}
        <motion.nav
          className={`header__mobile-nav ${isMobileMenuOpen ? 'header__mobile-nav--open' : ''} ${isLightSection ? 'header__mobile-nav--light' : ''}`}
          initial={{ opacity: 0, x: '100%' }}
          animate={{ 
            opacity: isMobileMenuOpen ? 1 : 0,
            x: isMobileMenuOpen ? 0 : '100%'
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="header__mobile-header">
            <div className="header__mobile-logo">
              <span className={`header__logo-text ${isLightSection ? 'header__logo-text--dark' : ''}`}>YTech</span>
            </div>
            <button
              className="header__mobile-close"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Закрыть меню"
            >
              <X size={24} />
            </button>
          </div>

          <div className="header__mobile-links">
            {navItems.map((item) => (
              <button
                key={item.name}
                className={`header__mobile-nav-item ${activeSection === item.href ? 'header__mobile-nav-item--active' : ''}`}
                onClick={() => scrollToSection(item.href)}
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="header__mobile-actions">
            <a href="tel:+78005553535" className="header__mobile-phone">
              <Phone size={20} />
              <div>
                <div className="header__mobile-phone-label">Бесплатный звонок</div>
                <div className="header__mobile-phone-number">+7 (800) 555-35-35</div>
              </div>
            </a>
            
            <button 
              className="header__mobile-consult-btn"
              onClick={() => scrollToSection('contact-section')}
            >
              Получить консультацию
            </button>
          </div>
        </motion.nav>
      </div>
    </motion.header>
  );
}