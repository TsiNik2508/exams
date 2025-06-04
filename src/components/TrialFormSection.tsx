import { Box, Typography, TextField, Button, MenuItem, Paper, Checkbox, FormControlLabel, Chip } from '@mui/material';
import { useState } from 'react';
import SchoolIcon from '@mui/icons-material/School';

const subjects = ['Математика', 'Русский язык', 'Физика', 'Английский язык'];
const formats = ['Очно', 'Онлайн'];

const TrialFormSection = () => {
  const [form, setForm] = useState({ name: '', phone: '', subject: '', format: '', agree: false });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | React.ChangeEvent<{ name?: string; value: unknown }>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setForm((prev) => ({ ...prev, [name as string]: type === 'checkbox' ? checked : value }));
  };

  return (
    <Box sx={{ py: 8, background: 'linear-gradient(135deg, #e3f2fd 60%, #f2aa8d 100%)', position: 'relative', overflow: 'hidden' }}>
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
            <Chip label="Бесплатно" sx={{ bgcolor: '#f2aa8d', color: '#fff', fontWeight: 700, fontSize: 15, ml: 1, borderRadius: 2 }} />
          </Box>
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
            control={<Checkbox name="agree" checked={form.agree} onChange={handleChange} sx={{ color: '#f2aa8d' }} />}
            label={<Typography variant="body2" color="#888">Я согласен с политикой конфиденциальности</Typography>}
            sx={{ mb: 2 }}
          />
          <Button
            variant="contained"
            fullWidth
            sx={{
              background: 'linear-gradient(90deg, #1e7dbd 60%, #f2aa8d 100%)',
              color: '#fff',
              fontWeight: 700,
              borderRadius: 2,
              fontSize: 18,
              py: 1.3,
              boxShadow: '0 4px 24px 0 rgba(30,125,189,0.13)',
              transition: 'background 0.2s, color 0.2s, box-shadow 0.2s, transform 0.2s',
              '&:hover': {
                background: 'linear-gradient(90deg, #f2aa8d 60%, #1e7dbd 100%)',
                color: '#fff',
                boxShadow: '0 8px 32px 0 rgba(242,170,141,0.18)',
                transform: 'scale(1.03)',
              },
              mt: 1,
            }}
          >
            Записаться
          </Button>
          <Typography sx={{ color: '#1e7dbd', fontWeight: 500, fontSize: 15, mt: 2, textAlign: 'center' }}>
            Подарок каждому новому ученику!
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default TrialFormSection; 