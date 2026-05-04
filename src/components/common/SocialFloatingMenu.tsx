import React, { useState, useEffect } from 'react';
import { Fab, Zoom, Box } from '@mui/material';
import MessageIcon from '@mui/icons-material/Message';
import CloseIcon from '@mui/icons-material/Close';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import { motion, AnimatePresence } from 'framer-motion';
import PopupForm from './PopupForm';

// Иконки для социальных сетей
const WhatsAppIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
  </svg>
);

const VKIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1.01-1.49-.864-1.744-.864-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .644.271.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.795.780 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.744-.576.744z"/>
  </svg>
);

const SocialFloatingMenu = React.memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);

  useEffect(() => {
    // Показываем меню через 10 секунд после загрузки страницы
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10000); // 10 секунд

    return () => clearTimeout(timer);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSocialClick = (type: string) => {
    switch (type) {
      case 'form':
        setPopupOpen(true);
        setIsOpen(false); // Закрываем меню при открытии формы
        break;
      case 'whatsapp':
        window.open('https://wa.me/79522817749', '_blank');
        break;
      case 'vk':
        window.open('https://vk.com/im?entrypoint=community_page&media=&sel=-229911521', '_blank');
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
      icon: <WhatsAppIcon />,
      type: 'whatsapp',
      delay: 0.2
    },
    {
      icon: <VKIcon />,
      type: 'vk',
      delay: 0.3
    }
  ];

  return (
    <>
      {/* Основная кнопка - всегда видна если меню открыто, иначе только при скролле */}
      <Zoom in={isOpen || isVisible}>
        <Fab
          color="primary"
          size="medium"
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