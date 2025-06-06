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
  <Box sx={{ py: 8, position: 'relative', overflow: 'hidden' }}>
    {/* Паттерн из кругов */}
    <Box sx={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none' }}>
      <svg width="100%" height="100%" viewBox="0 0 1200 320" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', left: 0, top: 0 }}>
        <circle cx="180" cy="60" r="48" fill="#1e7dbd" fillOpacity="0.08">
          <animate attributeName="r" values="48;52;48" dur="4s" repeatCount="indefinite" />
          <animate attributeName="fillOpacity" values="0.08;0.12;0.08" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="1000" cy="100" r="60" fill="#f2aa8d" fillOpacity="0.09">
          <animate attributeName="r" values="60;64;60" dur="5s" repeatCount="indefinite" />
          <animate attributeName="fillOpacity" values="0.09;0.13;0.09" dur="5s" repeatCount="indefinite" />
        </circle>
        <circle cx="300" cy="260" r="36" fill="#f2aa8d" fillOpacity="0.08">
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
        <circle cx="700" cy="280" r="54" fill="#f2aa8d" fillOpacity="0.07">
          <animate attributeName="r" values="54;58;54" dur="5s" repeatCount="indefinite" />
          <animate attributeName="fillOpacity" values="0.07;0.11;0.07" dur="5s" repeatCount="indefinite" />
        </circle>
      </svg>
    </Box>
    <Typography variant="h4" textAlign="center" sx={{ mb: 6, fontWeight: 700, color: '#1e7dbd', zIndex: 2, position: 'relative' }}>
      С нами выгодно
    </Typography>
    <Box sx={{ maxWidth: 1200, mx: 'auto', px: 2, position: 'relative', zIndex: 2 }}>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' }, gap: 4 }}>
        {benefits.map((benefit, index) => (
          <Paper
            key={index}
            elevation={0}
            sx={{
              p: 3,
              borderRadius: 4,
              bgcolor: '#fff',
              boxShadow: '0 4px 24px 0 rgba(30,125,189,0.13)',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 8px 32px 0 rgba(30,125,189,0.18)',
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
              {benefit.icon}
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
                {benefit.title}
              </Typography>
              <Typography sx={{ color: '#64748b', fontSize: 15 }}>
                {benefit.desc}
              </Typography>
            </Box>
          </Paper>
        ))}
      </Box>
    </Box>
  </Box>
);

export default BenefitsSection; 