import React, { memo, lazy, Suspense } from 'react';
import { Box, Container, Typography, IconButton, Link, Skeleton } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import { Facebook } from '@mui/icons-material';

// Ленивая загрузка логотипа
const Logo = lazy(() => import('./Logo'));

const socialLinks = [
  { icon: <WhatsAppIcon />, href: 'https://wa.me/your_number' },
  { icon: <TelegramIcon />, href: 'https://t.me/your_username' },
  { icon: <Facebook />, href: 'https://vk.com/your_group' },
];

const footerLinks = [
  { text: 'Курсы ЕГЭ', href: '/ege' },
  { text: 'Курсы ОГЭ', href: '/oge' },
  { text: '5-8 класс', href: '/middle-school' },
  { text: '1-4 класс', href: '/elementary-school' },
  { text: 'Цены', href: '/prices' },
];

const styles = {
  footer: {
    bgcolor: '#1e293b',
    color: '#fff',
    py: 6,
    mt: 'auto',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 2,
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: 2,
  },
  logo: {
    height: 44,
    width: 'auto',
  },
  title: {
    color: '#f2aa8d',
    fontWeight: 700,
  },
  description: {
    maxWidth: 500,
    color: '#cbd5e1',
    mb: 2,
  },
  socialContainer: {
    display: 'flex',
    gap: 1,
    mb: 2,
  },
  socialButton: {
    color: '#1e7dbd',
    '&:hover': {
      color: '#f2aa8d',
    },
  },
  linksContainer: {
    display: 'flex',
    gap: 3,
    flexWrap: 'wrap',
    justifyContent: 'center',
    mb: 2,
  },
  link: {
    color: '#f2aa8d',
    fontWeight: 500,
    fontSize: 15,
    '&:hover': {
      color: '#f8c3b0',
    },
  },
  copyright: {
    color: '#64748b',
    mt: 2,
  },
};

const Footer = memo(() => (
  <Box component="footer" sx={styles.footer}>
    <Container maxWidth="lg">
      <Box sx={styles.container}>
        <Box sx={styles.logoContainer}>
          <Suspense fallback={<Skeleton variant="rectangular" width={44} height={44} />}>
            <Logo />
          </Suspense>
          <Typography variant="h6" sx={styles.title}>
            Образовательный центр Эрудит
          </Typography>
        </Box>

        <Typography variant="body2" align="center" sx={styles.description}>
          Мы помогаем школьникам достичь высоких результатов в учебе и успешно сдать экзамены. Наши опытные преподаватели используют современные методики обучения.
        </Typography>

        <Box sx={styles.socialContainer}>
          {socialLinks.map((link, index) => (
            <IconButton
              key={index}
              href={link.href}
              target="_blank"
              sx={styles.socialButton}
            >
              {link.icon}
            </IconButton>
          ))}
        </Box>

        <Box sx={styles.linksContainer}>
          {footerLinks.map((link) => (
            <Link
              key={link.text}
              href={link.href}
              underline="hover"
              sx={styles.link}
            >
              {link.text}
            </Link>
          ))}
        </Box>

        <Typography variant="body2" align="center" sx={styles.copyright}>
          © {new Date().getFullYear()} Все права защищены
        </Typography>
      </Box>
    </Container>
  </Box>
));

Footer.displayName = 'Footer';

export default Footer; 