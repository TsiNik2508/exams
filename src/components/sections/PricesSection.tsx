import React, { useState, useRef } from 'react';
import { Box, Typography, Card, CardContent, Button, Chip, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Alert, CircularProgress, IconButton } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloseIcon from '@mui/icons-material/Close';

const prices = [
  {
    title: 'ОГЭ/ЕГЭ',
    desc: 'Подготовка к экзаменам',
    price: '3500 руб/мес',
    icon: <EmojiEventsIcon sx={{ color: '#1e7dbd', fontSize: 36 }} />, 
    badge: 'Хит',
    benefits: ['Группы до 8 человек', 'Авторские материалы', 'Пробный урок бесплатно'],
  },
  {
    title: '5-8 класс',
    desc: 'Школьные предметы',
    price: '3000 руб/мес',
    icon: <MenuBookIcon sx={{ color: '#1e7dbd', fontSize: 36 }} />, 
    benefits: ['Индивидуальный подход', 'Домашние задания', 'Поддержка преподавателя'],
  },
  {
    title: 'Летние курсы',
    desc: 'Курс 1 + X',
    price: '2500 руб/мес',
    icon: <WbSunnyIcon sx={{ color: '#1e7dbd', fontSize: 36 }} />, 
    badge: 'Выгодно',
    benefits: ['Быстрый прогресс', 'Интерактивные занятия', 'Сертификат по итогам'],
  },
];

