import React, { useState } from 'react';
import { Box, Typography, TextField, Button, MenuItem, Paper, Checkbox, FormControlLabel } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import { useNavigate } from 'react-router-dom';

const subjects = ['Математика', 'Русский язык', 'Физика', 'Английский язык'];
const formats = ['Очно', 'Онлайн'];

const TrialFormSection: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', phone: '', subject: '', format: '', agree: false });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | React.ChangeEvent<{ name?: string; value: unknown }>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setForm((prev) => ({ ...prev, [name as string]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.subject || !form.format || !form.agree) {
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

      <Box sx={{ maxWidth: 520, mx: 'auto', position: 'relative', zIndex: 2 }}>
        <Paper sx={{ p: { xs: 3, sm: 5 }, borderRadius: 5, boxShadow: '0 8px 32px 0 rgba(30,125,189,0.13)', background: '#fff', position: 'relative', overflow: 'visible' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <SchoolIcon sx={{ color: '#1e7dbd', fontSize: 32, mr: 1 }} />
            <Typography variant="h5" sx={{ fontWeight: 800, color: '#1e7dbd', flex: 1 }}>Начни обучение с&nbsp;пробного урока</Typography>
            <Typography sx={{ color: '#f2aa8d', fontWeight: 700, fontSize: 15, ml: 1 }}>Бесплатно</Typography>
          </Box>

          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Имя"
              name="name"
              value={form.name}
              onChange={handleChange}
              sx={{ mb: 2 }}
              InputProps={{ sx: { borderRadius: 2, bgcolor: '#fafdff' } }}
              InputLabelProps={{ sx: { color: '#1e7dbd' } }}
              focused
            />

            <TextField
              fullWidth
              label="Телефон"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              sx={{ mb: 2 }}
              InputProps={{ sx: { borderRadius: 2, bgcolor: '#fafdff' } }}
              InputLabelProps={{ sx: { color: '#1e7dbd' } }}
              focused
            />

            <TextField
              select
              fullWidth
              label="Предмет"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              sx={{ mb: 2 }}
              InputProps={{ sx: { borderRadius: 2, bgcolor: '#fafdff' } }}
              InputLabelProps={{ sx: { color: '#1e7dbd' } }}
              focused
            >
              {subjects.map((s) => <MenuItem key={s} value={s}>{s}</MenuItem>)}
            </TextField>

            <TextField
              select
              fullWidth
              label="Формат"
              name="format"
              value={form.format}
              onChange={handleChange}
              sx={{ mb: 2 }}
              InputProps={{ sx: { borderRadius: 2, bgcolor: '#fafdff' } }}
              InputLabelProps={{ sx: { color: '#1e7dbd' } }}
              focused
            >
              {formats.map((f) => <MenuItem key={f} value={f}>{f}</MenuItem>)}
            </TextField>

            <FormControlLabel
              control={<Checkbox name="agree" checked={form.agree} onChange={handleChange} sx={{ color: '#1e7dbd' }} />}
              label={<Typography variant="body2" color="#888">Я согласен с политикой конфиденциальности</Typography>}
              sx={{ mb: 2 }}
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                fontWeight: 700,
                borderRadius: 2,
                fontSize: 18,
                py: 1.3,
                boxShadow: '0 4px 24px 0 rgba(30,125,189,0.13)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  boxShadow: '0 8px 32px 0 rgba(242,170,141,0.18)',
                  transform: 'scale(1.03)',
                },
                mt: 1,
              }}
            >
              Записаться
            </Button>

            <Typography sx={{ color: '#f2aa8d', fontWeight: 500, fontSize: 15, mt: 2, textAlign: 'center' }}>
              Подарок каждому новому ученику!
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default TrialFormSection; 