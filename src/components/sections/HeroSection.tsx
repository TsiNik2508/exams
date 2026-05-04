import React, { useState } from 'react';
import { Box, Typography, Container, Paper, TextField, Button, CircularProgress, Alert, FormControlLabel, Checkbox, FormHelperText } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import StarIcon from '@mui/icons-material/Star';
import SchoolIcon from '@mui/icons-material/School';
import GroupsIcon from '@mui/icons-material/Groups';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import PopupForm from '../common/PopupForm';

const advantages = [
  {
    icon: <EmojiEventsIcon />, color: '#1e7dbd', stripe: '#1e7dbd', text: '3 года на рынке',
  },
  {
    icon: <StarIcon />, color: '#f2aa8d', stripe: '#f2aa8d', text: 'Каждый второй сдал ЕГЭ на 80+ баллов',
  },
  {
    icon: <WorkspacePremiumIcon />, color: '#1e7dbd', stripe: '#1e7dbd', text: 'Профессиональные экзамены ЕГЭ',
  },
  {
    icon: <SchoolIcon />, color: '#f2aa8d', stripe: '#f2aa8d', text: 'Молодые преподаватели',
  },
  {
    icon: <Diversity3Icon />, color: '#1e7dbd', stripe: '#1e7dbd', text: 'Особый подход к каждому ученику',
  },
  {
    icon: <GroupsIcon />, color: '#f2aa8d', stripe: '#f2aa8d', text: 'Группы до 8 человек',
  },
];