const PricesSection: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState<string>('');
  const [form, setForm] = useState({ name: '', phone: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const phoneInputRef = useRef<HTMLInputElement>(null);

  // Форматтер для телефона: +7 (XXX) XXX-XX-XX
  function formatPhone(raw: string) {
    let digits = raw.replace(/\D/g, '');
    if (digits.startsWith('7')) digits = digits.slice(1);
    if (digits.length > 10) digits = digits.slice(0, 10);
    let formatted = '+7';
    if (digits.length > 0) formatted += ' (' + digits.slice(0, 3);
    if (digits.length >= 4) formatted += ') ' + digits.slice(3, 6);
    if (digits.length >= 7) formatted += '-' + digits.slice(6, 8);
    if (digits.length >= 9) formatted += '-' + digits.slice(8, 10);
    return formatted;
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    value = value.replace(/[^\d+]/g, '');
    if (!value.startsWith('+7')) {
      value = '+7' + value.replace(/^\+?7?/, '');
    }
    const formatted = formatPhone(value);
    setForm(prev => ({ ...prev, phone: formatted }));
  };

  const handlePhoneFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setTimeout(() => {
      const input = e.target;
      if (input.selectionStart !== null && input.selectionStart < 4) {
        input.setSelectionRange(4, 4);
      }
    }, 0);
  };
  const handlePhoneClick = (e: React.MouseEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement;
    if (input.selectionStart !== null && input.selectionStart < 4) {
      input.setSelectionRange(4, 4);
      e.preventDefault();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleOpen = (section: string) => {
    setSelectedSection(section);
    setOpen(true);
    setForm({ name: '', phone: '', email: '' });
    setSubmitStatus('idle');
    setErrorMessage('');
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email) {
      setSubmitStatus('error');
      setErrorMessage('Пожалуйста, заполните все поля');
      return;
    }
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'a827e41a-ffba-4f9f-a56f-4592930c5fa6',
          name: form.name,
          phone: form.phone,
          email: form.email,
          subject: `Заявка с раздела: ${selectedSection}`,
          from_name: form.name,
          replyto: form.email,
          message: `Заявка с раздела: ${selectedSection}\nИмя: ${form.name}\nТелефон: ${form.phone}\nEmail: ${form.email}`
        }),
      });
      const data = await response.json();
      if (data.success) {
        setSubmitStatus('success');
        setForm({ name: '', phone: '', email: '' });
      } else {
        throw new Error('Ошибка отправки формы');
      }
    } catch {
      setSubmitStatus('error');
      setErrorMessage('Произошла ошибка при отправке. Попробуйте еще раз.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box sx={{ py: 8, position: 'relative', overflow: 'hidden' }}>
      <Typography variant="h4" textAlign="center" sx={{ mb: 4, fontWeight: 700, color: '#1e7dbd', zIndex: 2, position: 'relative' }}>Стоимость обучения</Typography>
      
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 5, position: 'relative', zIndex: 2 }}>
        {prices.map((p, i) => (
          <Card
            key={i}
            sx={{
              background: 'linear-gradient(145deg, #ffffff, #f8f9ff)',
              borderRadius: 5,
              boxShadow: '0 8px 32px rgba(30,125,189,0.12)',
              border: '1px solid rgba(30,125,189,0.15)',
              p: 4,
              m: 2,
              width: 320,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, rgba(30,125,189,0.08) 0%, transparent 60%)',
                opacity: 0,
                transition: 'opacity 0.4s ease',
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '4px',
                height: '100%',
                background: '#1e7dbd',
                opacity: 0.2,
                transition: 'all 0.4s ease',
              },
              '&:hover': {
                transform: 'translateY(-12px) scale(1.02)',
                boxShadow: '0 16px 48px rgba(30,125,189,0.18)',
                borderColor: 'rgba(30,125,189,0.3)',
                '&::before': {
                  opacity: 1,
                },
                '&::after': {
                  opacity: 0.8,
                  width: '6px',
                },
                '& .icon-wrapper': {
                  transform: 'scale(1.15) rotate(5deg)',
                  backgroundColor: 'rgba(30,125,189,0.15)',
                  boxShadow: '0 8px 24px rgba(30,125,189,0.2)',
                  '&::after': {
                    opacity: 0.8,
                    animation: 'spin 20s linear infinite',
                  }
                },
                '& .price-tag': {
                  transform: 'scale(1.15)',
                  color: '#1e7dbd',
                  textShadow: '0 2px 8px rgba(30,125,189,0.2)',
                }
              },
            }}
          >
            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 0, width: '100%', height: '100%' }}>
              <Box 
                className="icon-wrapper"
                sx={{
                  mb: 3,
                  width: 90,
                  height: 90,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  backgroundColor: 'rgba(30,125,189,0.08)',
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    border: '3px dashed',
                    borderColor: 'rgba(30,125,189,0.2)',
                    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                    opacity: 0,
                    animation: 'none',
                  },
                  '@keyframes spin': {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                  },
                }}
              >
                {p.icon}
              </Box>
              <Typography 
                variant="h5" 
                sx={{ 
                  color: '#1e7dbd', 
                  fontWeight: 800, 
                  mb: 2,
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    textShadow: '0 2px 8px rgba(30,125,189,0.2)',
                  }
                }}
              >
                {p.title}
              </Typography>
              {p.badge && (
                <Chip 
                  label={p.badge} 
                  sx={{ 
                    bgcolor: '#1e7dbd', 
                    color: '#fff', 
                    fontWeight: 700, 
                    fontSize: 13, 
                    mb: 2, 
                    borderRadius: 2,
                    position: 'relative',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: -2,
                      left: -2,
                      right: -2,
                      bottom: -2,
                      border: '2px solid #1e7dbd',
                      borderRadius: 4,
                      opacity: 0.3,
                      transition: 'all 0.4s ease',
                    },
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 12px rgba(30,125,189,0.2)',
                      '&::before': {
                        opacity: 0.5,
                        transform: 'scale(1.1)',
                      }
                    }
                  }}
                />
              )}
              <Typography 
                variant="h4" 
                className="price-tag"
                sx={{ 
                  color: '#1e7dbd',
                  fontWeight: 800,
                  mb: 3,
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                {p.price}
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: '#64748b',
                  mb: 3,
                  textAlign: 'center',
                  lineHeight: 1.6
                }}
              >
                {p.desc}
              </Typography>
              <Box sx={{ width: '100%', mt: 'auto' }}>
                {p.benefits.map((benefit, index) => (
                  <Box 
                    key={index}
                    sx={{ 
                      display: 'flex',
                      alignItems: 'center',
                      mb: 1.5,
                      color: '#1e7dbd',
                      '&::before': {
                        content: '"✓"',
                        mr: 1,
                        fontWeight: 700,
                      }
                    }}
                  >
                    <Typography variant="body2" sx={{ color: '#64748b' }}>
                      {benefit}
                    </Typography>
                  </Box>
                ))}
              </Box>
              <Button
                variant="contained"
                fullWidth
                onClick={() => handleOpen(p.title)}
                sx={{
                  mt: 3,
                  py: 1.5,
                  borderRadius: 2,
                  bgcolor: '#1e7dbd',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: 16,
                  textTransform: 'none',
                  boxShadow: '0 4px 12px rgba(30,125,189,0.2)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    bgcolor: '#f2aa8d',
                    color: '#fff',
                    boxShadow: '0 6px 16px rgba(242,170,141,0.3)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                Записаться
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ fontWeight: 700, color: '#1e7dbd', pr: 5, mb: 3, pt: '40px' }}>
          Записаться на курс
          <IconButton aria-label="close" onClick={handleClose} sx={{ position: 'absolute', right: 8, top: 8, color: '#aaa' }}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ overflowY: 'unset' }}>
          {submitStatus === 'success' ? (
            <Alert severity="success" sx={{ my: 3, fontSize: 18, py: 4, textAlign: 'center' }}>
              Спасибо! Ваша заявка отправлена.<br />Мы свяжемся с вами в ближайшее время.
            </Alert>
          ) : (
            <Box component="form" onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Ваше имя"
                name="name"
                value={form.name}
                onChange={handleChange}
                variant="outlined"
                disabled={isSubmitting}
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Телефон"
                name="phone"
                value={form.phone}
                onChange={handlePhoneChange}
                variant="outlined"
                disabled={isSubmitting}
                placeholder="+7 (___) ___-__-__"
                inputProps={{ maxLength: 18, inputMode: 'tel', pattern: '\\+7 \\([0-9]{3}\\) [0-9]{3}-[0-9]{2}-[0-9]{2}', ref: phoneInputRef }}
                onFocus={handlePhoneFocus}
                onClick={handlePhoneClick}
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                variant="outlined"
                disabled={isSubmitting}
                sx={{ mb: 2 }}
              />
              {submitStatus === 'error' && (
                <Alert severity="error" sx={{ mb: 2 }}>{errorMessage}</Alert>
              )}
              <DialogActions sx={{ px: 0 }}>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  disabled={isSubmitting}
                  sx={{ fontWeight: 700, borderRadius: 2, fontSize: 17, py: 1.5 }}
                >
                  {isSubmitting ? (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <CircularProgress size={20} color="inherit" />
                      Отправляем...
                    </Box>
                  ) : (
                    'Отправить заявку'
                  )}
                </Button>
              </DialogActions>
            </Box>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default PricesSection; 