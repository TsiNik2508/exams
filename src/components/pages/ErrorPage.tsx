import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';

const ErrorPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/', { replace: true });
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(140deg, rgba(30,125,189,0.08), rgba(242,170,141,0.14))',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: 8,
        px: 2,
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            backgroundColor: '#fff',
            borderRadius: 5,
            boxShadow: '0 25px 60px rgba(30,125,189,0.15)',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: -110,
              right: -60,
              width: 220,
              height: 220,
              borderRadius: '50%',
              background: 'radial-gradient(circle at center, rgba(242,170,141,0.35), rgba(242,170,141,0))',
              zIndex: 0,
            }}
          />

          <Box sx={{ position: 'relative', zIndex: 1, px: { xs: 4, md: 8 }, py: { xs: 6, md: 8 } }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 4 }}>
              <Box
                sx={{
                  width: 96,
                  height: 96,
                  borderRadius: '50%',
                  background: 'linear-gradient(140deg, #1e7dbd, #429dd9)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 12px 30px rgba(30,125,189,0.35)',
                  color: '#fff',
                }}
              >
                <WarningAmberRoundedIcon sx={{ fontSize: 48 }} />
              </Box>
            </Box>

            <Typography
              variant="h1"
              sx={{
                fontWeight: 900,
                textAlign: 'center',
                fontSize: { xs: '4rem', md: '6rem' },
                lineHeight: 1,
                color: '#1e7dbd',
                mb: 2,
              }}
            >
              404
            </Typography>

            <Typography
              variant="h4"
              sx={{
                fontWeight: 800,
                textAlign: 'center',
                fontSize: { xs: '1.8rem', md: '2.2rem' },
                color: '#0f172a',
                mb: 2,
              }}
            >
              Страница не найдена
            </Typography>

            <Typography
              variant="body1"
              sx={{
                textAlign: 'center',
                color: '#64748b',
                fontSize: { xs: '1rem', md: '1.05rem' },
                maxWidth: 520,
                mx: 'auto',
                mb: 3,
                lineHeight: 1.7,
              }}
            >
              Возможно, страница была удалена или адрес введён с ошибкой. Попробуйте вернуться на главную
              или воспользуйтесь контактами ниже, чтобы мы помогли вам разобраться.
            </Typography>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1.5,
                bgcolor: 'rgba(30,125,189,0.08)',
                borderRadius: 3,
                px: 3,
                py: 2,
                mb: 5,
              }}
            >
              <Typography sx={{ color: '#1e7dbd', fontWeight: 700, fontSize: '1rem' }}>
                Позвоните нам:
              </Typography>
              <Box
                component="a"
                href="tel:+79522817749"
                sx={{
                  color: '#0f172a',
                  fontWeight: 700,
                  fontSize: '1.05rem',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                  '&:hover': {
                    color: '#1e7dbd',
                  },
                }}
              >
                +7 (952) 281-77-49
              </Box>
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: 'center',
                justifyContent: 'center',
                gap: 2,
              }}
            >
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={handleGoHome}
                sx={{
                  minWidth: 220,
                  borderRadius: 3,
                  fontWeight: 700,
                  textTransform: 'none',
                  fontSize: '1rem',
                  boxShadow: '0 12px 30px rgba(30,125,189,0.25)',
                  '&:hover': {
                    boxShadow: '0 16px 36px rgba(30,125,189,0.3)',
                  },
                }}
              >
                На главную страницу
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ErrorPage;