const styles = {
  container: {
    py: { xs: 10, md: 16 },
    position: 'relative',
    overflow: 'hidden',
  },
  content: {
    position: 'relative',
    zIndex: 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 4,
  },
  title: {
    fontWeight: 900,
    fontSize: { xs: '2.2rem', md: '3.2rem' },
    color: '#1e7dbd',
    textAlign: 'center',
    lineHeight: 1.13,
    mb: 0.5,
  },
  titleAccentBlue: {
    color: '#1e7dbd',
    display: 'inline',
    fontWeight: 900,
  },
  titleAccentOrange: {
    color: '#f2aa8d',
    display: 'inline',
    fontWeight: 900,
  },
  subtitle: {
    color: '#64748b',
    fontSize: { xs: '1.15rem', md: '1.35rem' },
    lineHeight: 1.6,
    textAlign: 'center',
    maxWidth: 600,
    mb: 2,
  },
  subtitleAccent: {
    color: '#1e7dbd',
    fontWeight: 700,
    display: 'inline',
  },
  badgeRow: {
    display: 'flex',
    gap: 1.5,
    mb: 2,
    flexWrap: 'wrap',
    justifyContent: 'center',
    mt: 1,
  },
  badge: {
    fontWeight: 700,
    fontSize: '0.95rem',
    px: 2,
    py: 0.5,
    borderRadius: 2,
    boxShadow: '0 1px 6px rgba(30,125,189,0.08)',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 1,
    bgcolor: '#1e7dbd',
    color: '#fff',
    letterSpacing: 0.3,
    textTransform: 'uppercase',
    minHeight: 28,
    height: 28,
  },
  giftBadge: {
    bgcolor: '#e3f0fa',
    color: '#1e7dbd',
    fontWeight: 700,
    fontSize: '0.95rem',
    px: 2,
    py: 0.5,
    borderRadius: 2,
    boxShadow: '0 1px 6px rgba(30,125,189,0.06)',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 1,
    letterSpacing: 0.3,
    textTransform: 'uppercase',
    minHeight: 28,
    height: 28,
  },
  advGrid: {
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
    gap: { xs: 2, md: 3 },
    width: '100%',
    maxWidth: 1000,
    mt: 2,
  },
  advCard: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 1.5,
    bgcolor: '#fff',
    borderRadius: 4,
    boxShadow: '0 8px 25px 0 rgba(30,125,189,0.15), 0 4px 12px 0 rgba(0,0,0,0.1)',
    px: 2.5,
    py: 1.5,
    minHeight: 90,
    maxHeight: 90,
    height: 90,
    position: 'relative',
    overflow: 'hidden',
    textAlign: 'left',
    border: 'none',
    transition: 'box-shadow 0.3s, transform 0.3s',
    '&:hover': {
      boxShadow: '0 12px 35px 0 rgba(30,125,189,0.25), 0 6px 20px 0 rgba(0,0,0,0.15)',
      transform: 'scale(1.025)',
    },
  },
  advCardInner: {
    display: 'flex',
    alignItems: 'center',
    gap: 1.5,
    width: '100%',
    px: 2,
    py: 0,
    position: 'relative',
    zIndex: 3,
  },
  advIconCircle: {
    minWidth: 38,
    minHeight: 38,
    maxWidth: 38,
    maxHeight: 38,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 22,
    boxShadow: '0 1px 4px rgba(30,125,189,0.08)',
    mr: 1.5,
    zIndex: 3,
    bgcolor: '#f7fafd',
  },
  formContainer: {
    mt: 6,
    mb: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 3,
  },
  formTitle: {
    fontWeight: 800,
    fontSize: { xs: '1.5rem', md: '1.8rem' },
    color: '#1e7dbd',
    textAlign: 'center',
    mb: 1,
  },
  formSubtitle: {
    color: '#64748b',
    fontSize: { xs: '1rem', md: '1.1rem' },
    textAlign: 'center',
    maxWidth: 500,
    mb: 2,
  },
  formCard: {
    bgcolor: '#fff',
    borderRadius: 4,
    boxShadow: '0 8px 25px 0 rgba(30,125,189,0.15), 0 4px 12px 0 rgba(0,0,0,0.1)',
    p: { xs: 3, md: 4 },
    width: '100%',
    maxWidth: 500,
    border: '1px solid rgba(30,125,189,0.1)',
  },
  formGrid: {
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
    gap: 2,
    mb: 3,
  },
  formField: {
    '& .MuiOutlinedInput-root': {
      borderRadius: 2,
      '& fieldset': {
        borderColor: '#e2e8f0',
      },
      '&:hover fieldset': {
        borderColor: '#1e7dbd',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#1e7dbd',
        borderWidth: 2,
      },
    },
  },
  submitButton: {
    width: '100%',
    py: 1.5,
    borderRadius: 2,
    fontSize: '1.1rem',
    fontWeight: 700,
    textTransform: 'none',
    boxShadow: '0 4px 15px rgba(30,125,189,0.3)',
    '&:hover': {
      boxShadow: '0 6px 20px rgba(30,125,189,0.4)',
      transform: 'translateY(-2px)',
    },
    transition: 'all 0.3s ease',
  },
  successMessage: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    py: 4,
    px: 2,
    textAlign: 'center',
    animation: 'fadeIn 0.7s',
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.97, y: 18 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, type: 'spring', stiffness: 120 },
  }),
};

