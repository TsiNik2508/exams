import { Box, Container, IconButton, Drawer, List, ListItem, ListItemText, Slide, useScrollTrigger, Popper, Paper, Grow, ClickAwayListener, Collapse, ListItemButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useState, useRef, useCallback, useMemo } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../logo/logo-erudit.png';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

interface HideOnScrollProps {
  children: React.ReactElement;
}

const styles = {
  wrapper: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
  },
  topBar: {
    bgcolor: '#fff',
    color: '#1e7dbd',
    py: { xs: 0.5, md: 1 },
    borderBottom: '1px solid rgba(30,125,189,0.1)',
    position: 'relative',
    zIndex: 1001,
    minHeight: { xs: 48, md: 64 },
  },
  mainBar: {
    bgcolor: '#1e7dbd',
    boxShadow: '0 2px 10px rgba(30,125,189,0.1)',
    transition: 'transform 0.3s ease',
    height: { xs: 48, md: 64 },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    py: 1,
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: 'inherit',
    transition: 'transform 0.2s ease, opacity 0.2s ease',
    '&:hover': {
      transform: 'scale(0.95)',
      opacity: 0.8,
    },
    gap: 1,
  },
  logoImage: {
    height: { xs: '36px', md: '50px' },
    width: 'auto',
    objectFit: 'contain',
  },
  logoText: {
    fontWeight: 700,
    fontSize: { xs: 24, md: 32 },
    color: '#f2aa8d',
    lineHeight: 1,
    ml: 1,
    display: { xs: 'block', md: 'block' },
  },
  menuContainer: {
    display: 'flex',
    gap: 2,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  menuButton: {
    display: 'flex',
    alignItems: 'center',
    color: '#fff',
    fontWeight: 500,
    fontSize: { xs: '0.875rem', md: '1rem' },
    px: { xs: 1, md: 2 },
    py: { xs: 1, md: 1.5 },
    transition: 'color 0.3s ease',
    cursor: 'pointer',
    textDecoration: 'none',
    '&:hover': {
      color: '#f2aa8d',
      textDecoration: 'none',
    }
  },
  submenu: {
    mt: 1,
    zIndex: 1300,
  },
  submenuPaper: {
    bgcolor: '#fff',
    boxShadow: '0 8px 32px rgba(30,125,189,0.15)',
    borderRadius: '8px',
    minWidth: '240px',
    marginTop: '12px',
    padding: '16px 0',
    border: '1px solid rgba(30,125,189,0.1)',
  },
  submenuList: {
    padding: 0,
  },
  submenuItem: {
    px: 3,
    py: 1.5,
    fontSize: '0.95rem',
    color: '#1e293b',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    margin: '0 8px',
    borderRadius: '4px',
    textDecoration: 'none',
    '&:hover': {
      bgcolor: 'rgba(30,125,189,0.05)',
      color: '#f2aa8d',
      transform: 'translateX(4px)',
      textDecoration: 'none',
    },
  },
  contactInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: 2,
  },
  phone: {
    display: 'flex',
    alignItems: 'center',
    gap: 1,
    color: '#1e7dbd',
    textDecoration: 'none',
    fontWeight: 500,
    transition: 'color 0.3s ease',
    '&:hover': {
      color: '#f2aa8d',
    }
  },
  socialButtons: {
    display: 'flex',
    gap: 1,
  },
  socialButton: {
    color: '#1e7dbd',
    transition: 'color 0.3s ease',
    '&:hover': {
      color: '#f2aa8d',
    }
  },
  mobileMenuButton: {
    display: { xs: 'flex', md: 'none' },
    color: '#1e7dbd',
    bgcolor: '#fff',
    '&:hover': {
      bgcolor: '#f8fafc',
    }
  },
  drawer: {
    display: { xs: 'block', md: 'none' },
    '& .MuiDrawer-paper': {
      width: 280,
      bgcolor: '#fff',
      boxShadow: '0 4px 24px rgba(30,125,189,0.15)',
    },
  },
  drawerHeader: {
    p: 2,
    borderBottom: '1px solid rgba(30,125,189,0.1)',
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
  },
  drawerLogo: {
    maxWidth: 120,
    height: 'auto',
    objectFit: 'contain',
    display: 'block',
    margin: '0 auto',
  },
  drawerList: {
    pt: 2,
  },
  drawerItem: {
    py: 1.5,
    px: 3,
    color: '#1e293b',
    fontWeight: 500,
    '&:hover': {
      bgcolor: 'rgba(30,125,189,0.05)',
      color: '#1e7dbd',
    }
  },
  drawerSubItem: {
    pl: 6,
    py: 1,
    fontSize: '0.9rem',
    color: '#64748b',
    '&:hover': {
      bgcolor: 'rgba(30,125,189,0.05)',
      color: '#1e7dbd',
    }
  },
};

