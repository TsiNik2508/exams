import { Box, Typography, Paper } from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SchoolIcon from '@mui/icons-material/School';
import GroupsIcon from '@mui/icons-material/Groups';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import { useState } from 'react';
import PopupForm from '../common/PopupForm';

const conditions = [
  {
    icon: <SupportAgentIcon sx={{ fontSize: 40, color: '#1e7dbd' }} />, // Связь с преподавателем 24/7
    title: 'Связь с преподавателем 24/7',
    desc: 'Оперативно отвечаем на вопросы и поддерживаем на каждом этапе обучения',
  },
  {
    icon: <MenuBookIcon sx={{ fontSize: 40, color: '#1e7dbd' }} />, // Актуальные материалы ФИПИ
    title: 'Актуальные материалы ФИПИ',
    desc: 'Используем только свежие задания и методики, соответствующие стандартам ФИПИ',
  },
  {
    icon: <SchoolIcon sx={{ fontSize: 40, color: '#1e7dbd' }} />, // Очные и онлайн занятия
    title: 'Очные и онлайн занятия',
    desc: 'Можно выбрать удобный формат: приходить в класс или заниматься онлайн',
  },
  {
    icon: <GroupsIcon sx={{ fontSize: 40, color: '#1e7dbd' }} />, // Мини-группы
    title: 'Мини-группы',
    desc: 'Обучение в небольших группах для максимального внимания каждому',
  },
  {
    icon: <VolunteerActivismIcon sx={{ fontSize: 40, color: '#1e7dbd' }} />, // Поддержка на каждом этапе
    title: 'Поддержка на каждом этапе',
    desc: 'Помогаем с мотивацией, организацией и разбором сложных тем',
  },
  {
    icon: <FactCheckIcon sx={{ fontSize: 40, color: '#1e7dbd' }} />, // Экспертная проверка
    title: 'Экспертная проверка',
    desc: 'Проверка работ опытными преподавателями и подробная обратная связь',
  },
];

const BenefitsSection = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupCourse, setPopupCourse] = useState('');

  const handleOpenPopup = (course: string) => {
    setPopupCourse(course);
    setPopupOpen(true);
  };

  return (
    <Box sx={{ py: 8, position: 'relative', overflow: 'hidden' }}>
      <Typography variant="h4" textAlign="center" sx={{ mb: 6, fontWeight: 700, color: '#1e7dbd', zIndex: 2, position: 'relative' }}>
        Условия обучения
      </Typography>
      
      {/* Подарок за друга - только для мобильных, под заголовок */}
      <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'center', mb: 4 }}>
        <Box 
          onClick={() => handleOpenPopup('Подарок за друга')}
          sx={{ 
            width: 'auto', 
            minWidth: 280,
            maxWidth: 320,
            height: 70, 
            borderRadius: '35px', 
            bgcolor: '#f2aa8d', 
            position: 'relative', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            flexDirection: 'column', 
            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)', 
            cursor: 'pointer',
            boxShadow: '0 6px 25px rgba(242,170,141,0.3), 0 3px 15px rgba(242,170,141,0.2), inset 0 2px 8px rgba(255,255,255,0.1)',
            border: '2px solid rgba(255,255,255,0.2)',
            animation: 'pulseOrange 2s infinite 1s',
            px: 3,
            '&:hover': { 
              transform: 'translateY(-8px) scale(1.02)',
              boxShadow: '0 10px 35px rgba(242,170,141,0.4), 0 5px 20px rgba(242,170,141,0.3), inset 0 2px 8px rgba(255,255,255,0.15)',
              border: '2px solid rgba(255,255,255,0.3)'
            },
            '&:active': {
              transform: 'translateY(-4px) scale(1.01)'
            }
          }}
        >
          <CardGiftcardIcon sx={{ 
            position: 'absolute', 
            left: '50%', 
            top: '50%', 
            fontSize: 48, 
            opacity: 0.15, 
            color: '#fff', 
            transform: 'translate(-50%, -50%)',
            animation: 'float 3s ease-in-out infinite 1.5s'
          }} />
          <Typography sx={{ 
            color: '#fff', 
            fontWeight: 800, 
            fontSize: 15, 
            textAlign: 'center', 
            zIndex: 2, 
            lineHeight: 1.1, 
            position: 'relative',
            textShadow: '0 2px 6px rgba(0,0,0,0.4), 0 1px 2px rgba(0,0,0,0.6)',
            letterSpacing: '0.3px'
          }}>
            Подарок за друга
          </Typography>
        </Box>
      </Box>

      <Box sx={{ maxWidth: 1200, mx: 'auto', px: 2, position: 'relative', zIndex: 2 }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' }, gap: 4 }}>
          {conditions.map((cond, index) => (
            <Paper
              key={index}
              elevation={0}
              sx={{
                p: 3,
                borderRadius: 4,
                bgcolor: '#fff',
                boxShadow: '0 8px 25px 0 rgba(30,125,189,0.15), 0 4px 12px 0 rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 12px 35px 0 rgba(30,125,189,0.25), 0 6px 20px 0 rgba(0,0,0,0.15)',
                  '& .MuiSvgIcon-root': {
                    color: '#f2aa8d',
                  },
                  '& .benefit-title': {
                    color: '#f2aa8d',
                  },
                },
              }}
            >
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                {cond.icon}
                <Typography
                  variant="h6"
                  className="benefit-title"
                  sx={{
                    mt: 2,
                    mb: 1,
                    fontWeight: 700,
                    color: '#1e7dbd',
                    transition: 'color 0.3s ease',
                  }}
                >
                  {cond.title}
                </Typography>
                <Typography sx={{ color: '#64748b', fontSize: 15 }}>
                  {cond.desc}
                </Typography>
              </Box>
            </Paper>
          ))}
        </Box>
      </Box>

      {/* Попап с формой */}
      <PopupForm
        open={popupOpen}
        onClose={() => setPopupOpen(false)}
        course={popupCourse}
        section="Условия обучения"
        formKey="benefits-section"
      />
    </Box>
  );
};

export default BenefitsSection; 