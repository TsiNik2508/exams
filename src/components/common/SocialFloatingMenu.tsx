import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Fab, Zoom, Box } from '@mui/material';
import MessageIcon from '@mui/icons-material/Message';
import CloseIcon from '@mui/icons-material/Close';
import TelegramIcon from '@mui/icons-material/Telegram';
import EmailIcon from '@mui/icons-material/Email';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import { motion, AnimatePresence } from 'framer-motion';
import PopupForm from './PopupForm';

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

const SocialFloatingMenu = React.memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const isVisibleRef = useRef(false);

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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSocialClick = (type: string) => {
    switch (type) {
      case 'form':
        setPopupOpen(true);
        setIsOpen(false); // Закрываем меню при открытии формы
        break;
      case 'telegram':
        window.open('https://t.me/erudite_school_ru', '_blank');
        break;
      case 'vk':
        window.open('https://vk.com/club229911521', '_blank');
        break;
      case 'email':
        window.open('mailto:erudite_edu@mail.ru', '_blank');
        break;
    }
  };

  const socialButtons = [
    {
      icon: <ContactSupportIcon />,
      type: 'form',
      delay: 0.1
    },
    {
      icon: <TelegramIcon />,
      type: 'telegram',
      delay: 0.2
    },
    {
      icon: <EmailIcon />,
      type: 'email',
      delay: 0.3
    },
    {
      icon: <Box component="span" sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>VK</Box>,
      type: 'vk',
      delay: 0.4
    }
  ];

  return (
    <>
      {/* Основная кнопка - всегда видна если меню открыто, иначе только при скролле */}
      <Zoom in={isOpen || isVisible}>
        <Fab
          color="primary"
          size="small"
          onClick={toggleMenu}
          sx={{
            position: 'fixed',
            bottom: 80, // Над ScrollToTop
            right: 16,
            zIndex: 1000,
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            bgcolor: isOpen ? '#f2aa8d' : '#1e7dbd',
            color: '#fff',
            '&:hover': {
              bgcolor: isOpen ? '#e89a7d' : '#f2aa8d',
              transform: 'scale(1.1)',
            },
            boxShadow: '0 4px 20px rgba(30,125,189,0.3)',
          }}
        >
          {isOpen ? <CloseIcon /> : <MessageIcon />}
        </Fab>
      </Zoom>

      {/* Выпадающее меню соцсетей */}
      <AnimatePresence>
        {isOpen && (
          <Box
            sx={{
              position: 'fixed',
              bottom: 140, // Над основной кнопкой
              right: 16,
              zIndex: 999,
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
            }}
          >
            {socialButtons.map((button) => (
              <motion.div
                key={button.type}
                initial={{ 
                  opacity: 0, 
                  scale: 0.5, 
                  y: 20,
                  rotate: -180
                }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  y: 0,
                  rotate: 0
                }}
                exit={{ 
                  opacity: 0, 
                  scale: 0.5, 
                  y: -20,
                  rotate: 180
                }}
                transition={{
                  duration: 0.3,
                  delay: button.delay,
                  ease: 'backOut'
                }}
              >
                <Fab
                  size="small"
                  onClick={() => handleSocialClick(button.type)}
                  sx={{
                    bgcolor: button.type === 'form' ? '#f2aa8d' : '#1e7dbd',
                    color: '#fff',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      bgcolor: button.type === 'form' ? '#e89a7d' : '#f2aa8d',
                      transform: 'scale(1.15) translateY(-2px)',
                      boxShadow: button.type === 'form' 
                        ? '0 8px 25px rgba(242,170,141,0.4)' 
                        : '0 8px 25px rgba(242,170,141,0.4)',
                    },
                    boxShadow: button.type === 'form' 
                      ? '0 4px 15px rgba(242,170,141,0.3)' 
                      : '0 4px 15px rgba(30,125,189,0.3)',
                  }}
                >
                  {button.icon}
                </Fab>
              </motion.div>
            ))}
          </Box>
        )}
      </AnimatePresence>

      {/* Попап с формой */}
      <PopupForm
        open={popupOpen}
        onClose={() => setPopupOpen(false)}
        section="Плавающее меню"
        showMessageField={true}
        formKey="floating-menu"
      />
    </>
  );
});

export default SocialFloatingMenu; 