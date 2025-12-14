'use client';


import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Youtube, ArrowUp } from 'lucide-react';
import { useScrollTop } from '@/hooks/useScrollTop';

export default function Footer() {
    const {showScrollTop, scrollToTop} = useScrollTop(500);

   
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];
  
  const footerLinks = [
    {
      title: 'Магазин',
      links: ['Умные часы', 'Наушники', 'Колонки', 'Ноутбуки', 'Дроны', 'Аксессуары'],
    },
    {
      title: 'Поддержка',
      links: ['Гарантия', 'Доставка', 'Возврат', 'FAQ', 'Контакты', 'Ремонт'],
    },
    {
      title: 'Компания',
      links: ['О нас', 'Блог', 'Вакансии', 'Партнеры', 'Прес-кит', 'Шоу-рум'],
    },
  ];

  return (
    <footer className="footer">
      <div className="footer__container">
        {/* основной контент */}
        <div className="footer__main">
          {/* лого и описание */}
          <div className="footer__brand">
            <h3 className="footer__logo">YTech</h3>
            <p className="footer__description">
              Премиальная электроника для тех, кто ценит инновации и качество.
              Мы делаем технологии доступными и понятными.
            </p>
            
            {/* Social links */}
            <div className="footer__social">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="footer__social-link"
                  aria-label={social.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* ссылки */}
          <div className="footer__links">
            {footerLinks.map((section, index) => (
              <motion.div
                key={section.title}
                className="footer__links-section"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
              >
                <h4 className="footer__links-title">{section.title}</h4>
                <ul className="footer__links-list">
                  {section.links.map((link) => (
                    <li key={link} className="footer__links-item">
                      <a href="#" className="footer__link">{link}</a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

       
        <div className="footer__bottom">
          <div className="footer__copyright">
            <p>© {new Date().getFullYear()} YTech. Все права защищены.</p>
            <div className="footer__legal">
              <a href="#" className="footer__legal-link">Политика конфиденциальности</a>
              <a href="#" className="footer__legal-link">Условия использования</a>
            </div>
          </div>

          {/* методы оплаты */}
          <div className="footer__payment">
            <div className="footer__payment-text">Принимаем к оплате:</div>
            <div className="footer__payment-methods">
              <div className="footer__payment-method">Visa</div>
              <div className="footer__payment-method">MasterCard</div>
              <div className="footer__payment-method">МИР</div>
              <div className="footer__payment-method">СБП</div>
            </div>
          </div>
        </div>
      </div>

     
      <motion.button
        className="footer__scroll-top"
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: showScrollTop ? 1 : 0,
          scale: showScrollTop ? 1 : 0
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        <ArrowUp size={20} />
      </motion.button>
    </footer>
  );
}