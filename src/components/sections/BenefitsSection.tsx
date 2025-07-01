import { Box, Typography, Paper } from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SchoolIcon from '@mui/icons-material/School';
import GroupsIcon from '@mui/icons-material/Groups';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import FactCheckIcon from '@mui/icons-material/FactCheck';

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

const BenefitsSection = () => (
  <Box sx={{ py: 8, position: 'relative', overflow: 'hidden' }}>
    <Typography variant="h4" textAlign="center" sx={{ mb: 6, fontWeight: 700, color: '#1e7dbd', zIndex: 2, position: 'relative' }}>
      Условия обучения
    </Typography>
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
  </Box>
);

export default BenefitsSection; 