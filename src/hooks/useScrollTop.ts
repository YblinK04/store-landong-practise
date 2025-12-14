'use client';

import { useState, useEffect} from 'react';

export const useScrollTop = (threshold = 500) => {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll  = () => {
            setShowScrollTop(window.scrollY > threshold);
        }

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll)
    }, [threshold])

    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    return { showScrollTop, scrollToTop};
}