import { useState, useEffect, useCallback, useRef } from 'react';
import { Fab, Zoom } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import React from 'react';
import { useLocation } from 'react-router-dom';

// Throttle функция для оптимизации scroll событий
const throttle = <T extends (...args: unknown[]) => void>(func: T, limit: number): T => {
  let inThrottle: boolean;
  return ((...args: unknown[]) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }) as T;
};

const ScrollToTop = React.memo(() => {
  const [isVisible, setIsVisible] = useState(false);
  const isVisibleRef = useRef(false);
  const location = useLocation();

  const toggleVisibility = useCallback(
    throttle(() => {
      const shouldBeVisible = window.pageYOffset > 300;
      if (shouldBeVisible !== isVisibleRef.current) {
        isVisibleRef.current = shouldBeVisible;
        setIsVisible(shouldBeVisible);
      }
    }, 100), // Throttle до 100ms
    []
  );

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [toggleVisibility]);

  // Скроллим наверх при смене маршрута
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.pathname]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <Zoom in={isVisible}>
      <Fab
        color="primary"
        size="small"
        onClick={scrollToTop}
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          zIndex: 1000,
          transition: 'background 0.3s',
          '&:hover': {
            bgcolor: '#f2aa8d',
            color: '#fff',
          },
        }}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Zoom>
  );
});

export default ScrollToTop; 