import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Paper } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useNavigate } from 'react-router-dom';

const ContactSection: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email || !form.message) {
      return;
    }
    navigate('/success');
  };

  return (
    <Box sx={{ py: 8, position: 'relative', overflow: 'hidden' }}>
      {/* Паттерн из кругов */}
      <Box sx={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none' }}>
        <svg width="100%" height="100%" viewBox="0 0 1200 320" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', left: 0, top: 0 }}>
          <circle cx="180" cy="60" r="32" fill="#1e7dbd" fillOpacity="0.07" />
          <circle cx="1000" cy="100" r="40" fill="#f2aa8d" fillOpacity="0.09" />
          <circle cx="300" cy="260" r="24" fill="#f2aa8d" fillOpacity="0.08" />
          <circle cx="900" cy="220" r="30" fill="#1e7dbd" fillOpacity="0.07" />
        </svg>
      </Box>

      <Typography variant="h4" textAlign="center" sx={{ mb: 4, fontWeight: 700, color: '#1e7dbd', zIndex: 2, position: 'relative' }}>Свяжитесь с нами</Typography>
      
      <Box sx={{ maxWidth: 1200, mx: 'auto', px: 2, position: 'relative', zIndex: 2 }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
          {/* Контактная информация */}
          <Box sx={{ flex: { md: '0 0 40%' } }}>
            <Paper elevation={0} sx={{ p: 4, height: '100%', background: 'rgba(255, 255, 255, 0.9)', borderRadius: 4 }}>
              <Typography variant="h6" sx={{ mb: 3, color: '#1e7dbd', fontWeight: 700 }}>Контактная информация</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <LocationOnIcon sx={{ color: '#1e7dbd', mr: 2, fontSize: 28 }} />
                <Box>
                  <Typography sx={{ fontWeight: 600, mb: 0.5 }}>Адрес</Typography>
                  <Typography sx={{ color: '#666' }}>г. Москва, ул. Примерная, 123</Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <PhoneIcon sx={{ color: '#1e7dbd', mr: 2, fontSize: 28 }} />
                <Box>
                  <Typography sx={{ fontWeight: 600, mb: 0.5 }}>Телефон</Typography>
                  <Typography sx={{ color: '#666' }}>+7 (123) 456-78-90</Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <EmailIcon sx={{ color: '#1e7dbd', mr: 2, fontSize: 28 }} />
                <Box>
                  <Typography sx={{ fontWeight: 600, mb: 0.5 }}>Email</Typography>
                  <Typography sx={{ color: '#666' }}>info@example.com</Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <AccessTimeIcon sx={{ color: '#1e7dbd', mr: 2, fontSize: 28 }} />
                <Box>
                  <Typography sx={{ fontWeight: 600, mb: 0.5 }}>Режим работы</Typography>
                  <Typography sx={{ color: '#666' }}>Пн-Пт: 9:00 - 20:00</Typography>
                  <Typography sx={{ color: '#666' }}>Сб-Вс: 10:00 - 18:00</Typography>
                </Box>
              </Box>
            </Paper>
          </Box>

          {/* Форма обратной связи */}
          <Box sx={{ flex: { md: '0 0 60%' } }}>
            <Paper elevation={0} sx={{ p: 4, background: 'rgba(255, 255, 255, 0.9)', borderRadius: 4 }}>
              <Typography variant="h6" sx={{ mb: 3, color: '#1e7dbd', fontWeight: 700 }}>Напишите нам</Typography>
              <Box component="form" onSubmit={handleSubmit}>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, mb: 2 }}>
                  <TextField
                    fullWidth
                    label="Ваше имя"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': { borderColor: '#e0e0e0' },
                        '&:hover fieldset': { borderColor: '#1e7dbd' },
                        '&.Mui-focused fieldset': { borderColor: '#1e7dbd' },
                      },
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Телефон"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': { borderColor: '#e0e0e0' },
                        '&:hover fieldset': { borderColor: '#1e7dbd' },
                        '&.Mui-focused fieldset': { borderColor: '#1e7dbd' },
                      },
                    }}
                  />
                </Box>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  variant="outlined"
                  sx={{
                    mb: 2,
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: '#e0e0e0' },
                      '&:hover fieldset': { borderColor: '#1e7dbd' },
                      '&.Mui-focused fieldset': { borderColor: '#1e7dbd' },
                    },
                  }}
                />
                <TextField
                  fullWidth
                  label="Сообщение"
                  name="message"
                  multiline
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  variant="outlined"
                  sx={{
                    mb: 2,
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: '#e0e0e0' },
                      '&:hover fieldset': { borderColor: '#1e7dbd' },
                      '&.Mui-focused fieldset': { borderColor: '#1e7dbd' },
                    },
                  }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{
                    fontWeight: 700,
                    borderRadius: 2,
                    fontSize: 17,
                    py: 1.5,
                    boxShadow: '0 4px 24px 0 rgba(30,125,189,0.13)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: '0 8px 32px 0 rgba(242,170,141,0.18)',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  Отправить сообщение
                </Button>
              </Box>
            </Paper>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactSection; 