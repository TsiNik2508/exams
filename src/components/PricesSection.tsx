import { Box, Typography, Card, CardContent, Button, Chip } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

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
    icon: <MenuBookIcon sx={{ color: '#f2aa8d', fontSize: 36 }} />, 
    benefits: ['Индивидуальный подход', 'Домашние задания', 'Поддержка преподавателя'],
  },
  {
    title: 'Летние курсы',
    desc: 'Интенсивы',
    price: '2500 руб/мес',
    icon: <WbSunnyIcon sx={{ color: '#f2aa8d', fontSize: 36 }} />, 
    badge: 'Выгодно',
    benefits: ['Быстрый прогресс', 'Интерактивные занятия', 'Сертификат по итогам'],
  },
];

const PricesSection = () => (
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
    <Typography variant="h4" textAlign="center" sx={{ mb: 4, fontWeight: 700, color: '#1e7dbd', zIndex: 2, position: 'relative' }}>Стоимость обучения</Typography>
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 5, position: 'relative', zIndex: 2 }}>
      {prices.map((p, i) => (
        <Card
          key={i}
          sx={{
            background: '#fff',
            borderRadius: 5,
            boxShadow: '0 8px 32px 0 rgba(30,125,189,0.13)',
            border: 'none',
            p: 4,
            m: 2,
            minWidth: 260,
            maxWidth: 320,
            flex: '1 1 260px',
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
              background: i % 2 === 0
                ? 'linear-gradient(90deg, #1e7dbd 60%, #f2aa8d 100%)'
                : 'linear-gradient(90deg, #f2aa8d 60%, #1e7dbd 100%)',
              borderTopLeftRadius: 5,
              borderTopRightRadius: 5,
              zIndex: 2,
            },
            '&:hover': {
              transform: 'translateY(-8px) scale(1.04)',
              boxShadow: '0 16px 48px 0 rgba(30,125,189,0.18)',
              background: '#e3f2fd',
            },
          }}
        >
          <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 0 }}>
            <Box sx={{ mb: 1.5 }}>{p.icon}</Box>
            <Typography variant="h5" sx={{ color: '#1e7dbd', fontWeight: 800, mb: 1 }}>{p.title}</Typography>
            {p.badge && (
              <Chip label={p.badge} sx={{ bgcolor: '#f2aa8d', color: '#fff', fontWeight: 700, fontSize: 13, mb: 1, borderRadius: 2 }} />
            )}
            <Typography sx={{ color: '#222831', mb: 2 }}>{p.desc}</Typography>
            <Typography sx={{ fontWeight: 800, color: '#f2aa8d', fontSize: 28, mb: 2 }}>{p.price}</Typography>
            <Box component="ul" sx={{ pl: 2, mb: 2, width: '100%' }}>
              {p.benefits && p.benefits.map((b, j) => (
                <Typography component="li" key={j} sx={{ color: '#1e7dbd', fontSize: 15, mb: 0.5, fontWeight: 500, listStyle: 'disc' }}>{b}</Typography>
              ))}
            </Box>
            <Button
              variant="contained"
              fullWidth
              sx={{
                background: 'linear-gradient(90deg, #1e7dbd 60%, #f2aa8d 100%)',
                color: '#fff',
                fontWeight: 700,
                borderRadius: 2,
                fontSize: 17,
                py: 1.1,
                boxShadow: '0 4px 24px 0 rgba(30,125,189,0.13)',
                transition: 'background 0.2s, color 0.2s, box-shadow 0.2s, transform 0.2s',
                '&:hover': {
                  background: 'linear-gradient(90deg, #f2aa8d 60%, #1e7dbd 100%)',
                  color: '#fff',
                  boxShadow: '0 8px 32px 0 rgba(242,170,141,0.18)',
                  transform: 'scale(1.03)',
                },
                mt: 1,
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

export default PricesSection; 