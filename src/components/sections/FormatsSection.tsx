import { Box, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import GroupsIcon from '@mui/icons-material/Groups';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

const formats = [
  {
    title: 'Очно',
    desc: 'Занятия в мини-группах в центре',
    icon: <HomeIcon sx={{ color: '#1e7dbd', fontSize: 36 }} />,
  },
  {
    title: 'Онлайн',
    desc: 'Удобная платформа, поддержка преподавателя',
    icon: <LaptopMacIcon sx={{ color: '#1e7dbd', fontSize: 36 }} />,
  },
  {
    title: 'Мини-группы',
    desc: 'До 8 человек, внимание каждому',
    icon: <GroupsIcon sx={{ color: '#1e7dbd', fontSize: 36 }} />,
  },
  {
    title: 'Контроль',
    desc: 'Постоянная обратная связь и поддержка',
    icon: <VerifiedUserIcon sx={{ color: '#1e7dbd', fontSize: 36 }} />,
  },
];

const FormatsSection = () => (
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
    <Typography variant="h4" textAlign="center" sx={{ mb: 4, fontWeight: 700, color: '#1e7dbd', position: 'relative', zIndex: 2 }}>Наши форматы подготовки</Typography>
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 5 }}>
      {formats.map((f, i) => (
        <Box
          key={i}
          sx={{
            background: '#fff',
            borderRadius: 5,
            boxShadow: '0 6px 32px 0 rgba(30,125,189,0.10)',
            border: '2.5px solid #1e7dbd',
            minWidth: 220,
            maxWidth: 260,
            flex: '1 1 220px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            p: 4,
            m: 2,
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-8px) scale(1.04)',
              boxShadow: '0 12px 36px 0 rgba(30,125,189,0.16)',
              borderColor: '#f2aa8d',
              '& .MuiSvgIcon-root': {
                color: '#f2aa8d',
              },
              '& .MuiTypography-root': {
                color: '#f2aa8d',
              },
            },
          }}
        >
          <Box sx={{ mb: 1.5 }}>{f.icon}</Box>
          <Typography variant="h6" sx={{ color: '#1e7dbd', fontWeight: 700, mb: 1 }}>{f.title}</Typography>
          <Typography sx={{ color: '#222831', fontSize: 15, textAlign: 'center' }}>{f.desc}</Typography>
        </Box>
      ))}
    </Box>
    {/* Видео под карточками */}
    <Box
      sx={{
        mt: { xs: 6, md: 8 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          width: { xs: '100%', sm: 420, md: 540 },
          maxWidth: '100%',
          borderRadius: 5,
          background: '#fff',
          boxShadow: '0 8px 32px 0 rgba(30,125,189,0.13)',
          position: 'relative',
          overflow: 'hidden',
          border: '2.5px solid #1e7dbd',
          mb: 2,
          p: 0,
          display: 'flex',
          alignItems: 'stretch',
        }}
      >
        <Box sx={{ width: '100%', height: { xs: 200, sm: 260 }, borderRadius: 0, overflow: 'hidden', display: 'flex' }}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Видео-отзыв"
            frameBorder="0"
            allowFullScreen
            style={{ display: 'block', width: '100%', height: '100%', border: 0 }}
          ></iframe>
        </Box>
      </Box>
      <Typography sx={{ color: '#1e7dbd', fontWeight: 700, fontSize: 18, mt: 1 }}>Видео-отзыв</Typography>
    </Box>
  </Box>
);

export default FormatsSection; 