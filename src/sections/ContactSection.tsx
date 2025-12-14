'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Phone, Mail, MapPin, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { useContactForm } from '@/hooks/useContactForm';

type FormData = {
    name: string;
    phone: string;
    email: string;
    product?: string;
    message: string;
}

export default function ContactSection() {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    
    const { isSubmitting, submitStatus, submitMessage, submitForm, resetForm } = useContactForm();
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
         await submitForm(data)

         if (submitStatus === 'success') {
            reset();
            resetForm();
         }
    };

    const contactInfo = [
    {
      icon: Phone,
      title: 'Телефон для заказов',
      value: '+7 (800) 555-35-35',
      href: 'tel:+78005553535',
      description: 'Бесплатный звонок по России',
    },
    {
      icon: Mail,
      title: 'Электронная почта',
      value: 'order@ytech.com',
      href: 'mailto:order@ytech.com',
      description: 'Ответ в течение 2 часов',
    },
    {
      icon: Clock,
      title: 'Время работы',
      value: 'Ежедневно с 9:00 до 21:00',
      description: 'Без выходных',
    },
    {
      icon: MapPin,
      title: 'Шоу-рум',
      value: 'Москва, ул. Технологическая, 42',
      href: 'https://maps.google.com/?q=Москва+Технологическая+42',
      description: 'Приходите посмотреть технику',
    },
  ];

  const productOptions = [
    'Выберите интересующий товар',
    'Quantum Watch Pro',
    'Nexus Headphones Ultra',
    'Aether Smart Speaker',
    'Chronos Laptop Pro',
    'Helix Drone Vision',
    'Другое оборудование',
  ];

   return (
    <section id="contact-section" className="contact-section" ref={ref}>
      <div className="contact-section__container">
        <motion.div
          className="contact-section__header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="contact-section__title">Готовы к инновациям?</h2>
          <p className="contact-section__subtitle">
            Оставьте заявку и наш эксперт поможет подобрать идеальную технику
          </p>
        </motion.div>

        <div className="contact-section__content">
          {/* Контактная информация */}
          <motion.div
            className="contact-section__info"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="contact-section__info-title">
              Контакты
            </h3>
            <p className="contact-section__info-description">
              Свяжитесь с нами удобным способом. Мы поможем выбрать технику, 
              ответим на вопросы и оформим заказ.
            </p>

            <div className="contact-section__info-items">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.title}
                  href={item.href}
                  className="contact-section__info-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <div className="contact-section__info-icon">
                    <item.icon size={24} />
                  </div>
                  <div className="contact-section__info-content">
                    <div className="contact-section__info-title-small">
                      {item.title}
                    </div>
                    <div className="contact-section__info-value">
                      {item.value}
                    </div>
                    <div className="contact-section__info-description-small">
                      {item.description}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Форма заявки */}
          <motion.div
            className="contact-section__form-wrapper"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="contact-section__form-title">
              Оставить заявку
            </h3>
            <p className="contact-section__form-subtitle">
              Заполните форму и наш консультант свяжется с вами для подбора техники
            </p>

            <form
              className="contact-section__form"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="contact-section__form-group">
                <label htmlFor="name" className="contact-section__label">
                  Ваше имя *
                </label>
                <input
                  id="name"
                  type="text"
                  className={`contact-section__input ${
                    errors.name ? 'contact-section__input--error' : ''
                  }`}
                  {...register('name', {
                    required: 'Обязательное поле',
                    minLength: {
                      value: 2,
                      message: 'Минимум 2 символа',
                    },
                  })}
                  placeholder="Иван Иванов"
                />
                {errors.name && (
                  <span className="contact-section__error">
                    {errors.name.message}
                  </span>
                )}
              </div>

              <div className="contact-section__form-group">
                <label htmlFor="phone" className="contact-section__label">
                  Телефон *
                </label>
                <input
                  id="phone"
                  type="tel"
                  className={`contact-section__input ${
                    errors.phone ? 'contact-section__input--error' : ''
                  }`}
                  {...register('phone', {
                    required: 'Обязательное поле',
                    pattern: {
                      value: /^[\+]?[7]?[0-9]{10}$/,
                      message: 'Введите корректный номер',
                    },
                  })}
                  placeholder="+7 (999) 999-99-99"
                />
                {errors.phone && (
                  <span className="contact-section__error">
                    {errors.phone.message}
                  </span>
                )}
              </div>

              <div className="contact-section__form-group">
                <label htmlFor="email" className="contact-section__label">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="contact-section__input"
                  {...register('email')}
                  placeholder="your@email.com"
                />
              </div>

              <div className="contact-section__form-group">
                <label htmlFor="product" className="contact-section__label">
                  Интересующая техника
                </label>
                <select
                  id="product"
                  className="contact-section__input"
                  {...register('product')}
                >
                  {productOptions.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="contact-section__form-group">
                <label htmlFor="message" className="contact-section__label">
                  Комментарий
                </label>
                <textarea
                  id="message"
                  className="contact-section__textarea"
                  rows={4}
                  {...register('message')}
                  placeholder="Ваши пожелания или вопросы..."
                />
              </div>

              {/* Статус отправки */}
              {submitStatus !== 'idle' && (
                <motion.div
                  className={`contact-section__status contact-section__status--${submitStatus}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {submitStatus === 'success' ? (
                    <CheckCircle size={20} />
                  ) : (
                    <AlertCircle size={20} />
                  )}
                  <span>{submitMessage}</span>
                </motion.div>
              )}

              <motion.button
                type="submit"
                className="contact-section__submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <span>Отправка...</span>
                    <div className="contact-section__spinner"></div>
                  </>
                ) : (
                  <>
                    <span>Отправить заявку</span>
                    <CheckCircle size={20} />
                  </>
                )}
              </motion.button>

              <p className="contact-section__privacy">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}