const HideOnScroll = React.memo(function HideOnScroll(props: HideOnScrollProps) {
  const { children } = props;
  const trigger = useScrollTrigger({
    threshold: 50,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger} timeout={200}>
      {children}
    </Slide>
  );
});

const menuItems = [
  {
    text: 'ЕГЭ',
    submenu: [
      { text: 'Математика', href: '/ege/math' },
      { text: 'Русский язык', href: '/ege/russian' },
      { text: 'Физика', href: '/ege/physics' },
      { text: 'Информатика', href: '/ege/informatics' },
      { text: 'Английский язык', href: '/ege/english' },
      { text: 'Биология', href: '/ege/biology' },
      { text: 'Химия', href: '/ege/chemistry' },
      { text: 'История', href: '/ege/history' },
      { text: 'Обществознание', href: '/ege/social' },
      { text: 'Литература', href: '/ege/literature' },
    ]
  },
  {
    text: 'ОГЭ',
    submenu: [
      { text: 'Математика', href: '/oge/math' },
      { text: 'Русский язык', href: '/oge/russian' },
      { text: 'Физика', href: '/oge/physics' },
      { text: 'Информатика', href: '/oge/informatics' },
      { text: 'Английский язык', href: '/oge/english' },
      { text: 'Биология', href: '/oge/biology' },
      { text: 'Химия', href: '/oge/chemistry' },
      { text: 'История', href: '/oge/history' },
      { text: 'Обществознание', href: '/oge/social' },
      { text: 'Литература', href: '/oge/literature' },
    ]
  },
  {
    text: 'Онлайн курсы',
    submenu: [
      { text: 'Математика', href: '/online/math' },
      { text: 'Русский язык', href: '/online/russian' },
      { text: 'Физика', href: '/online/physics' },
      { text: 'Информатика', href: '/online/informatics' },
      { text: 'Английский язык', href: '/online/english' },
      { text: 'Биология', href: '/online/biology' },
      { text: 'Химия', href: '/online/chemistry' },
      { text: 'История', href: '/online/history' },
      { text: 'Обществознание', href: '/online/social' },
      { text: 'Литература', href: '/online/literature' },
    ]
  },
  {
    text: '5-8 класс',
    submenu: [
      { text: 'Математика', href: '/middle/math' },
      { text: 'Русский язык', href: '/middle/russian' },
      { text: 'Физика', href: '/middle/physics' },
      { text: 'Информатика', href: '/middle/informatics' },
      { text: 'Английский язык', href: '/middle/english' },
      { text: 'Биология', href: '/middle/biology' },
      { text: 'Химия', href: '/middle/chemistry' },
      { text: 'История', href: '/middle/history' },
      { text: 'Обществознание', href: '/middle/social' },
      { text: 'Литература', href: '/middle/literature' },
    ]
  },
  {
    text: 'Летние курсы',
    href: '/summer',
  },
  {
    text: 'Цены',
    href: '/prices',
  },
  {
    text: 'FAQ',
    href: '/faq',
  },
];

