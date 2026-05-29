import { Box, Container, Typography, Link } from '@mui/material';

const contactLinks = [
    { text: 'WhatsApp', href: 'https://wa.me/79522817749' },
    { text: 'VK', href: 'https://vk.com/your_page' },
    { text: 'Telegram', href: 'https://t.me/prohor_13' },
    { text: 'Email', href: 'mailto:erudite_edu@mail.ru' },
];

const legalLinks = [
    { text: 'Пользовательское соглашение', href: '/terms' },
    { text: 'Политика конфиденциальности', href: '/privacy' },
];

const Footer = () => {
    return (
        <Box
            sx={{
                backgroundColor: '#1e293b',
                color: '#fff',
                py: 6,
                mt: 'auto',
            }}
        >
            <Container maxWidth="lg">
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', gap: 4 }}>
                    
                    {/* Левая колонка: контакты и адрес */}
                    <Box>
                        <Typography variant="h6" gutterBottom>Контакты</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            {contactLinks.map((link) => (
                                <Link key={link.text} href={link.href} color="inherit" underline="hover" target="_blank">
                                    {link.text}
                                </Link>
                            ))}
                            {/* Адрес */}
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
                                <span>📍</span>
                                <Link 
                                    href="https://yandex.ru/maps/?text=Коломяжский+проспект+20+Санкт-Петербург"
                                    color="inherit"
                                    underline="hover"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Коломяжский проспект, 20
                                </Link>
                            </Box>
                        </Box>
                    </Box>

                    {/* Правая колонка: юридические ссылки */}
                    <Box>
                        <Typography variant="h6" gutterBottom>Информация</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            {legalLinks.map((link) => (
                                <Link key={link.text} href={link.href} color="inherit" underline="hover">
                                    {link.text}
                                </Link>
                            ))}
                        </Box>
                    </Box>
                </Box>

                <Typography variant="body2" sx={{ textAlign: 'center', mt: 4, pt: 2, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                    © {new Date().getFullYear()} Образовательный центр Эрудит. Все права защищены.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