const HeroSection: React.FC = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupCourse, setPopupCourse] = useState('');
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [acceptPolicy, setAcceptPolicy] = useState(false);
  const [policyError, setPolicyError] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleOpenPopup = (course: string) => {
    setPopupCourse(course);
    setPopupOpen(true);
  };

  // Форматтер для телефона: +7 (XXX) XXX-XX-XX
  const formatPhone = (raw: string) => {
    let digits = raw.replace(/\D/g, '');
    if (digits.startsWith('7')) digits = digits.slice(1);
    if (digits.length > 10) digits = digits.slice(0, 10);
    let formatted = '+7';
    if (digits.length > 0) formatted += ' (' + digits.slice(0, 3);
    if (digits.length >= 4) formatted += ') ' + digits.slice(3, 6);
    if (digits.length >= 7) formatted += '-' + digits.slice(6, 8);
    if (digits.length >= 9) formatted += '-' + digits.slice(8, 10);
    return formatted;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    value = value.replace(/[^\d+]/g, '');
    if (!value.startsWith('+7')) {
      value = '+7' + value.replace(/^\+?7?/, '');
    }
    const formatted = formatPhone(value);
    setFormData(prev => ({ ...prev, phone: formatted }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone) {
      setSubmitStatus('error');
      setErrorMessage('Пожалуйста, заполните имя и телефон');
      return;
    }

    if (!acceptPolicy) {
      setPolicyError(true);
      setSubmitStatus('error');
      setErrorMessage('Пожалуйста, подтвердите согласие на обработку персональных данных');
      return;
    }
    setPolicyError(false);

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
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          subject: `Заявка с главной страницы - форма под преимуществами`,
          from_name: formData.name,
          replyto: formData.email,
          message: `Заявка с главной страницы - форма под преимуществами\nИмя: ${formData.name}\nТелефон: ${formData.phone}\nEmail: ${formData.email}`
        }),
      });

      const data = await response.json();

      if (data.success) {
        // Отправляем событие в Яндекс.Метрику
        if (typeof window.ym === 'function') {
          window.ym(104015630, 'hit', '/thank-you');
        }
        
        // Перенаправляем на страницу "Спасибо"
        navigate('/thank-you', { 
          state: { from: location.pathname },
          replace: true 
        });
        setFormData({ name: '', phone: '', email: '' });
        setAcceptPolicy(false);
        setPolicyError(false);
      } else {
        setSubmitStatus('error');
        setErrorMessage('Произошла ошибка при отправке. Попробуйте еще раз.');
      }
    } catch (error) {
      console.error('Ошибка при отправке формы:', error);
      setSubmitStatus('error');
      setErrorMessage('Произошла ошибка при отправке. Попробуйте еще раз.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box sx={styles.container}>
      {/* Стикеры в углах для десктопа */}
      <Box 
        onClick={() => handleOpenPopup('Бесплатное пробное занятие')}
        sx={{ 
          display: { xs: 'none', lg: 'flex' },
          position: 'absolute', 
          top: { lg: 120, xl: 100 },
          left: '2%',
          zIndex: 3,
          width: { lg: 140, xl: 160 },
          height: { lg: 140, xl: 160 },
          borderRadius: '50%',
          bgcolor: '#1e7dbd',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 40px rgba(30,125,189,0.4), 0 4px 20px rgba(30,125,189,0.2), inset 0 2px 10px rgba(255,255,255,0.1)',
          transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          cursor: 'pointer',
          border: '3px solid rgba(255,255,255,0.2)',
          animation: 'pulse 2s infinite',
          '&:hover': { 
            transform: 'scale(1.15) translateY(-5px)',
            boxShadow: '0 12px 50px rgba(30,125,189,0.5), 0 8px 30px rgba(30,125,189,0.3), inset 0 2px 10px rgba(255,255,255,0.15)',
            border: '3px solid rgba(255,255,255,0.3)'
          },
          '&:active': {
            transform: 'scale(1.05) translateY(-2px)'
          }
        }}
      >
        <CardGiftcardIcon sx={{ 
          position: 'absolute', 
          fontSize: { lg: 60, xl: 70 }, 
          color: '#fff', 
          opacity: 0.2,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          animation: 'float 3s ease-in-out infinite'
        }} />
        <Typography sx={{ 
          color: '#fff',
          fontWeight: 800,
          fontSize: { lg: 12, xl: 13 },
          textAlign: 'center',
          lineHeight: 1.1,
          px: 1.5,
          position: 'relative',
          zIndex: 2,
          textShadow: '0 2px 8px rgba(0,0,0,0.4), 0 1px 3px rgba(0,0,0,0.6)',
          letterSpacing: '0.5px'
        }}>
          Бесплатное пробное занятие
        </Typography>
      </Box>
      
      <Box 
        onClick={() => handleOpenPopup('Подарок за друга')}
        sx={{ 
          display: { xs: 'none', lg: 'flex' },
          position: 'absolute', 
          bottom: { lg: 120, xl: 100 },
          right: '2%',
          zIndex: 3,
          width: { lg: 140, xl: 160 },
          height: { lg: 140, xl: 160 },
          borderRadius: '50%',
          bgcolor: '#f2aa8d',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 40px rgba(242,170,141,0.4), 0 4px 20px rgba(242,170,141,0.2), inset 0 2px 10px rgba(255,255,255,0.1)',
          transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          cursor: 'pointer',
          border: '3px solid rgba(255,255,255,0.2)',
          animation: 'pulseOrange 2s infinite 1s',
          '&:hover': { 
            transform: 'scale(1.15) translateY(-5px)',
            boxShadow: '0 12px 50px rgba(242,170,141,0.5), 0 8px 30px rgba(242,170,141,0.3), inset 0 2px 10px rgba(255,255,255,0.15)',
            border: '3px solid rgba(255,255,255,0.3)'
          },
          '&:active': {
            transform: 'scale(1.05) translateY(-2px)'
          }
        }}
      >
        <CardGiftcardIcon sx={{ 
          position: 'absolute', 
          fontSize: { lg: 60, xl: 70 }, 
          color: '#fff', 
          opacity: 0.2,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          animation: 'float 3s ease-in-out infinite 1.5s'
        }} />
        <Typography sx={{ 
          color: '#fff',
          fontWeight: 800,
          fontSize: { lg: 12, xl: 13 },
          textAlign: 'center',
          lineHeight: 1.1,
          px: 1.5,
          position: 'relative',
          zIndex: 2,
          textShadow: '0 2px 8px rgba(0,0,0,0.4), 0 1px 3px rgba(0,0,0,0.6)',
          letterSpacing: '0.5px'
        }}>
          Подарок за друга
        </Typography>
      </Box>

      <Container maxWidth="lg">
        <Box sx={styles.content}>
          <Typography variant="h1" sx={{ ...styles.title, mt: { xs: 4, md: 0 }, fontSize: { xs: 28, md: 36 } }}>
            Подготовка к <span style={styles.titleAccentOrange}>ЕГЭ</span> и <span style={styles.titleAccentOrange}>ОГЭ</span>
          </Typography>
          
          {/* Стикеры для мобильной версии в виде плашек */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, flexDirection: 'column', gap: 3, mb: 3 }}>
            <Box 
              onClick={() => handleOpenPopup('Бесплатное пробное занятие')}
              sx={{ 
                width: '100%', 
                height: 70, 
                borderRadius: '35px', 
                bgcolor: '#1e7dbd', 
                position: 'relative', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                flexDirection: 'column', 
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)', 
                cursor: 'pointer',
                boxShadow: '0 6px 25px rgba(30,125,189,0.3), 0 3px 15px rgba(30,125,189,0.2), inset 0 2px 8px rgba(255,255,255,0.1)',
                border: '2px solid rgba(255,255,255,0.2)',
                animation: 'pulse 2s infinite',
                '&:hover': { 
                  transform: 'translateY(-8px) scale(1.02)',
                  boxShadow: '0 10px 35px rgba(30,125,189,0.4), 0 5px 20px rgba(30,125,189,0.3), inset 0 2px 8px rgba(255,255,255,0.15)',
                  border: '2px solid rgba(255,255,255,0.3)'
                },
                '&:active': {
                  transform: 'translateY(-4px) scale(1.01)'
                }
              }}
            >
              <CardGiftcardIcon sx={{ 
                position: 'absolute', 
                left: '50%', 
                top: '50%', 
                fontSize: 48, 
                opacity: 0.15, 
                color: '#fff', 
                transform: 'translate(-50%, -50%)',
                animation: 'float 3s ease-in-out infinite'
              }} />
              <Typography sx={{ 
                color: '#fff', 
                fontWeight: 800, 
                fontSize: 15, 
                textAlign: 'center', 
                zIndex: 2, 
                lineHeight: 1.1, 
                position: 'relative',
                textShadow: '0 2px 6px rgba(0,0,0,0.4), 0 1px 2px rgba(0,0,0,0.6)',
                letterSpacing: '0.3px'
              }}>
                Бесплатное пробное занятие
              </Typography>
            </Box>
          </Box>
          
          <Typography variant="h2" sx={styles.subtitle}>
            <span style={styles.subtitleAccent}>Индивидуальный подход</span>, <span style={styles.subtitleAccent}>мини-группы</span>, молодые преподаватели и реальные результаты.<br />
            Поможем сдать экзамены на <span style={styles.subtitleAccent}>80+ баллов</span> и поступить в вуз мечты!
          </Typography>
          <Box sx={styles.advGrid}>
            {advantages.map((adv, i) => (
              <Paper
                key={i}
                elevation={0}
                sx={{
                  ...styles.advCard,
                  borderLeft: `8px solid ${adv.stripe}`,
                }}
                component={motion.div}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={i}
              >
                <Box sx={styles.advCardInner}>
                  <Box sx={{ ...styles.advIconCircle }}>
                    {React.cloneElement(adv.icon, { sx: { color: adv.color, fontSize: 36 } })}
                  </Box>
                  <Typography sx={{ fontWeight: 600, fontSize: { xs: 15, md: 16 }, lineHeight: 1.3 }}>{adv.text}</Typography>
                </Box>
              </Paper>
            ))}
          </Box>

          {/* Форма под преимуществами */}
          <Box sx={styles.formContainer}>
            <Typography variant="h3" sx={styles.formTitle}>
              Готовы начать подготовку?
            </Typography>
            <Typography sx={styles.formSubtitle}>
              Оставьте заявку и мы свяжемся с вами в течение 15 минут
            </Typography>
            
            <Paper elevation={0} sx={styles.formCard}>
              <Box component="form" onSubmit={handleFormSubmit}>
                  <Box sx={styles.formGrid}>
                    <TextField
                      fullWidth
                      label="Ваше имя"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      variant="outlined"
                      disabled={isSubmitting}
                      sx={styles.formField}
                    />
                    <TextField
                      fullWidth
                      label="Телефон"
                      name="phone"
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      variant="outlined"
                      disabled={isSubmitting}
                      placeholder="+7 (___) ___-__-__"
                      inputProps={{ maxLength: 18, inputMode: 'tel' }}
                      sx={styles.formField}
                    />
                  </Box>
                  <TextField
                    fullWidth
                    label="Email (необязательно)"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    variant="outlined"
                    disabled={isSubmitting}
                    sx={{ ...styles.formField, mb: 3 }}
                  />
                  
                  {submitStatus === 'error' && (
                    <Alert severity="error" sx={{ mb: 2 }}>
                      {errorMessage}
                    </Alert>
                  )}
                  
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={acceptPolicy}
                        onChange={(e) => {
                          setAcceptPolicy(e.target.checked);
                          if (policyError) {
                            setPolicyError(false);
                          }
                        }}
                        color="primary"
                        disabled={isSubmitting}
                      />
                    }
                    sx={{ alignItems: 'flex-start', mb: policyError ? 0 : 2 }}
                    label={
                      <Typography component="span" color="text.secondary" sx={{ lineHeight: 1.5 }}>
                        Я согласен(а) с{' '}
                        <Box component="a" href="/terms" target="_blank" rel="noopener noreferrer" sx={{ color: '#1e7dbd', fontWeight: 600 }}>
                          Пользовательским соглашением
                        </Box>{' '}
                        и{' '}
                        <Box component="a" href="/privacy" target="_blank" rel="noopener noreferrer" sx={{ color: '#1e7dbd', fontWeight: 600 }}>
                          Политикой конфиденциальности
                        </Box>
                      </Typography>
                    }
                  />
                  {policyError && (
                    <FormHelperText error sx={{ mb: 2 }}>
                      Пожалуйста, подтвердите согласие на обработку персональных данных
                    </FormHelperText>
                  )}

                  <Button
                    type="submit"
                    variant="contained"
                    disabled={isSubmitting}
                    sx={styles.submitButton}
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
                </Box>
            </Paper>
          </Box>

        </Box>
      </Container>

      {/* Попап с формой */}
      <PopupForm
        open={popupOpen}
        onClose={() => setPopupOpen(false)}
        course={popupCourse}
        section="Главная страница"
        formKey="hero-section"
      />
    </Box>
  );
};

export default HeroSection;