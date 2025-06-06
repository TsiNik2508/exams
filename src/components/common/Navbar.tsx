import { Box, AppBar, Toolbar, Button, IconButton, Drawer, List, ListItem, Container } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Facebook } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import logo from "../../logo/logo-erudit.png";

const menuItems = [
  { text: 'Курсы ЕГЭ', path: '/ege' },
  { text: 'Курсы ОГЭ', path: '/oge' },
  { text: '5-8 класс', path: '/middle-school' },
  { text: '1-4 класс', path: '/elementary-school' },
  { text: 'Цены', path: '/prices' },
];

const socialLinks = [
  { icon: <WhatsAppIcon />, href: 'https://wa.me/your_number' },
  { icon: <TelegramIcon />, href: 'https://t.me/your_username' },
  { icon: <Facebook />, href: 'https://vk.com/your_group' },
];

const styles = {
  appBar: {
    bgcolor: '#fff',
    color: '#1e293b',
    boxShadow: '0 2px 12px 0 rgba(30,125,189,0.06)',
  },
  toolbar: {
    minHeight: 72,
    px: { xs: 1, md: 2 },
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    mr: 3,
    textDecoration: 'none',
  },
  logoImage: {
    height: 44,
    width: 'auto',
    display: 'block',
  },
  menuContainer: {
    flex: 1,
    display: { xs: 'none', md: 'flex' },
    justifyContent: 'center',
    gap: 2,
  },
  menuButton: {
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
  },
  socialContainer: {
    display: { xs: 'none', md: 'flex' },
    gap: 1,
    ml: 2,
  },
  socialButton: {
    color: '#1e7dbd',
    '&:hover': {
      color: '#f2aa8d',
      bgcolor: 'transparent',
    },
  },
  mobileMenuButton: {
    display: { xs: 'flex', md: 'none' },
    ml: 'auto',
    color: '#1e7dbd',
  },
  drawer: {
    '& .MuiDrawer-paper': {
      width: 240,
      boxSizing: 'border-box',
      bgcolor: '#fff',
    },
  },
  mobileMenuItem: {
    color: '#1e7dbd',
    fontWeight: 600,
    fontSize: 16,
    py: 2,
    px: 3,
    '&:hover': {
      bgcolor: '#f8fafc',
    },
  },
};

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const mobileMenu = (
    <Drawer
      variant="temporary"
      anchor="right"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      sx={styles.drawer}
    >
      <List>
        {menuItems.map((item) => (
          <ListItem
            key={item.text}
            component={Link}
            to={item.path}
            onClick={handleDrawerToggle}
            sx={styles.mobileMenuItem}
          >
            {item.text}
          </ListItem>
        ))}
      </List>
    </Drawer>
  );

  return (
    <AppBar position="fixed" elevation={0} sx={styles.appBar}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={styles.toolbar}>
          <Box component={Link} to="/" sx={styles.logo}>
            <img src={logo} alt="Эрудит" style={styles.logoImage} />
          </Box>

          <Box sx={styles.menuContainer}>
            {menuItems.map((item) => (
              <Button
                key={item.text}
                component={Link}
                to={item.path}
                sx={styles.menuButton}
              >
                {item.text}
              </Button>
            ))}
          </Box>

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

          <Box sx={styles.mobileMenuButton}>
            <IconButton onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
      {mobileMenu}
    </AppBar>
  );
};

export default Navbar; 