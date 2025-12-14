'use client';

import { useState } from 'react';


type FormData = {
  name: string;
  phone: string;
  email: string;
  product?: string;
  message: string;
};

export const useContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const submitForm = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      await new Promise (resolve  => setTimeout(resolve, 1000))

      console.log('formData', data)
      
      setSubmitStatus('success');
      setSubmitMessage('Данные успешно отправлены');
      
     
      
      
    } catch (error) {
      setSubmitStatus('error')
      setSubmitMessage('Ошибка отправки данных')
    } finally{
      setIsSubmitting(false)
    }

  }

  const resetForm = () => {
    setSubmitStatus('idle');
    setSubmitMessage('');
  };

  return {
    isSubmitting,
    submitStatus,
    submitMessage,
    submitForm,
    resetForm,
  };
};

  