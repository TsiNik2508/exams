import { Box, Typography, Avatar, Chip } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GroupIcon from '@mui/icons-material/Group';
import ReviewsIcon from '@mui/icons-material/RateReview';
import { useEffect, useState } from 'react';

const stats = [
  { value: 7, label: 'лет успешной работы', icon: <AccessTimeIcon sx={{ color: '#1e7dbd' }} />, suffix: '' },
  { value: 80, label: '2 из 3 учеников сдали ЕГЭ на высокий балл', icon: <EmojiEventsIcon sx={{ color: '#f2aa8d' }} />, suffix: '+' },
  { value: 8, label: 'группы строго учеников', icon: <GroupIcon sx={{ color: '#1e7dbd' }} />, prefix: 'до ' },
  { value: 700, label: 'честных отзывов', icon: <ReviewsIcon sx={{ color: '#f2aa8d' }} />, suffix: '+' },
];

function useCountUp(to: number, duration = 1200) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = Math.ceil(to / (duration / 16));
    const interval = setInterval(() => {
      start += step;
      if (start >= to) {
        setCount(to);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(interval);
  }, [to, duration]);
  return count;
}

type StatCardProps = {
  value: number;
  label: string;
  icon: React.ReactNode;
  prefix?: string;
  suffix?: string;
  colorIndex: number;
};

const StatCard = ({ value, label, icon, prefix, suffix, colorIndex }: StatCardProps) => {
  const count = useCountUp(value);
  return (
    <Box
      sx={{
        minWidth: 200,
        background: '#fff',
        borderRadius: 5,
        boxShadow: '0 6px 32px 0 rgba(30,125,189,0.10)',
        border: 'none',
        p: 4,
        m: 1,
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        transition: 'transform 0.2s, box-shadow 0.2s, background 0.2s',
        '&:before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: 6,
          background: colorIndex % 2 === 0
            ? 'linear-gradient(90deg, #1e7dbd 60%, #f2aa8d 100%)'
            : 'linear-gradient(90deg, #f2aa8d 60%, #1e7dbd 100%)',
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
          zIndex: 2,
        },
        '&:hover': {
          transform: 'translateY(-8px) scale(1.04)',
          boxShadow: '0 12px 36px 0 rgba(30,125,189,0.16)',
          background: '#e3f2fd',
        },
      }}
    >
      <Box sx={{ mb: 1.5, fontSize: 38 }}>{icon}</Box>
      <Typography variant="h3" sx={{ fontWeight: 800, color: colorIndex % 2 === 0 ? '#1e7dbd' : '#f2aa8d', mb: 0.5 }}>
        {prefix || ''}{count}{suffix || ''}
      </Typography>
      <Typography sx={{ color: '#222831', fontSize: 16, fontWeight: 500 }}>{label}</Typography>
    </Box>
  );
};

const StatsSection = () => (
  <Box sx={{ background: '#f5f6fa', py: 8, position: 'relative', overflow: 'hidden' }}>
    {/* Паттерн из кругов */}
    <Box sx={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none' }}>
      <svg width="100%" height="100%" viewBox="0 0 1200 320" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', left: 0, top: 0 }}>
        <circle cx="180" cy="60" r="32" fill="#1e7dbd" fillOpacity="0.07" />
        <circle cx="1000" cy="100" r="40" fill="#f2aa8d" fillOpacity="0.09" />
        <circle cx="300" cy="260" r="24" fill="#f2aa8d" fillOpacity="0.08" />
        <circle cx="900" cy="220" r="30" fill="#1e7dbd" fillOpacity="0.07" />
      </svg>
    </Box>
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: 4, position: 'relative', zIndex: 2 }}>
      {stats.map((s, i) => (
        <StatCard key={i} {...s} colorIndex={i} />
      ))}
      {/* Фото преподавателя */}
      <Box sx={{ minWidth: 200, textAlign: 'center', m: 1, position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Avatar
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="Преподаватель"
          sx={{
            width: 100,
            height: 100,
            mb: 1.5,
            boxShadow: '0 4px 16px 0 rgba(30,125,189,0.10)',
            border: '4px solid #fff',
            outline: '2px solid #1e7dbd',
            outlineOffset: '-2px',
            bgcolor: '#f5f9ff',
            objectFit: 'cover',
          }}
        />
        <Chip
          label="Основатель"
          color="primary"
          sx={{ bgcolor: '#1e7dbd', color: '#fff', fontWeight: 700, fontSize: 15, borderRadius: 2, mb: 1 }}
        />
        <Typography variant="subtitle1" sx={{ color: '#1e7dbd', fontWeight: 700, fontSize: 18 }}>
          Алексей Козлов
        </Typography>
        <Typography sx={{ color: '#f2aa8d', fontWeight: 500, fontSize: 15 }}>
          Преподаватель математики
        </Typography>
      </Box>
    </Box>
  </Box>
);

export default StatsSection; 