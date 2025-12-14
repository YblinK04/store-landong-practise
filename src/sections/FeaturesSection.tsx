'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Truck, Shield, Headphones, Award, Clock, Users } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Официальная гарантия',
    description: '2 года гарантии от производителя на всю технику',
    gradient: 'linear-gradient(135deg, #003DA5 0%, #0A174E 100%)',
  },
  {
    icon: Truck,
    title: 'Быстрая доставка',
    description: 'Доставка по России от 1 дня. Бесплатно при заказе от 50 000 ₽',
    gradient: 'linear-gradient(135deg, #D4AF37 0%, #FF6B6B 100%)',
  },
  {
    icon: Headphones,
    title: 'Экспертная поддержка',
    description: 'Консультации и помощь в выборе от технических специалистов',
    gradient: 'linear-gradient(135deg, #FF6B6B 0%, #D4AF37 100%)',
  },
  {
    icon: Award,
    title: 'Премиум качество',
    description: 'Только оригинальная техника от официальных дистрибьюторов',
    gradient: 'linear-gradient(135deg, #0A174E 0%, #003DA5 100%)',
  },
  {
    icon: Clock,
    title: 'Установка и настройка',
    description: 'Профессиональная установка и настройка оборудования',
    gradient: 'linear-gradient(135deg, #003DA5 0%, #FF6B6B 100%)',
  },
  {
    icon: Users,
    title: 'Персональный менеджер',
    description: 'Сопровождение покупки от выбора до установки',
    gradient: 'linear-gradient(135deg, #D4AF37 0%, #0A174E 100%)',
  },
];

export default function FeaturesSection() {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    const containerVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0},
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring' as const,
                stiffness: 100,
                damping: 12,
            },
        },
    };

return (
    <section id="features-section" className="features-section" ref={ref}>
      <div className="features-section__container">
        <motion.div
          className="features-section__header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="features-section__title">Почему выбирают YTech</h2>
          <p className="features-section__subtitle">
            Мы создаем исключительный опыт покупки премиум-электроники
          </p>
        </motion.div>

        <motion.div
          className="features-section__grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div 
                className="feature-card__icon-wrapper"
                style={{ background: feature.gradient }}
              >
                <feature.icon size={24} color="#FFFFFF" />
              </div>
              
              <h3 className="feature-card__title">{feature.title}</h3>
              <p className="feature-card__description">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="features-section__cta"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="features-section__cta-text">
            Нужна помощь в выборе? Наши эксперты помогут подобрать идеальную технику
          </p>
          <button className="features-section__cta-btn">
            Получить консультацию
          </button>
        </motion.div>
      </div>
    </section>
  );
}