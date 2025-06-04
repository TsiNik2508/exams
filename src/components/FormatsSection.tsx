import { Box, Typography, Chip } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import GroupsIcon from '@mui/icons-material/Groups';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

const formats = [
  {
    title: 'Очно',
    desc: 'Занятия в мини-группах в центре',
    icon: <HomeIcon sx={{ color: '#1e7dbd', fontSize: 36 }} />,
    color: '#1e7dbd',
  },
  {
    title: 'Онлайн',
    desc: 'Удобная платформа, поддержка преподавателя',
    icon: <LaptopMacIcon sx={{ color: '#f2aa8d', fontSize: 36 }} />,
    color: '#f2aa8d',
  },
  {
    title: 'Мини-группы',
    desc: 'До 8 человек, внимание каждому',
    icon: <GroupsIcon sx={{ color: '#1e7dbd', fontSize: 36 }} />,
    color: '#1e7dbd',
    badge: 'Популярно',
  },
  {
    title: 'Контроль',
    desc: 'Постоянная обратная связь и поддержка',
    icon: <VerifiedUserIcon sx={{ color: '#f2aa8d', fontSize: 36 }} />,
    color: '#f2aa8d',
  },
];

const FormatsSection = () => (
  <Box sx={{ py: 8, background: '#fafdff', position: 'relative', overflow: 'hidden' }}>
    <Typography variant="h4" textAlign="center" sx={{ mb: 4, fontWeight: 700, color: '#1e7dbd' }}>Наши форматы подготовки</Typography>
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 5 }}>
      {formats.map((f, i) => (
        <Box
          key={i}
          sx={{
            background: '#fff',
            borderRadius: 5,
            boxShadow: '0 6px 32px 0 rgba(30,125,189,0.10)',
            border: `2.5px solid ${f.color}`,
            minWidth: 220,
            maxWidth: 260,
            flex: '1 1 220px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            p: 4,
            m: 2,
            transition: 'transform 0.2s, box-shadow 0.2s, border 0.2s',
            '&:hover': {
              transform: 'translateY(-8px) scale(1.04)',
              boxShadow: '0 12px 36px 0 rgba(30,125,189,0.16)',
              borderColor: '#f2aa8d',
            },
          }}
        >
          <Box sx={{ mb: 1.5 }}>{f.icon}</Box>
          <Typography variant="h6" sx={{ color: f.color, fontWeight: 700, mb: 1 }}>{f.title}</Typography>
          {f.badge && (
            <Chip label={f.badge} sx={{ bgcolor: '#f2aa8d', color: '#fff', fontWeight: 700, fontSize: 13, mb: 1, borderRadius: 2 }} />
          )}
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