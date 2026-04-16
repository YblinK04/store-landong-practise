'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Star, Zap, Shield, Battery } from 'lucide-react';

const products = [ 
  {
    id: 1,
    name: 'Quantum Watch Pro',
    category: 'Умные часы',
    price: '89 999 ₽',
    oldPrice: '99 999 ₽',
    rating: 4.9,
    features: ['ЭКГ и SpO2', 'Титановый корпус', '30 дней работы', 'ИИ-тренер'],
    imageColor: '#003DA5',
    badge: 'Хит сезона',
  },
  {
    id: 2,
    name: 'Nexus Headphones Ultra',
    category: 'Аудиотехника',
    price: '64 999 ₽',
    oldPrice: null,
    rating: 4.8,
    features: ['Активное шумоподавление', '100 часов работы', 'Hi-Res Audio', '3D-звук'],
    imageColor: '#D4AF37',
    badge: 'Новинка',
  },
  {
    id: 3,
    name: 'Aether Smart Speaker',
    category: 'Умный дом',
    price: '42 999 ₽',
    oldPrice: '49 999 ₽',
    rating: 4.7,
    features: ['360° Dolby Atmos', 'ИИ-ассистент', 'Умное освещение', '4 микрофона'],
    imageColor: '#FF6B6B',
    badge: '-15%',
  },
  {
    id: 4,
    name: 'Chronos Laptop Pro',
    category: 'Ноутбуки',
    price: '219 999 ₽',
    oldPrice: null,
    rating: 4.9,
    features: ['M3 Max', '32 ГБ RAM', 'Mini-LED 4K', '18 часов работы'],
    imageColor: '#0A174E',
    badge: 'Флагман',
  },
  {
    id: 5,
    name: 'Helix Drone Vision',
    category: 'Дроны',
    price: '149 999 ₽',
    oldPrice: '169 999 ₽',
    rating: 4.8,
    features: ['8K видео', '60 мин полёта', 'ИИ-слежение', 'Три камеры'],
    imageColor: '#003DA5',
    badge: 'Профессиональный',
  },
  {
    id: 6,
    name: 'Quantum Keyboard',
    category: 'Периферия',
    price: '24 999 ₽',
    oldPrice: '29 999 ₽',
    rating: 4.6,
    features: ['Механические переключатели', 'RGB подсветка', 'Беспроводная', 'Алюминиевый корпус'],
    imageColor: '#D4AF37',
    badge: 'Выбор геймеров',
  },
];

export default function ProductsShowcase() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollContainerRef.current?.scrollBy({ left: -400, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollContainerRef.current?.scrollBy({ left: 400, behavior: 'smooth' });
  };

  const categories = ['Все', 'Умные часы', 'Аудиотехника', 'Умный дом', 'Ноутбуки', 'Дроны', 'Периферия'];

  return (
    <section id="products-section" className="products-showcase" ref={ref}>
      <div className="products-showcase__container">
        <motion.div
          className="products-showcase__header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h2 className="products-showcase__title">Премиум коллекция</h2>
            <p className="products-showcase__subtitle">
              Эксклюзивная электроника с передовыми технологиями
            </p>
          </div>
          
          <div className="products-showcase__controls">
            <button className="products-showcase__control-btn" onClick={scrollLeft}>
              <ChevronLeft size={24} />
            </button>
            <button className="products-showcase__control-btn" onClick={scrollRight}>
              <ChevronRight size={24} />
            </button>
          </div>
        </motion.div>

        <motion.div
          className="products-showcase__categories"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category, index) => (
            <button
              key={category}
              className={`products-showcase__category ${index === 0 ? 'products-showcase__category--active' : ''}`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="products-showcase__scroll-container" ref={scrollContainerRef}>
          <div className="products-showcase__scroll-content">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                className="product-showcase-card"
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                {product.badge && (
                  <div className="product-showcase-card__badge">
                    {product.badge}
                  </div>
                )}

                <div 
                  className="product-showcase-card__image"
                  style={{ backgroundColor: `${product.imageColor}15` }}
                >
                  <div 
                    className="product-showcase-card__image-glow"
                    style={{ backgroundColor: product.imageColor }}
                  />
                  <div className="product-showcase-card__features">
                    <Zap size={16} />
                    <Shield size={16} />
                    <Battery size={16} />
                  </div>
                </div>

                <div className="product-showcase-card__content">
                  <span className="product-showcase-card__category">
                    {product.category}
                  </span>
                  <h3 className="product-showcase-card__name">
                    {product.name}
                  </h3>

                  <div className="product-showcase-card__rating">
                    <div className="product-showcase-card__stars">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          fill={i < Math.floor(product.rating) ? '#D4AF37' : '#E5E7EB'}
                          color={i < Math.floor(product.rating) ? '#D4AF37' : '#E5E7EB'}
                        />
                      ))}
                    </div>
                    <span className="product-showcase-card__rating-text">
                      {product.rating}
                    </span>
                  </div>

                  <div className="product-showcase-card__features-list">
                    {product.features.map((feature, idx) => (
                      <span key={idx} className="product-showcase-card__feature">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="product-showcase-card__price">
                    <span className="product-showcase-card__price-current">
                      {product.price}
                    </span>
                    {product.oldPrice && (
                      <span className="product-showcase-card__price-old">
                        {product.oldPrice}
                      </span>
                    )}
                  </div>

                  <div className="product-showcase-card__actions">
                    <button className="product-showcase-card__btn-primary">
                      Подробнее
                    </button>
                    <button className="product-showcase-card__btn-secondary">
                      Консультация
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="products-showcase__footer"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="products-showcase__footer-text">
            Все товары в наличии. Бесплатная доставка и установка.
          </p>
          <button className="products-showcase__footer-btn">
            Показать все товары
          </button>
        </motion.div>
      </div>
    </section>
  );
}