const ContactInfo = React.memo(() => (
  <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 3 }}>
    <Box sx={styles.contactInfo}>
      <Box sx={styles.phone}>
        <PhoneIcon sx={{ fontSize: 18 }} />
        <Box component="a" href="tel:+79001234567" sx={{ textDecoration: 'none', color: 'inherit' }}>
          +7 (900) 123-45-67
        </Box>
      </Box>
      <Box sx={styles.phone}>
        <EmailIcon sx={{ fontSize: 18 }} />
        <Box component="a" href="mailto:info@erudit.ru" sx={{ textDecoration: 'none', color: 'inherit' }}>
          info@erudit.ru
        </Box>
      </Box>
    </Box>
    
    <Box sx={styles.socialButtons}>
      <IconButton
        component="a"
        href="https://t.me/erudit_edu"
        target="_blank"
        rel="noopener noreferrer"
        sx={styles.socialButton}
      >
        <TelegramIcon />
      </IconButton>
      <IconButton
        component="a"
        href="https://wa.me/79001234567"
        target="_blank"
        rel="noopener noreferrer"
        sx={styles.socialButton}
      >
        <WhatsAppIcon />
      </IconButton>
      <IconButton
        component="a"
        href="https://vk.com/erudit_edu"
        target="_blank"
        rel="noopener noreferrer"
        sx={styles.socialButton}
      >
        <Box sx={{ fontSize: 20, fontWeight: 'bold', color: 'inherit' }}>VK</Box>
      </IconButton>
    </Box>
  </Box>
));

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const navigate = useNavigate();
  const popperTimeout = useRef<number | undefined>(undefined);
  const [openCategories, setOpenCategories] = useState<{ [key: string]: boolean }>({});

  const handleMobileToggle = useCallback(() => setMobileOpen(prev => !prev), []);
  const handleMobileClose = useCallback(() => setMobileOpen(false), []);

  const handleOpenPopper = useCallback((event: React.MouseEvent<HTMLElement>, menu: string) => {
    clearTimeout(popperTimeout.current);
    setAnchorEl(event.currentTarget);
    setActiveMenu(menu);
  }, []);

  const handleClosePopper = useCallback(() => {
    popperTimeout.current = window.setTimeout(() => {
      setAnchorEl(null);
      setActiveMenu(null);
    }, 200);
  }, []);

  const handleNavigate = useCallback((path?: string) => {
    if (path) {
      navigate(path);
      handleMobileClose();
    }
  }, [navigate, handleMobileClose]);

  const handleCategoryToggle = useCallback((cat: string) => {
    setOpenCategories(prev => ({ ...prev, [cat]: !prev[cat] }));
  }, []);

  const renderDesktopMenu = useMemo(() => (
    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
      {menuItems.map((item) => (
        <Box
          key={item.text}
          onMouseEnter={(e) => item.submenu && handleOpenPopper(e, item.text)}
          onMouseLeave={() => item.submenu && handleClosePopper()}
        >
          <Box
            sx={styles.menuButton}
            onClick={() => handleNavigate(item.href)}
          >
            {item.text}
            {item.submenu && <ExpandMoreIcon fontSize="small" sx={{ ml: 0.5, transform: activeMenu === item.text ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} />}
          </Box>
          {item.submenu && (
            <Popper
              open={activeMenu === item.text}
              anchorEl={anchorEl}
              role={undefined}
              placement="bottom-start"
              transition
              disablePortal
              sx={styles.submenu}
            >
              {({ TransitionProps, placement }) => (
                <Grow {...TransitionProps} style={{ transformOrigin: placement === 'bottom-start' ? 'left top' : 'left bottom' }}>
                  <Paper sx={styles.submenuPaper}>
                    <ClickAwayListener onClickAway={handleClosePopper}>
                      <List sx={styles.submenuList}>
                        {item.submenu?.map((subItem) => (
                          <ListItem key={subItem.text} sx={styles.submenuItem} onClick={() => handleNavigate(subItem.href)}>
                            <ListItemText primary={subItem.text} />
                          </ListItem>
                        ))}
                      </List>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          )}
        </Box>
      ))}
    </Box>
  ), [activeMenu, anchorEl, handleOpenPopper, handleClosePopper, handleNavigate]);

  const renderMobileMenu = useMemo(() => (
    <Drawer
      variant="temporary"
      anchor="right"
      open={mobileOpen}
      onClose={handleMobileToggle}
      ModalProps={{ keepMounted: true }}
      sx={styles.drawer}
    >
    <Box sx={styles.drawerHeader}>
        {/* ... logo, contacts ... */}
      </Box>
      <List sx={styles.drawerList}>
        {menuItems.map((item) => (
          <React.Fragment key={item.text}>
            <ListItem sx={styles.drawerItem} onClick={() => item.submenu ? handleCategoryToggle(item.text) : handleNavigate(item.href)}>
                  <ListItemText primary={item.text} />
              {item.submenu && (openCategories[item.text] ? <ExpandMoreIcon /> : <ChevronRightIcon />)}
            </ListItem>
            {item.submenu && (
                <Collapse in={openCategories[item.text]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.submenu.map((subItem) => (
                    <ListItemButton key={subItem.text} sx={styles.drawerSubItem} onClick={() => handleNavigate(subItem.href)}>
                      <ListItemText primary={subItem.text} />
                    </ListItemButton>
                  ))}
                </List>
                </Collapse>
            )}
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  ), [mobileOpen, openCategories, handleMobileToggle, handleCategoryToggle, handleNavigate]);

  return (
    <>
      <Box sx={styles.wrapper}>
        <Box sx={styles.topBar}>
          <Container maxWidth="lg">
            <Box sx={{ ...styles.container, minHeight: { xs: 48, md: 64 } }}>
              <Box 
                onClick={() => handleNavigate('/')} 
                sx={styles.logoContainer}
              >
                <Box component="img" src={logo} alt="Logo" sx={styles.logoImage} />
              </Box>
              
              <ContactInfo />
              
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleMobileToggle}
                sx={{ ...styles.mobileMenuButton, ml: 'auto' }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Container>
        </Box>
        <HideOnScroll>
          <Box sx={{ ...styles.mainBar, display: { xs: 'none', md: 'block' } }}>
            <Container maxWidth="lg">
              <Box sx={{ ...styles.container, justifyContent: 'center' }}>
                <Box sx={styles.menuContainer}>
                  {renderDesktopMenu}
                </Box>
              </Box>
            </Container>
          </Box>
        </HideOnScroll>
        {renderMobileMenu}
      </Box>
      <Box sx={{ height: { xs: '48px', md: '64px' } }} />
    </>
  );
};

export default React.memo(Navbar); 