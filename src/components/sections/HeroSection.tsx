import React from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import StarIcon from '@mui/icons-material/Star';
import SchoolIcon from '@mui/icons-material/School';
import GroupsIcon from '@mui/icons-material/Groups';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import { motion } from 'framer-motion';

const advantages = [
  {
    icon: <EmojiEventsIcon />, color: '#1e7dbd', stripe: '#1e7dbd', text: '3 года на рынке',
  },
  {
    icon: <StarIcon />, color: '#f2aa8d', stripe: '#f2aa8d', text: 'Каждый второй сдал ЕГЭ на 80+ баллов',
  },
  {
    icon: <WorkspacePremiumIcon />, color: '#1e7dbd', stripe: '#1e7dbd', text: 'Профессиональные экзамены ЕГЭ',
  },
  {
    icon: <SchoolIcon />, color: '#f2aa8d', stripe: '#f2aa8d', text: 'Молодые преподаватели',
  },
  {
    icon: <Diversity3Icon />, color: '#1e7dbd', stripe: '#1e7dbd', text: 'Особый подход к каждому ученику',
  },
  {
    icon: <GroupsIcon />, color: '#f2aa8d', stripe: '#f2aa8d', text: 'Группы до 8 человек',
  },
];

const styles = {
  container: {
    py: { xs: 10, md: 16 },
    position: 'relative',
    overflow: 'hidden',
  },
  content: {
    position: 'relative',
    zIndex: 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 4,
  },
  title: {
    fontWeight: 900,
    fontSize: { xs: '2.2rem', md: '3.2rem' },
    color: '#1e7dbd',
    textAlign: 'center',
    lineHeight: 1.13,
    mb: 0.5,
  },
  titleAccentBlue: {
    color: '#1e7dbd',
    display: 'inline',
    fontWeight: 900,
  },
  titleAccentOrange: {
    color: '#f2aa8d',
    display: 'inline',
    fontWeight: 900,
  },
  subtitle: {
    color: '#64748b',
    fontSize: { xs: '1.15rem', md: '1.35rem' },
    lineHeight: 1.6,
    textAlign: 'center',
    maxWidth: 600,
    mb: 2,
  },
  subtitleAccent: {
    color: '#1e7dbd',
    fontWeight: 700,
    display: 'inline',
  },
  badgeRow: {
    display: 'flex',
    gap: 1.5,
    mb: 2,
    flexWrap: 'wrap',
    justifyContent: 'center',
    mt: 1,
  },
  badge: {
    fontWeight: 700,
    fontSize: '0.95rem',
    px: 2,
    py: 0.5,
    borderRadius: 2,
    boxShadow: '0 1px 6px rgba(30,125,189,0.08)',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 1,
    bgcolor: '#1e7dbd',
    color: '#fff',
    letterSpacing: 0.3,
    textTransform: 'uppercase',
    minHeight: 28,
    height: 28,
  },
  giftBadge: {
    bgcolor: '#e3f0fa',
    color: '#1e7dbd',
    fontWeight: 700,
    fontSize: '0.95rem',
    px: 2,
    py: 0.5,
    borderRadius: 2,
    boxShadow: '0 1px 6px rgba(30,125,189,0.06)',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 1,
    letterSpacing: 0.3,
    textTransform: 'uppercase',
    minHeight: 28,
    height: 28,
  },
  advGrid: {
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
    gap: { xs: 2, md: 3 },
    width: '100%',
    maxWidth: 1000,
    mt: 2,
  },
  advCard: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 1.5,
    bgcolor: '#fff',
    borderRadius: 4,
    boxShadow: '0 8px 25px 0 rgba(30,125,189,0.15), 0 4px 12px 0 rgba(0,0,0,0.1)',
    px: 2.5,
    py: 1.5,
    minHeight: 90,
    maxHeight: 90,
    height: 90,
    position: 'relative',
    overflow: 'hidden',
    textAlign: 'left',
    border: 'none',
    transition: 'box-shadow 0.3s, transform 0.3s',
    '&:hover': {
      boxShadow: '0 12px 35px 0 rgba(30,125,189,0.25), 0 6px 20px 0 rgba(0,0,0,0.15)',
      transform: 'scale(1.025)',
    },
  },
  advCardInner: {
    display: 'flex',
    alignItems: 'center',
    gap: 1.5,
    width: '100%',
    px: 2,
    py: 0,
    position: 'relative',
    zIndex: 3,
  },
  advIconCircle: {
    minWidth: 38,
    minHeight: 38,
    maxWidth: 38,
    maxHeight: 38,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 22,
    boxShadow: '0 1px 4px rgba(30,125,189,0.08)',
    mr: 1.5,
    zIndex: 3,
    bgcolor: '#f7fafd',
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.97, y: 18 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, type: 'spring', stiffness: 120 },
  }),
};

