import { AppBar, Toolbar, Button, IconButton, Box, Container } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import { Facebook } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import logo from '../logo/logo-erudit.png';

const menuItems = [
  { text: 'Курсы ЕГЭ', path: '/ege' },
  { text: 'Курсы ОГЭ', path: '/oge' },
  { text: '5-8 класс', path: '/middle-school' },
  { text: '1-4 класс', path: '/elementary-school' },
  { text: 'Цены', path: '/prices' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <AppBar position="fixed" elevation={0} sx={{ bgcolor: '#fff', color: '#1e293b', boxShadow: '0 2px 12px 0 rgba(30,125,189,0.06)' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: 72, px: { xs: 1, md: 2 } }}>
          {/* Логотип */}
          <Box component={RouterLink} to="/" sx={{ display: 'flex', alignItems: 'center', mr: 3, textDecoration: 'none' }}>
            <img src={logo} alt="Эрудит" style={{ height: 44, width: 'auto', display: 'block' }} />
          </Box>
          {/* Меню */}
          <Box sx={{ flex: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', gap: 2 }}>
            {menuItems.map((item) => (
              <Button
                key={item.text}
                component={RouterLink}
                to={item.path}
                sx={{
                  color: '#1e7dbd',
                  fontWeight: 600,
                  fontSize: 16,
                  px: 2,
                  borderRadius: 2,
                  transition: 'all 0.2s',
                  '&:hover': {
                    color: '#fff',
                    bgcolor: '#1e7dbd',
                  },
                }}
              >
                {item.text}
              </Button>
            ))}
          </Box>
          {/* Соцсети */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, ml: 2 }}>
            <IconButton href="https://wa.me/your_number" target="_blank" sx={{ color: '#1e7dbd', '&:hover': { color: '#f2aa8d', bgcolor: 'transparent' } }}><WhatsAppIcon /></IconButton>
            <IconButton href="https://t.me/your_username" target="_blank" sx={{ color: '#1e7dbd', '&:hover': { color: '#f2aa8d', bgcolor: 'transparent' } }}><TelegramIcon /></IconButton>
            <IconButton href="https://vk.com/your_group" target="_blank" sx={{ color: '#1e7dbd', '&:hover': { color: '#f2aa8d', bgcolor: 'transparent' } }}><Facebook /></IconButton>
          </Box>
          {/* Мобильное меню */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, ml: 'auto' }}>
            <IconButton onClick={() => setMobileOpen(!mobileOpen)} sx={{ color: '#1e7dbd' }}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
        {/* Мобильное меню (Drawer или Box) можно добавить по желанию */}
      </Container>
    </AppBar>
  );
};

export default Navbar; 