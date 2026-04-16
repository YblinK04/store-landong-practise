'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { ArrowDown, Sparkles, Zap, Shield, Headphones, Truck } from 'lucide-react';
import { useMagneticButton } from '@/hooks/useMagneticButton';

export default function HeroSection() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const buttonRef = useRef<HTMLButtonElement>(null)
  useMagneticButton(buttonRef, 0.1)

  const scrollToProducts = () => {
    const productsSection = document.getElementById('products-section');
    productsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    { icon: Sparkles, text: 'Эксклюзивные модели' },
    { icon: Zap, text: 'Инновационные технологии' },
  ];

  const stats = [
    { number: '100+', label: 'Моделей' },
    { number: '2 года', label: 'Гарантия' },
    { number: '24/7', label: 'Поддержка' },
    { number: '1 день', label: 'Доставка' },
  ];

  return (
    <section id="hero-section" className="hero-section" ref={ref}>
      <div className="hero-section__background">
        <div className="hero-section__particles"></div>
        <div className="hero-section__gradient"></div>
      </div>

      <div className="hero-section__container">
        <div className="hero-section__content">
          <motion.div
            className="hero-section__badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Sparkles size={16} />
            <span>Новая коллекция 2025</span>
          </motion.div>

          <motion.h1
            className="hero-section__title"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Электроника{' '}
            <span className="hero-section__title-accent">будущего</span>
            <br />
            доступна уже сегодня
          </motion.h1>

          <motion.p
            className="hero-section__description"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Откройте мир инновационных технологий и элегантного дизайна. 
            Премиум электроника, которая меняет представление о возможностях.
          </motion.p>

          
          <motion.div
            className="hero-section__features"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {features.map((feature, index) => (
              <div key={index} className="hero-section__feature">
                <feature.icon size={20} />
                <span>{feature.text}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="hero-section__actions"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <button 
              className="hero-section__cta"
              onClick={scrollToProducts}
            >
              <span>Смотреть коллекцию</span>
              <ArrowDown size={20} />
            </button>
            <button className="hero-section__secondary">
              Узнать о новинках
            </button>
          </motion.div>

          <motion.div
            className="hero-section__stats"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {stats.map((stat, index) => (
              <div key={index} className="hero-section__stat">
                <span className="hero-section__stat-number">{stat.number}</span>
                <span className="hero-section__stat-label">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="hero-section__preview"
          initial={{ opacity: 0, x: 100 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="hero-section__product-image">
            <div className="hero-section__product-glow"></div>
            <div className="hero-section__product-icons">
              <Shield className="hero-section__product-icon" />
              <Headphones className="hero-section__product-icon" />
              <Truck className="hero-section__product-icon" />
              <Zap className="hero-section__product-icon" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}