const HeroSection: React.FC = () => {
  return (
    <Box sx={styles.container}>
      {/* Стикеры в углах для десктопа */}
      <Box sx={{ 
        display: { xs: 'none', lg: 'flex' },
        position: 'absolute', 
        top: { lg: 160, xl: 140 },
        left: '3%',
        zIndex: 3,
        width: { lg: 110, xl: 120 },
        height: { lg: 110, xl: 120 },
        borderRadius: '50%',
        bgcolor: '#1e7dbd',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 20px rgba(30,125,189,0.2)',
        transition: 'transform 0.3s ease',
        '&:hover': { transform: 'scale(1.1)' }
      }}>
        <CardGiftcardIcon sx={{ 
          position: 'absolute', 
          fontSize: { lg: 50, xl: 60 }, 
          color: '#fff', 
          opacity: 0.3,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }} />
        <Typography sx={{ 
          color: '#fff',
          fontWeight: 700,
          fontSize: { lg: 10, xl: 11 },
          textAlign: 'center',
          lineHeight: 1.2,
          px: 1,
          position: 'relative',
          zIndex: 2,
          textShadow: '0 1px 3px rgba(0,0,0,0.3)'
        }}>
          Бесплатное пробное занятие
        </Typography>
      </Box>
      
      <Box sx={{ 
        display: { xs: 'none', lg: 'flex' },
        position: 'absolute', 
        bottom: { lg: 160, xl: 140 },
        right: '3%',
        zIndex: 3,
        width: { lg: 110, xl: 120 },
        height: { lg: 110, xl: 120 },
        borderRadius: '50%',
        bgcolor: '#f2aa8d',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 20px rgba(242,170,141,0.2)',
        transition: 'transform 0.3s ease',
        '&:hover': { transform: 'scale(1.1)' }
      }}>
        <CardGiftcardIcon sx={{ 
          position: 'absolute', 
          fontSize: { lg: 50, xl: 60 }, 
          color: '#fff', 
          opacity: 0.3,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }} />
        <Typography sx={{ 
          color: '#fff',
          fontWeight: 700,
          fontSize: { lg: 10, xl: 11 },
          textAlign: 'center',
          lineHeight: 1.2,
          px: 1,
          position: 'relative',
          zIndex: 2,
          textShadow: '0 1px 3px rgba(0,0,0,0.3)'
        }}>
          Подарок за друга
        </Typography>
      </Box>

      <Container maxWidth="lg">
        <Box sx={styles.content}>
          <Typography variant="h1" sx={{ ...styles.title, mt: { xs: 4, md: 0 }, fontSize: { xs: 28, md: 36 } }}>
            Подготовка к <span style={styles.titleAccentOrange}>ЕГЭ</span> и <span style={styles.titleAccentOrange}>ОГЭ</span>
          </Typography>
          
          {/* Стикеры для мобильной версии в виде плашек */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, flexDirection: 'row', gap: 2, mb: 3 }}>
            <Box sx={{ flex: 1, height: 60, borderRadius: '30px', bgcolor: '#1e7dbd', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', transition: 'transform 0.3s ease', '&:hover': { transform: 'translateY(-5px)' } }}>
              <CardGiftcardIcon sx={{ position: 'absolute', left: '50%', top: '50%', fontSize: 42, opacity: 0.13, color: '#fff', transform: 'translate(-50%, -50%)' }} />
              <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: 14, textAlign: 'center', zIndex: 2, lineHeight: 1.1, position: 'relative' }}>
                Бесплатное пробное занятие
              </Typography>
            </Box>
            <Box sx={{ flex: 1, height: 60, borderRadius: '30px', bgcolor: '#f2aa8d', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', transition: 'transform 0.3s ease', '&:hover': { transform: 'translateY(-5px)' } }}>
              <CardGiftcardIcon sx={{ position: 'absolute', left: '50%', top: '50%', fontSize: 42, opacity: 0.13, color: '#fff', transform: 'translate(-50%, -50%)' }} />
              <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: 14, textAlign: 'center', zIndex: 2, lineHeight: 1.1, position: 'relative' }}>
                Подарок за друга
              </Typography>
            </Box>
          </Box>
          
          <Typography variant="h2" sx={styles.subtitle}>
            <span style={styles.subtitleAccent}>Индивидуальный подход</span>, <span style={styles.subtitleAccent}>мини-группы</span>, молодые преподаватели и реальные результаты.<br />
            Поможем сдать экзамены на <span style={styles.subtitleAccent}>80+ баллов</span> и поступить в вуз мечты!
          </Typography>
          <Box sx={styles.advGrid}>
            {advantages.map((adv, i) => (
              <Paper
                key={i}
                elevation={0}
                sx={{
                  ...styles.advCard,
                  borderLeft: `8px solid ${adv.stripe}`,
                }}
                component={motion.div}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={i}
              >
                <Box sx={styles.advCardInner}>
                  <Box sx={{ ...styles.advIconCircle }}>
                    {React.cloneElement(adv.icon, { sx: { color: adv.color, fontSize: 36 } })}
                  </Box>
                  <Typography sx={{ fontWeight: 600, fontSize: { xs: 15, md: 16 }, lineHeight: 1.3 }}>{adv.text}</Typography>
                </Box>
              </Paper>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;