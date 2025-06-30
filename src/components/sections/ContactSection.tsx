import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, TextField, Button, Paper, Alert, CircularProgress } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const ContactSection: React.FC = () => {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Удаляю localStorage из useEffect
  useEffect(() => {
    setSubmitStatus('idle');
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Форматтер для телефона: +7 (XXX) XXX-XX-XX
  function formatPhone(raw: string) {
    // Оставляем только цифры после +7
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

  // Для поля телефона: курсор не может быть перед +7
  const phoneInputRef = useRef<HTMLInputElement>(null);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.name || !form.phone || !form.email || !form.message) {
      setSubmitStatus('error');
      setErrorMessage('Пожалуйста, заполните все поля');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // Отправляем данные через Web3Forms
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'a827e41a-ffba-4f9f-a56f-4592930c5fa6',
          name: form.name,
          phone: form.phone,
          email: form.email,
          message: form.message,
          subject: 'Новая заявка с сайта Эрудит',
          from_name: form.name,
          replyto: form.email,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        // Очищаем форму после успешной отправки
        setForm({ name: '', phone: '', email: '', message: '' });
      } else {
        throw new Error('Ошибка отправки формы');
      }
    } catch (error) {
      console.error('Ошибка при отправке формы:', error);
      setSubmitStatus('error');
      setErrorMessage('Произошла ошибка при отправке. Попробуйте еще раз или свяжитесь с нами по телефону.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box sx={{ py: 8, position: 'relative', overflow: 'hidden' }}>
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
                  <Typography sx={{ color: '#666' }}>erudite_edu@mail.ru</Typography>
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
              
              {/* Статус отправки */}
              {submitStatus === 'success' ? (
                <Alert severity="success" sx={{ mb: 3, fontSize: 18, py: 4, textAlign: 'center' }}>
                  Спасибо! Ваше сообщение успешно отправлено.<br />Мы свяжемся с вами в ближайшее время.
                </Alert>
              ) : (
                <>
                  {submitStatus === 'error' && (
                    <Alert severity="error" sx={{ mb: 3 }}>
                      {errorMessage}
                    </Alert>
                  )}
                  <Box component="form" onSubmit={handleSubmit}>
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, mb: 2 }}>
                      <TextField
                        fullWidth
                        label="Ваше имя"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        variant="outlined"
                        disabled={isSubmitting}
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
                        onChange={handlePhoneChange}
                        variant="outlined"
                        disabled={isSubmitting}
                        placeholder="+7 (___) ___-__-__"
                        inputProps={{ maxLength: 18, inputMode: 'tel', pattern: '\\+7 \\([0-9]{3}\\) [0-9]{3}-[0-9]{2}-[0-9]{2}', ref: phoneInputRef }}
                        onFocus={handlePhoneFocus}
                        onClick={handlePhoneClick}
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
                      disabled={isSubmitting}
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
                      disabled={isSubmitting}
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
                      disabled={isSubmitting}
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
                        '&:disabled': {
                          opacity: 0.7,
                        },
                      }}
                    >
                      {isSubmitting ? (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <CircularProgress size={20} color="inherit" />
                          Отправляем...
                        </Box>
                      ) : (
                        'Отправить сообщение'
                      )}
                    </Button>
                  </Box>
                </>
              )}
            </Paper>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactSection; 