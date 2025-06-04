import { Box, Typography, Paper } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import GroupsIcon from '@mui/icons-material/Groups';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PsychologyIcon from '@mui/icons-material/Psychology';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const benefits = [
  {
    icon: <SchoolIcon sx={{ fontSize: 40, color: '#1e7dbd' }} />,
    title: 'Опытные преподаватели',
    desc: 'Наши педагоги имеют многолетний опыт подготовки к экзаменам и высшее образование',
  },
  {
    icon: <GroupsIcon sx={{ fontSize: 40, color: '#1e7dbd' }} />,
    title: 'Маленькие группы',
    desc: 'Занятия в группах до 8 человек для максимального внимания каждому ученику',
  },
  {
    icon: <EmojiEventsIcon sx={{ fontSize: 40, color: '#1e7dbd' }} />,
    title: 'Высокие результаты',
    desc: 'Средний балл наших выпускников на ЕГЭ выше 80, а на ОГЭ - выше 4.5',
  },
  {
    icon: <PsychologyIcon sx={{ fontSize: 40, color: '#1e7dbd' }} />,
    title: 'Индивидуальный подход',
    desc: 'Учитываем особенности каждого ученика и адаптируем программу под его цели',
  },
  {
    icon: <AccessTimeIcon sx={{ fontSize: 40, color: '#1e7dbd' }} />,
    title: 'Гибкое расписание',
    desc: 'Выбирайте удобное время занятий и формат обучения (очно или онлайн)',
  },
  {
    icon: <SupportAgentIcon sx={{ fontSize: 40, color: '#1e7dbd' }} />,
    title: 'Поддержка 24/7',
    desc: 'Всегда на связи с учениками и родителями, отвечаем на вопросы в любое время',
  },
];

const BenefitsSection = () => (
  <Box sx={{ py: 8, background: 'linear-gradient(135deg, #f5f6fa 60%, #e3f2fd 100%)', position: 'relative', overflow: 'hidden' }}>
    {/* Паттерн из кругов */}
    <Box sx={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none' }}>
      <svg width="100%" height="100%" viewBox="0 0 1200 320" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', left: 0, top: 0 }}>
        <circle cx="180" cy="60" r="32" fill="#1e7dbd" fillOpacity="0.07" />
        <circle cx="1000" cy="100" r="40" fill="#f2aa8d" fillOpacity="0.09" />
        <circle cx="300" cy="260" r="24" fill="#f2aa8d" fillOpacity="0.08" />
        <circle cx="900" cy="220" r="30" fill="#1e7dbd" fillOpacity="0.07" />
      </svg>
    </Box>
    <Typography variant="h4" textAlign="center" sx={{ mb: 6, fontWeight: 700, color: '#1e7dbd', zIndex: 2, position: 'relative' }}>
      С нами выгодно
    </Typography>
    <Box sx={{ maxWidth: 1200, mx: 'auto', px: 2, position: 'relative', zIndex: 2 }}>
      <Box sx={{ 
        display: 'grid', 
        gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
        gap: 4,
      }}>
        {benefits.map((benefit, index) => (
          <Paper
            key={index}
            elevation={0}
            sx={{
              p: 4,
              background: 'rgba(255, 255, 255, 0.9)',
              borderRadius: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden',
              '&:before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: 4,
                background: index % 2 === 0
                  ? 'linear-gradient(90deg, #1e7dbd 60%, #f2aa8d 100%)'
                  : 'linear-gradient(90deg, #f2aa8d 60%, #1e7dbd 100%)',
                borderTopLeftRadius: 4,
                borderTopRightRadius: 4,
              },
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 16px 48px 0 rgba(30,125,189,0.18)',
                '& .icon-wrapper': {
                  transform: 'scale(1.1)',
                  background: 'linear-gradient(135deg, rgba(30,125,189,0.1) 0%, rgba(242,170,141,0.1) 100%)',
                },
              },
            }}
          >
            <Box
              className="icon-wrapper"
              sx={{
                width: 80,
                height: 80,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mb: 3,
                transition: 'all 0.3s ease',
              }}
            >
              {benefit.icon}
            </Box>
            <Typography variant="h6" sx={{ mb: 2, color: '#1e7dbd', fontWeight: 700 }}>
              {benefit.title}
            </Typography>
            <Typography sx={{ color: '#666', fontSize: 15 }}>
              {benefit.desc}
            </Typography>
          </Paper>
        ))}
      </Box>
    </Box>
  </Box>
);

export default BenefitsSection; 