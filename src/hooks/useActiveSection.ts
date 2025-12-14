'use client' 

import { useState, useEffect } from "react"

export  const useActiveSection = (sectionIds: string[], offset = 100) => {
    const [activeSection, setIsActiveSection] = useState(sectionIds[0]);

    useEffect(() => {
        const handleScroll = () => {
            const current = sectionIds.find(id => {
                const element = document.getElementById(id);
                if (!element) return false;
                    const rect = element.getBoundingClientRect();
                    return rect.top <= offset && rect.bottom >= offset
                });

                if (current && current !== activeSection) {
                    setIsActiveSection(current);
                }
            };

            window.addEventListener('scroll', handleScroll)

            return () =>  window.removeEventListener('scroll', handleScroll);
            
        }, [sectionIds, activeSection, offset]);

        return activeSection;
    };

                