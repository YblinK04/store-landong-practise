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

  const isLightSection = activeSection !== 'hero-section' && activeSection !== 'contact-section';

  return (
    <motion.header
      // Добавляем классы динамически. Все стили теперь в SCSS.
      className={`header ${isScrolled ? 'header--scrolled' : ''} ${isLightSection ? 'header--light' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="header__container">
        <div
          className="header__logo"
          onClick={() => scrollToSection('hero-section')}
        >
          <span className="header__logo-text">YTech</span>
          <span className="header__logo-subtitle">Premium Electronics</span>
        </div>

        <nav className="header__nav">
          {navItems.map((item, index) => (
            <button
              key={item.name}
              className={`header__nav-item ${activeSection === item.href ? 'header__nav-item--active' : ''}`}
              onClick={() => scrollToSection(item.href)}
            >
              {item.name}
            </button>
          ))}
        </nav>

        <div className="header__actions">
          <a href="tel:+78005553535" className="header__phone">
            <Phone size={18} />
            <span>+7 (800) 555-35-35</span>
          </a>
          
          <button
            className="header__consult-btn"
            onClick={() => scrollToSection('contact-section')}
          >
            Консультация
          </button>

          <button
            className="header__menu-button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Мобильное меню (аналогично адаптируем стили под классы) */}
      <div className={`header__mobile-nav ${isMobileMenuOpen ? 'header__mobile-nav--open' : ''} ${isLightSection ? 'header__mobile-nav--light' : ''}`}>
         {/* ... содержимое мобильного меню ... */}
      </div>
    </motion.header>
  );
}