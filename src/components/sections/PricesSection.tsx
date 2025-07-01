import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, Button, Chip } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SchoolIcon from '@mui/icons-material/School';
import PopupForm from '../common/PopupForm';

const prices = [
  {
    title: 'ОГЭ',
    desc: 'Подготовка к экзаменам 9 класс',
    price: '5400 ₽/мес',
    icon: <SchoolIcon sx={{ color: '#1e7dbd', fontSize: 36 }} />, 
    badge: 'Популярно',
    benefits: ['Группы до 8 человек', 'Авторские материалы', 'Пробный урок бесплатно'],
  },
  {
    title: 'ЕГЭ',
    desc: 'Подготовка к экзаменам 10-11 класс',
    price: '5400 ₽/мес',
    icon: <EmojiEventsIcon sx={{ color: '#1e7dbd', fontSize: 36 }} />, 
    badge: 'Хит',
    benefits: ['Группы до 8 человек', 'Авторские материалы', 'Пробный урок бесплатно'],
  },
  {
    title: '5-8 класс',
    desc: 'Школьные предметы',
    price: '5400 ₽/мес',
    icon: <MenuBookIcon sx={{ color: '#1e7dbd', fontSize: 36 }} />, 
    benefits: ['Индивидуальный подход', 'Домашние задания', 'Поддержка преподавателя'],
  },
];

const PricesSection: React.FC = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupCourse, setPopupCourse] = useState('');

  const handleOpenPopup = (course: string) => {
    setPopupCourse(course);
    setPopupOpen(true);
  };

  return (
    <Box sx={{ py: 8, position: 'relative', overflow: 'hidden' }}>
      <Typography variant="h4" textAlign="center" sx={{ mb: 4, fontWeight: 700, color: '#1e7dbd', zIndex: 2, position: 'relative' }}>Стоимость обучения</Typography>
      
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 5, position: 'relative', zIndex: 2 }}>
        {prices.map((p, i) => (
          <Card
            key={i}
            sx={{
              background: 'linear-gradient(145deg, #ffffff, #f8f9ff)',
              borderRadius: 5,
              boxShadow: '0 8px 25px 0 rgba(30,125,189,0.15), 0 4px 12px 0 rgba(0,0,0,0.1)',
              border: '1px solid rgba(30,125,189,0.15)',
              p: 4,
              m: 2,
              width: 320,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, rgba(30,125,189,0.08) 0%, transparent 60%)',
                opacity: 0,
                transition: 'opacity 0.4s ease',
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '4px',
                height: '100%',
                background: '#1e7dbd',
                opacity: 0.2,
                transition: 'all 0.4s ease',
              },
              '&:hover': {
                transform: 'translateY(-12px) scale(1.02)',
                boxShadow: '0 12px 35px 0 rgba(30,125,189,0.25), 0 6px 20px 0 rgba(0,0,0,0.15)',
                borderColor: 'rgba(30,125,189,0.3)',
                '&::before': {
                  opacity: 1,
                },
                '&::after': {
                  opacity: 0.8,
                  width: '6px',
                },
                '& .icon-wrapper': {
                  transform: 'scale(1.15) rotate(5deg)',
                  backgroundColor: 'rgba(30,125,189,0.15)',
                  boxShadow: '0 8px 24px rgba(30,125,189,0.2)',
                  '&::after': {
                    opacity: 0.8,
                    animation: 'spin 20s linear infinite',
                  }
                },
                '& .price-tag': {
                  transform: 'scale(1.15)',
                  color: '#1e7dbd',
                  textShadow: '0 2px 8px rgba(30,125,189,0.2)',
                }
              },
            }}
          >
            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 0, width: '100%', height: '100%' }}>
              <Box 
                className="icon-wrapper"
                sx={{
                  mb: 3,
                  width: 90,
                  height: 90,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  backgroundColor: 'rgba(30,125,189,0.08)',
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    border: '3px dashed',
                    borderColor: 'rgba(30,125,189,0.2)',
                    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                    opacity: 0,
                    animation: 'none',
                  },
                  '@keyframes spin': {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                  },
                }}
              >
                {p.icon}
              </Box>
              <Typography 
                variant="h5" 
                sx={{ 
                  color: '#1e7dbd', 
                  fontWeight: 800, 
                  mb: 2,
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    textShadow: '0 2px 8px rgba(30,125,189,0.2)',
                  }
                }}
              >
                {p.title}
              </Typography>
              {p.badge && (
                <Chip 
                  label={p.badge} 
                  sx={{ 
                    bgcolor: '#1e7dbd', 
                    color: '#fff', 
                    fontWeight: 700, 
                    fontSize: 13, 
                    mb: 2, 
                    borderRadius: 2,
                    position: 'relative',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: -2,
                      left: -2,
                      right: -2,
                      bottom: -2,
                      border: '2px solid #1e7dbd',
                      borderRadius: 4,
                      opacity: 0.3,
                      transition: 'all 0.4s ease',
                    },
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 12px rgba(30,125,189,0.2)',
                      '&::before': {
                        opacity: 0.5,
                        transform: 'scale(1.1)',
                      }
                    }
                  }}
                />
              )}
              <Typography 
                variant="h4" 
                className="price-tag"
                sx={{ 
                  color: '#1e7dbd',
                  fontWeight: 800,
                  mb: 3,
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                {p.price}
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: '#64748b',
                  mb: 3,
                  textAlign: 'center',
                  lineHeight: 1.6
                }}
              >
                {p.desc}
              </Typography>
              <Box sx={{ width: '100%', mt: 'auto' }}>
                {p.benefits.map((benefit, index) => (
                  <Box 
                    key={index}
                    sx={{ 
                      display: 'flex',
                      alignItems: 'center',
                      mb: 1.5,
                      color: '#1e7dbd',
                      '&::before': {
                        content: '"✓"',
                        mr: 1,
                        fontWeight: 700,
                      }
                    }}
                  >
                    <Typography variant="body2" sx={{ color: '#64748b' }}>
                      {benefit}
                    </Typography>
                  </Box>
                ))}
              </Box>
              <Button
                variant="contained"
                fullWidth
                onClick={() => handleOpenPopup(p.title)}
                sx={{
                  mt: 3,
                  py: 1.5,
                  borderRadius: 2,
                  bgcolor: '#1e7dbd',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: 16,
                  textTransform: 'none',
                  boxShadow: '0 4px 12px rgba(30,125,189,0.2)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    bgcolor: '#f2aa8d',
                    color: '#fff',
                    boxShadow: '0 6px 16px rgba(242,170,141,0.3)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                Записаться
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Попап с формой */}
      <PopupForm
        open={popupOpen}
        onClose={() => setPopupOpen(false)}
        course={popupCourse}
        section="Стоимость обучения"
        formKey="prices-section"
      />
    </Box>
  );
};

export default PricesSection; 