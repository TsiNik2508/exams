import React, { useState, useRef, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, Typography, Box, CircularProgress, IconButton, Alert } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface PopupFormProps {
  open: boolean;
  onClose: () => void;
  section: string; // страница/раздел
  subject?: string; // предмет
  course?: string; // тариф/курс
  showMessageField?: boolean; // показывать ли поле сообщения
  formKey?: string; // уникальный ключ для формы
}

const PopupForm: React.FC<PopupFormProps> = ({ open, onClose, section, subject, course, showMessageField = false, formKey = 'default' }) => {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [lastSubmitTime, setLastSubmitTime] = useState(0);
  const phoneInputRef = useRef<HTMLInputElement>(null);

  // Сброс состояния при открытии попапа
  useEffect(() => {
    if (open) {
      setForm({ name: '', phone: '', email: '', message: '' });
      setSubmitStatus('idle');
      setErrorMessage('');
      setIsSubmitting(false);
    }
  }, [open, formKey]);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.name || !form.phone || !form.email) {
      setSubmitStatus('error');
      setErrorMessage('Пожалуйста, заполните все поля');
      return;
    }

    // Проверяем, прошло ли достаточно времени с последней отправки
    const now = Date.now();
    const timeSinceLastSubmit = now - lastSubmitTime;
    const minInterval = 30000; // 30 секунд

    if (timeSinceLastSubmit < minInterval) {
      const remainingTime = Math.ceil((minInterval - timeSinceLastSubmit) / 1000);
      setSubmitStatus('error');
      setErrorMessage(`Пожалуйста, подождите ${remainingTime} секунд перед следующей отправкой.`);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '7a09cf75-5cd1-4b5d-afef-643ced045eab',
          name: form.name,
          phone: form.phone,
          email: form.email,
          subject: `Заявка с раздела: ${section}${course ? ` - ${course}` : ''}${subject ? ` (${subject})` : ''}`,
          from_name: form.name,
          replyto: form.email,
          message: `Заявка с раздела: ${section}${course ? `\nКурс: ${course}` : ''}${subject ? `\nПредмет: ${subject}` : ''}\nИмя: ${form.name}\nТелефон: ${form.phone}\nEmail: ${form.email}${form.message ? `\nСообщение: ${form.message}` : ''}`
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        setForm({ name: '', phone: '', email: '', message: '' });
        setLastSubmitTime(now); // Записываем время успешной отправки
      } else {
        // Проверяем конкретные ошибки Web3Forms
        if (response.status === 429) {
          throw new Error('rate_limit');
        } else if (response.status === 403) {
          throw new Error('blocked');
        } else if (data.message) {
          throw new Error(data.message);
        } else {
          throw new Error('Ошибка отправки формы');
        }
      }
    } catch (error) {
      console.error('Ошибка при отправке формы:', error);
      setSubmitStatus('error');
      
      // Специальные сообщения для разных типов ошибок
      if (error instanceof Error) {
        if (error.message === 'rate_limit') {
          setErrorMessage('Слишком много запросов. Пожалуйста, подождите 1-2 минуты и попробуйте снова.');
        } else if (error.message === 'blocked') {
          setErrorMessage('Временная блокировка. Пожалуйста, попробуйте позже или свяжитесь с нами по телефону.');
        } else if (error.message.includes('spam') || error.message.includes('bot')) {
          setErrorMessage('Заявка заблокирована как спам. Пожалуйста, свяжитесь с нами по телефону.');
        } else {
          setErrorMessage('Произошла ошибка при отправке. Попробуйте еще раз или свяжитесь с нами по телефону.');
        }
      } else {
        setErrorMessage('Произошла ошибка при отправке. Попробуйте еще раз или свяжитесь с нами по телефону.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ fontWeight: 700, color: '#1e7dbd', pr: 5, mb: 3, pt: '40px' }}>
        {showMessageField ? 'Написать нам' : 'Записаться на курс'}
        <IconButton aria-label="close" onClick={onClose} sx={{ position: 'absolute', right: 8, top: 8, color: '#aaa' }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ overflowY: 'unset' }}>
        {submitStatus === 'success' ? (
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', py: 6, px: 2, textAlign: 'center', animation: 'fadeIn 0.7s' }}>
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: 16 }}>
              <circle cx="32" cy="32" r="32" fill="#4caf50" fillOpacity="0.15"/>
              <path d="M20 34L29 43L44 25" stroke="#4caf50" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <Typography variant="h5" sx={{ fontWeight: 800, color: '#388e3c', mb: 1 }}>
              Спасибо за заявку!
            </Typography>
            <Typography variant="body1" sx={{ color: '#444', mb: 1, fontSize: 18 }}>
              Мы свяжемся с вами в ближайшее время.
            </Typography>
          </Box>
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
            {showMessageField && (
              <TextField
                fullWidth
                label="Сообщение"
                name="message"
                value={form.message}
                onChange={handleChange}
                variant="outlined"
                disabled={isSubmitting}
                multiline
                rows={4}
                sx={{ mb: 2 }}
              />
            )}
            {submitStatus === 'error' && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {errorMessage}
                <Box sx={{ mt: 1, fontSize: '0.9rem' }}>
                  <strong>Альтернативные способы связи:</strong>
                  <br />
                  📞 Телефон: +7 (123) 456-78-90
                  <br />
                  📧 Email: erudite_edu@mail.ru
                </Box>
              </Alert>
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
                  showMessageField ? 'Отправить сообщение' : 'Отправить заявку'
                )}
              </Button>
            </DialogActions>
          </Box>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PopupForm; 