import React from 'react';
import { Box, Typography, Card, CardContent, Button, Chip } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { useNavigate } from 'react-router-dom';

const prices = [
  {
    title: 'ОГЭ/ЕГЭ',
    desc: 'Подготовка к экзаменам',
    price: '3500 руб/мес',
    icon: <EmojiEventsIcon sx={{ color: '#1e7dbd', fontSize: 36 }} />, 
    badge: 'Хит',
    benefits: ['Группы до 8 человек', 'Авторские материалы', 'Пробный урок бесплатно'],
  },
  {
    title: '5-8 класс',
    desc: 'Школьные предметы',
    price: '3000 руб/мес',
    icon: <MenuBookIcon sx={{ color: '#1e7dbd', fontSize: 36 }} />, 
    benefits: ['Индивидуальный подход', 'Домашние задания', 'Поддержка преподавателя'],
  },
  {
    title: 'Летние курсы',
    desc: 'Интенсивы',
    price: '2500 руб/мес',
    icon: <WbSunnyIcon sx={{ color: '#1e7dbd', fontSize: 36 }} />, 
    badge: 'Выгодно',
    benefits: ['Быстрый прогресс', 'Интерактивные занятия', 'Сертификат по итогам'],
  },
];

const PricesSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ py: 8, position: 'relative', overflow: 'hidden' }}>
      {/* Паттерн из кругов */}
      <Box sx={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none' }}>
        <svg width="100%" height="100%" viewBox="0 0 1200 320" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', left: 0, top: 0 }}>
          <circle cx="180" cy="60" r="48" fill="#1e7dbd" fillOpacity="0.08">
            <animate attributeName="r" values="48;52;48" dur="4s" repeatCount="indefinite" />
            <animate attributeName="fillOpacity" values="0.08;0.12;0.08" dur="4s" repeatCount="indefinite" />
          </circle>
          <circle cx="1000" cy="100" r="60" fill="#1e7dbd" fillOpacity="0.09">
            <animate attributeName="r" values="60;64;60" dur="5s" repeatCount="indefinite" />
            <animate attributeName="fillOpacity" values="0.09;0.13;0.09" dur="5s" repeatCount="indefinite" />
          </circle>
          <circle cx="300" cy="260" r="36" fill="#1e7dbd" fillOpacity="0.08">
            <animate attributeName="r" values="36;40;36" dur="4.5s" repeatCount="indefinite" />
            <animate attributeName="fillOpacity" values="0.08;0.12;0.08" dur="4.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="900" cy="220" r="42" fill="#1e7dbd" fillOpacity="0.07">
            <animate attributeName="r" values="42;46;42" dur="5.5s" repeatCount="indefinite" />
            <animate attributeName="fillOpacity" values="0.07;0.11;0.07" dur="5.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="600" cy="80" r="30" fill="#1e7dbd" fillOpacity="0.06">
            <animate attributeName="r" values="30;34;30" dur="4s" repeatCount="indefinite" />
            <animate attributeName="fillOpacity" values="0.06;0.10;0.06" dur="4s" repeatCount="indefinite" />
          </circle>
          <circle cx="700" cy="280" r="54" fill="#1e7dbd" fillOpacity="0.07">
            <animate attributeName="r" values="54;58;54" dur="5s" repeatCount="indefinite" />
            <animate attributeName="fillOpacity" values="0.07;0.11;0.07" dur="5s" repeatCount="indefinite" />
          </circle>
        </svg>
      </Box>

      <Typography variant="h4" textAlign="center" sx={{ mb: 4, fontWeight: 700, color: '#1e7dbd', zIndex: 2, position: 'relative' }}>Стоимость обучения</Typography>
      
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 5, position: 'relative', zIndex: 2 }}>
        {prices.map((p, i) => (
          <Card
            key={i}
            sx={{
              background: 'linear-gradient(145deg, #ffffff, #f8f9ff)',
              borderRadius: 5,
              boxShadow: '0 8px 32px rgba(30,125,189,0.12)',
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
                boxShadow: '0 16px 48px rgba(30,125,189,0.18)',
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
                onClick={() => navigate('/trial')}
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
                    bgcolor: '#1e7dbd',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 16px rgba(30,125,189,0.3)',
                  }
                }}
              >
                Записаться
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default PricesSection; 