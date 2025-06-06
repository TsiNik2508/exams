import React, { memo } from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HeroPattern } from '../ui/HeroPattern';

const styles = {
  container: {
    py: { xs: 12, md: 14 },
    position: 'relative',
    overflow: 'hidden',
  },
  content: {
    position: 'relative',
    zIndex: 2,
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    alignItems: 'center',
    gap: { xs: 4, md: 8 },
  },
  leftSection: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
  },
  rightSection: {
    flex: 1,
    position: 'relative',
  },
  title: {
    fontWeight: 800,
    fontSize: { xs: '2.5rem', md: '3.5rem' },
    lineHeight: 1.2,
    color: '#1e7dbd',
    textAlign: { xs: 'center', md: 'left' },
  },
  subtitle: {
    color: '#64748b',
    fontSize: { xs: '1.1rem', md: '1.25rem' },
    lineHeight: 1.6,
    textAlign: { xs: 'center', md: 'left' },
    maxWidth: 600,
  },
  button: {
    mt: 'auto',
  },
  imageWrapper: {
    position: 'relative',
    width: '100%',
    maxWidth: 500,
    mx: 'auto',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: -20,
      left: -20,
      right: -20,
      bottom: -20,
      background: '#1e7dbd10',
      borderRadius: 8,
      zIndex: -1,
    },
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: 8,
    boxShadow: '0 20px 40px rgba(30,125,189,0.15)',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'scale(1.02)',
      boxShadow: '0 24px 48px rgba(30,125,189,0.2)',
    },
  },
  features: {
    display: 'flex',
    gap: 3,
    mt: 4,
    flexWrap: 'wrap',
    justifyContent: { xs: 'center', md: 'flex-start' },
  },
  featureItem: {
    display: 'flex',
    alignItems: 'center',
    gap: 1,
    color: '#1e7dbd',
    fontWeight: 600,
    fontSize: '1.1rem',
  },
};

const HeroSection: React.FC = memo(() => {
  const navigate = useNavigate();

  return (
    <Box sx={styles.container}>
      <HeroPattern />
      <Container maxWidth="lg">
        <Box sx={styles.content}>
          <Box sx={styles.leftSection}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Typography variant="h1" sx={styles.title}>
                Подготовка к ЕГЭ и ОГЭ
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Typography sx={styles.subtitle}>
                Индивидуальный подход к каждому ученику, мини-группы до 8 человек. 
                Наши преподаватели помогут вам достичь максимального результата на экзаменах.
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
                onClick={() => navigate('/trial')}
                sx={styles.button}
              >
                Пробный урок
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Box sx={styles.features}>
                <Box sx={styles.featureItem}>✓ Индивидуальный подход</Box>
                <Box sx={styles.featureItem}>✓ Опытные преподаватели</Box>
                <Box sx={styles.featureItem}>✓ Удобный формат</Box>
              </Box>
            </motion.div>
          </Box>

          <Box sx={styles.rightSection}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Box sx={styles.imageWrapper}>
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop&q=60"
                  alt="Подготовка к экзаменам"
                  sx={styles.image}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection; 