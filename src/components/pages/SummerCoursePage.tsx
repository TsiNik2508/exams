import { Box, Container, Typography, Button, Paper, Slide } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import React, { useState } from 'react';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import GroupsIcon from '@mui/icons-material/Groups';
import SpeedIcon from '@mui/icons-material/Speed';
import ScheduleIcon from '@mui/icons-material/Schedule';
import DevicesIcon from '@mui/icons-material/Devices';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import AssessmentIcon from '@mui/icons-material/Assessment';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import PopupForm from '../common/PopupForm';

const styles = {
  pageWrapper: {
    py: { xs: 6, md: 8 },
    backgroundColor: '#f8fafc',
  },
  hero: {
    textAlign: 'center',
    mb: { xs: 8, md: 10 },
    mt: { xs: 4, md: 6 },
  },
  heroTitleBox: {
    display: 'inline-block',
  },
  heroTitle: {
    fontWeight: 700,
    color: '#1e7dbd',
  },
  section: {
    mb: { xs: 8, md: 10 },
  },
  sectionTitle: {
    fontWeight: 700,
    color: '#1e7dbd',
    textAlign: 'center',
    mb: 4,
  },
  list: {
    maxWidth: 700,
    mx: 'auto',
  },
  listItem: {
    p: { xs: 2, md: 2.5 },
    mb: 2,
    borderRadius: '24px 8px 24px 8px',
    boxShadow: '0 8px 30px rgba(30,125,189,0.1)',
    background: '#fff',
    transition: 'all 0.3s ease',
    '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: '0 12px 40px rgba(30,125,189,0.15)',
    }
  },
  listItemIcon: {
    minWidth: 'auto',
    mr: 2.5,
    color: '#1e7dbd',
    alignSelf: 'center',
    background: 'linear-gradient(135deg, #e3f2fd 0%, #f0f9ff 100%)',
    borderRadius: '12px',
    p: 1.2,
    boxShadow: '0 4px 12px rgba(30,125,189,0.1)',
  },
  listItemText: {
    fontSize: { xs: '1.1rem', md: '1.2rem' },
    color: '#334155',
    fontWeight: 500,
  },
  priceSection: {
    mt: { xs: 8, md: 12 },
    py: { xs: 5, md: 6 },
    background: '#fff',
    borderRadius: '24px',
    textAlign: 'center',
    border: `3px solid #1e7dbd`,
    boxShadow: '0 10px 40px rgba(30,125,189,0.1)',
    transition: 'all 0.3s ease',
     '&:hover': {
        transform: 'translateY(-6px)',
        boxShadow: '0 16px 50px rgba(30,125,189,0.15)',
        borderColor: '#f2aa8d',
    }
  },
  priceTextWrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 2,
      my: 2,
  },
  priceText: {
    fontWeight: 'bold',
    color: '#0d4a6b',
    lineHeight: 1,
  },
  button: {
    background: '#1e7dbd',
    color: 'white',
    px: { xs: 4, md: 5 },
    py: { xs: 1.5, md: 2 },
    borderRadius: '12px',
    fontSize: '1.1rem',
    fontWeight: 600,
    textTransform: 'none',
    boxShadow: '0 4px 16px rgba(30,125,189,0.25)',
    mt: 3,
    transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
    '&:hover': {
      background: '#f2aa8d',
      transform: 'translateY(-3px)',
      boxShadow: '0 8px 20px rgba(242,170,141,0.3)',
    },
  },
  whatIsItCard: {
    display: 'flex',
    alignItems: 'center',
    p: { xs: 2, md: 2.5 },
    mb: 2,
    borderRadius: '24px',
    boxShadow: '0 8px 30px rgba(30,125,189,0.08)',
    background: '#fff',
    transition: 'all 0.3s ease',
    '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: '0 12px 40px rgba(30,125,189,0.12)',
    }
  },
  whatIsItIconWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 50,
    height: 50,
    borderRadius: '50%',
    mr: 2.5,
    background: 'linear-gradient(135deg, #e3f2fd 0%, #f0f9ff 100%)',
  },
  whatYouGetContainer: {
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
    gap: 2.5,
  },
  whatYouGetCard: {
    p: { xs: 2, md: 2.5 },
    textAlign: 'center',
    borderRadius: '16px',
    background: '#fff',
    boxShadow: '0 8px 30px rgba(30,125,189,0.08)',
    transition: 'all 0.3s ease',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid transparent',
    '&:hover': {
        transform: 'translateY(-6px)',
        boxShadow: '0 12px 40px rgba(30,125,189,0.2)',
        borderColor: '#1e7dbd',
        '& .MuiSvgIcon-root': {
            transform: 'scale(1.15)',
            color: '#1e7dbd',
       }
    }
  },
  whatYouGetIcon: {
    color: '#f2aa8d',
    fontSize: 40,
    mb: 1.5,
    transition: 'transform 0.3s ease, color 0.3s ease',
  },
  whatYouGetText: {
    color: '#334155',
    fontWeight: 500,
    fontSize: '0.95rem'
  },
};

