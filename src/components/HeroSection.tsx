import { Box, Typography, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const HERO_PHOTO = 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=600&q=80'; // Группа учеников, Unsplash

const HeroSection = () => (
  <Box
    sx={{
      py: { xs: 8, md: 10 },
      px: { xs: 2, md: 0 },
      minHeight: { xs: 520, md: 540 },
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #e3f2fd 60%, #f2aa8d 100%)',
    }}
  >
    {/* SVG-паттерн из кругов */}
    <Box sx={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none' }}>
      <svg width="100%" height="100%" viewBox="0 0 1440 540" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', left: 0, top: 0 }}>
        <circle cx="200" cy="120" r="48" fill="#f2aa8d" fillOpacity="0.13" />
        <circle cx="1240" cy="80" r="32" fill="#1e7dbd" fillOpacity="0.10" />
        <circle cx="320" cy="420" r="36" fill="#1e7dbd" fillOpacity="0.10" />
        <circle cx="1100" cy="400" r="60" fill="#f2aa8d" fillOpacity="0.10" />
        <circle cx="720" cy="100" r="22" fill="#1e7dbd" fillOpacity="0.10" />
      </svg>
    </Box>
    {/* Фото — слева/снизу */}
    <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: { xs: 4, md: 0 }, zIndex: 2 }}>
      <Box sx={{ width: { xs: 260, sm: 320, md: 380 }, maxWidth: '100%' }}>
        <Box
          component="img"
          src={HERO_PHOTO}
          alt="Ученики"
          sx={{
            width: '100%',
            height: { xs: 200, sm: 260, md: 320 },
            objectFit: 'cover',
            borderRadius: 7,
            boxShadow: '0 8px 32px 0 rgba(30,125,189,0.13)',
            border: '6px solid #fff',
            outline: '3px solid #1e7dbd',
            outlineOffset: '-4px',
            background: '#fff',
            display: 'block',
          }}
        />
      </Box>
    </Box>
    {/* Текст и кнопка — справа/сверху */}
    <Box sx={{ flex: 1, zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'flex-start' }, justifyContent: 'center', pl: { md: 6 }, pr: { xs: 0, md: 4 } }}>
      <Typography
        variant="h2"
        sx={{
          fontWeight: 800,
          mb: 2,
          color: '#1e7dbd',
          fontSize: { xs: '2.2rem', md: '3.2rem' },
          letterSpacing: 0.5,
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        Занятия для школьников 5-11 класс
      </Typography>
      <Typography
        variant="h5"
        sx={{
          mb: 5,
          color: '#f2aa8d',
          fontWeight: 600,
          fontSize: { xs: 18, md: 24 },
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        Очно и онлайн, мини-группы, поддержка и мотивация
      </Typography>
      <Button
        variant="contained"
        size="large"
        endIcon={<ArrowForwardIcon />}
        sx={{
          background: 'linear-gradient(90deg, #1e7dbd 60%, #f2aa8d 100%)',
          color: '#fff',
          fontWeight: 700,
          borderRadius: 3,
          px: 5,
          py: 1.5,
          fontSize: 20,
          boxShadow: '0 4px 24px 0 rgba(30,125,189,0.13)',
          transition: 'background 0.2s, color 0.2s, box-shadow 0.2s, transform 0.2s',
          '&:hover': {
            background: 'linear-gradient(90deg, #f2aa8d 60%, #1e7dbd 100%)',
            color: '#fff',
            boxShadow: '0 8px 32px 0 rgba(242,170,141,0.18)',
            transform: 'scale(1.04)',
          },
        }}
      >
        Пробный урок
      </Button>
    </Box>
  </Box>
);

export default HeroSection; 