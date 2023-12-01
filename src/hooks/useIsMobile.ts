import { useEffect, useState } from 'react';

interface MobileSize {
  isMobile: boolean;
}

export const useIsMobile = (): MobileSize => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const checkIsMobile = () => {
    const mobileBreakpoint = 768;

    setIsMobile(window.innerWidth < mobileBreakpoint);
  };

  useEffect(() => {
    checkIsMobile();

    window.addEventListener('resize', checkIsMobile);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  return { isMobile };
};