const AnimateOnScroll = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} style={{ height: '100%' }}>
      <Slide direction="up" in={inView} timeout={500 + delay}>
        <Box sx={{ height: '100%' }}>{children}</Box>
      </Slide>
    </div>
  );
};

const whatIsItItems = [
  { text: 'Возможность заранее подготовиться к ЕГЭ и ОГЭ для 9-10 класса', icon: <TrendingUpIcon />, stripe: '#1e7dbd' },
  { text: 'Подтянуть успеваемость в школе для 5-8 класса', icon: <AutoAwesomeIcon />, stripe: '#f2aa8d' },
  { text: 'Группы до 8 человек', icon: <GroupsIcon />, stripe: '#1e7dbd' },
  { text: '2 недели интенсивных и интересных занятий', icon: <SpeedIcon />, stripe: '#f2aa8d' },
  { text: 'Занятия 3 раза в неделю по 2 часа', icon: <ScheduleIcon />, stripe: '#1e7dbd' },
];

const whatYouGetItems = [
  { text: 'Занятия проходят как очно, так и онлайн', icon: <DevicesIcon /> },
  { text: 'Домашние работы с проверкой от эксперта', icon: <FactCheckIcon /> },
  { text: 'Входное и итоговое тестирование', icon: <AssessmentIcon /> },
  { text: 'Контроль результата', icon: <TrackChangesIcon /> },
];


const SummerCoursePage = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <Box sx={styles.pageWrapper}>
      <Container maxWidth="md">
        <Box sx={styles.hero}>
            <Box sx={styles.heroTitleBox}>
                <Typography variant="h2" component="h1" sx={styles.heroTitle}>
                    Каникулы с <Box component="span" sx={{
                        color: '#f2aa8d',
                        display: 'inline-block',
                        animation: 'pulse 2.5s ease-in-out infinite',
                        '@keyframes pulse': {
                            '0%': { transform: 'scale(1)' },
                            '50%': { transform: 'scale(1.05)' },
                            '100%': { transform: 'scale(1)' },
                        }
                    }}>Эрудит</Box>
                </Typography>
            </Box>
        </Box>
        
        <Box sx={styles.section}>
            <AnimateOnScroll>
                <Typography variant="h3" component="h2" sx={styles.sectionTitle}>
                    Что это?
                </Typography>
            </AnimateOnScroll>
            <Box sx={{ maxWidth: 700, mx: 'auto' }}>
                {whatIsItItems.map((item, index) => (
                    <AnimateOnScroll key={index} delay={index * 100}>
                        <Paper sx={{...styles.whatIsItCard, borderLeft: `6px solid ${item.stripe}`}}>
                            <Box sx={styles.whatIsItIconWrapper}>
                                {React.cloneElement(item.icon, { sx: { color: item.stripe, fontSize: 28 } })}
                            </Box>
                            <Typography sx={styles.listItemText}>{item.text}</Typography>
                        </Paper>
                    </AnimateOnScroll>
                ))}
            </Box>
        </Box>

        <Box sx={styles.section}>
            <AnimateOnScroll delay={300}>
                <Typography variant="h3" component="h2" sx={styles.sectionTitle}>
                    Что вы получаете
                </Typography>
            </AnimateOnScroll>
            <Box sx={styles.whatYouGetContainer}>
                {whatYouGetItems.map((item, index) => (
                <AnimateOnScroll key={index} delay={index * 100}>
                    <Paper sx={styles.whatYouGetCard}>
                        {React.cloneElement(item.icon, { sx: styles.whatYouGetIcon })}
                        <Typography sx={styles.whatYouGetText}>{item.text}</Typography>
                    </Paper>
                </AnimateOnScroll>
                ))}
            </Box>
        </Box>

        <AnimateOnScroll delay={500}>
            <Box sx={styles.priceSection}>
            <Typography variant="h3" component="h2" sx={{ fontWeight: 700, color: '#1e7dbd' }}>
                Тариф
            </Typography>
            <Box sx={styles.priceTextWrapper}>
                <Typography variant="h2" component="p" sx={styles.priceText}>
                    6000 ₽
                </Typography>
            </Box>
            <Typography variant="h6" color="text.secondary">
                за 1 курс
            </Typography>
            <Button 
              variant="contained" 
              size="large" 
              sx={styles.button}
              onClick={() => setPopupOpen(true)}
            >
                Записаться
            </Button>
            </Box>
        </AnimateOnScroll>

      </Container>

      {/* Попап с формой */}
      <PopupForm
        open={popupOpen}
        onClose={() => setPopupOpen(false)}
        course="Летний интенсив"
        section="Летние курсы"
        formKey="summer-course"
      />
    </Box>
  );
};

export default SummerCoursePage; 