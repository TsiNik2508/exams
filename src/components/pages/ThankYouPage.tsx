import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate, useLocation } from 'react-router-dom';

const ThankYouPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoBack = () => {
    // Получаем предыдущую страницу из state или возвращаемся на главную
    const from = location.state?.from || '/';
    navigate(from, { replace: true });
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        py: 4,
      }}
    >
      <Container maxWidth="sm">
        <Box
          sx={{
            textAlign: 'center',
            bgcolor: '#fff',
            borderRadius: 4,
            p: 6,
            boxShadow: '0 20px 60px rgba(0,0,0,0.1), 0 8px 25px rgba(0,0,0,0.05)',
            border: '1px solid rgba(30,125,189,0.1)',
          }}
        >
          {/* Иконка успеха */}
          <Box
            sx={{
              width: 120,
              height: 120,
              borderRadius: '50%',
              bgcolor: '#4caf50',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mx: 'auto',
              mb: 4,
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: -4,
                left: -4,
                right: -4,
                bottom: -4,
                borderRadius: '50%',
                background: 'linear-gradient(45deg, #4caf50, #66bb6a)',
                opacity: 0.2,
                zIndex: -1,
              },
            }}
          >
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 30L27 37L40 22"
                stroke="#fff"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Box>

          {/* Заголовок */}
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              color: '#1e7dbd',
              mb: 2,
              fontSize: { xs: '2rem', md: '2.5rem' },
            }}
          >
            Спасибо за заявку!
          </Typography>

          {/* Подзаголовок */}
          <Typography
            variant="h6"
            sx={{
              color: '#64748b',
              mb: 4,
              fontSize: { xs: '1.1rem', md: '1.2rem' },
              lineHeight: 1.6,
            }}
          >
            Мы получили вашу заявку и свяжемся с вами в ближайшее время
          </Typography>


          {/* Контактная информация */}
          <Box
            sx={{
              bgcolor: '#1e7dbd',
              borderRadius: 3,
              p: 3,
              mb: 4,
              color: '#fff',
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: '0.95rem',
                lineHeight: 1.6,
                mb: 1,
              }}
            >
              <strong>Есть срочные вопросы?</strong>
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: '0.9rem',
                opacity: 0.9,
              }}
            >
              📞 +7 (952) 281-77-49
              <br />
              📧 erudite_edu@mail.ru
            </Typography>
          </Box>

          {/* Кнопка "Назад" */}
          <Button
            variant="contained"
            size="large"
            startIcon={<ArrowBackIcon />}
            onClick={handleGoBack}
            sx={{
              bgcolor: '#f2aa8d',
              color: '#fff',
              fontWeight: 700,
              fontSize: '1.1rem',
              py: 1.5,
              px: 4,
              borderRadius: 3,
              textTransform: 'none',
              boxShadow: '0 8px 25px rgba(242,170,141,0.3)',
              transition: 'all 0.3s ease',
              '&:hover': {
                bgcolor: '#e89a7d',
                transform: 'translateY(-2px)',
                boxShadow: '0 12px 35px rgba(242,170,141,0.4)',
              },
            }}
          >
            Вернуться назад
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ThankYouPage;
