import { Box, Container, Typography, IconButton, Link } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import { Facebook } from '@mui/icons-material';
import logo from '../logo/logo-erudit.png';

const Footer = () => (
  <Box component="footer" sx={{ bgcolor: '#1e293b', color: '#fff', py: 6, mt: 'auto' }}>
    <Container maxWidth="lg">
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <img src={logo} alt="Эрудит" style={{ height: 44, width: 'auto' }} />
          <Typography variant="h6" sx={{ color: '#f2aa8d', fontWeight: 700 }}>
            Образовательный центр Эрудит
          </Typography>
        </Box>
        <Typography variant="body2" align="center" sx={{ maxWidth: 500, color: '#cbd5e1', mb: 2 }}>
          Мы помогаем школьникам достичь высоких результатов в учебе и успешно сдать экзамены. Наши опытные преподаватели используют современные методики обучения.
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
          <IconButton href="https://wa.me/your_number" target="_blank" sx={{ color: '#1e7dbd', '&:hover': { color: '#f2aa8d' } }}><WhatsAppIcon /></IconButton>
          <IconButton href="https://t.me/your_username" target="_blank" sx={{ color: '#1e7dbd', '&:hover': { color: '#f2aa8d' } }}><TelegramIcon /></IconButton>
          <IconButton href="https://vk.com/your_group" target="_blank" sx={{ color: '#1e7dbd', '&:hover': { color: '#f2aa8d' } }}><Facebook /></IconButton>
        </Box>
        <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', justifyContent: 'center', mb: 2 }}>
          <Link href="/ege" color="#f2aa8d" underline="hover" sx={{ fontWeight: 500, fontSize: 15 }}>Курсы ЕГЭ</Link>
          <Link href="/oge" color="#f2aa8d" underline="hover" sx={{ fontWeight: 500, fontSize: 15 }}>Курсы ОГЭ</Link>
          <Link href="/middle-school" color="#f2aa8d" underline="hover" sx={{ fontWeight: 500, fontSize: 15 }}>5-8 класс</Link>
          <Link href="/elementary-school" color="#f2aa8d" underline="hover" sx={{ fontWeight: 500, fontSize: 15 }}>1-4 класс</Link>
          <Link href="/prices" color="#f2aa8d" underline="hover" sx={{ fontWeight: 500, fontSize: 15 }}>Цены</Link>
        </Box>
        <Typography variant="body2" align="center" sx={{ color: '#64748b', mt: 2 }}>
          © {new Date().getFullYear()} Все права защищены
        </Typography>
      </Box>
    </Container>
  </Box>
);

export default Footer; 