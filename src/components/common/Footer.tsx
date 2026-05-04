import { memo, lazy, Suspense } from 'react';
import { Box, Container, Typography, Skeleton } from '@mui/material';

// Ленивая загрузка логотипа
const Logo = lazy(() => import('./Logo'));

const contactLinks = [
  { text: 'WhatsApp', href: 'https://wa.me/79522817749' },
  { text: 'VK', href: 'https://vk.com/im?entrypoint=community_page&media=&sel=-229911521' },
  { text: 'Telegram', href: 'https://t.me/prohor_13' },
  { text: 'Email', href: 'mailto:erudite_edu@mail.ru' },
];

const legalLinks = [
  { text: 'Пользовательское соглашение', href: '/terms' },
  { text: 'Политика конфиденциальности', href: '/privacy' },
];

const styles = {
  footer: {
    bgcolor: '#1e293b',
    color: '#fff',
    py: 6,
    mt: 'auto',
    position: 'relative',
    zIndex: 2,
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
    display: 'inline-block',
    padding: '4px 8px',
    borderRadius: '4px',
    transition: 'all 0.3s ease',
    '&:hover': {
      color: '#f8c3b0',
      backgroundColor: 'rgba(242,170,141,0.1)',
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

        <Box sx={styles.linksContainer}>
          {contactLinks.map((link) => (
            <Box
              key={link.text}
              component="a"
              href={link.href}
              target={link.text === 'Email' ? undefined : '_blank'}
              rel={link.text === 'Email' ? undefined : 'noopener noreferrer'}
              sx={{
                ...styles.link,
                textDecoration: 'none',
                cursor: 'pointer',
                '&:hover': {
                  ...styles.link['&:hover'],
                  textDecoration: 'underline',
                }
              }}
            >
              {link.text}
            </Box>
          ))}
        </Box>

        <Box sx={{ ...styles.linksContainer, mb: 1 }}>
          {legalLinks.map((link) => (
            <Box
              key={link.text}
              component="a"
              href={link.href}
              sx={{
                ...styles.link,
                textDecoration: 'none',
                cursor: 'pointer',
                '&:hover': {
                  ...styles.link['&:hover'],
                  textDecoration: 'underline',
                }
              }}
            >
              {link.text}
            </Box>
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