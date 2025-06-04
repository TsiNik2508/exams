import { Container, Typography, Box, Grid, Card, CardContent, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const pricingPlans = [
  {
    title: 'ЕГЭ',
    price: 'от 5000 ₽/мес',
    features: [
      'Групповые занятия',
      '2 занятия в неделю',
      'Доступ к материалам',
      'Пробные экзамены',
    ],
    buttonText: 'Выбрать курс ЕГЭ',
    path: '/ege',
  },
  {
    title: 'ОГЭ',
    price: 'от 4000 ₽/мес',
    features: [
      'Групповые занятия',
      '2 занятия в неделю',
      'Доступ к материалам',
      'Пробные экзамены',
    ],
    buttonText: 'Выбрать курс ОГЭ',
    path: '/oge',
  },
  {
    title: '5-8 класс',
    price: 'от 3500 ₽/мес',
    features: [
      'Групповые занятия',
      '2 занятия в неделю',
      'Доступ к материалам',
      'Домашние задания',
    ],
    buttonText: 'Выбрать курс',
    path: '/middle-school',
  },
  {
    title: '1-4 класс',
    price: 'от 3000 ₽/мес',
    features: [
      'Групповые занятия',
      '2 занятия в неделю',
      'Доступ к материалам',
      'Домашние задания',
    ],
    buttonText: 'Выбрать курс',
    path: '/elementary-school',
  },
];

const Prices = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 8 }}>
        <Typography variant="h3" component="h1" gutterBottom textAlign="center">
          Стоимость обучения
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph textAlign="center">
          Выберите подходящий курс для подготовки
        </Typography>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          {pricingPlans.map((plan) => (
            <Grid item xs={12} md={6} lg={3} key={plan.title}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" component="h2" gutterBottom>
                    {plan.title}
                  </Typography>
                  <Typography variant="h4" color="primary" gutterBottom>
                    {plan.price}
                  </Typography>
                  <Box component="ul" sx={{ pl: 2, mb: 2 }}>
                    {plan.features.map((feature) => (
                      <Typography component="li" key={feature}>
                        {feature}
                      </Typography>
                    ))}
                  </Box>
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={() => navigate(plan.path)}
                  >
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Typography variant="h6" gutterBottom>
            Нужна индивидуальная программа?
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Свяжитесь с нами для обсуждения индивидуальных условий обучения
          </Typography>
          <Button variant="outlined" size="large">
            Связаться с нами
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Prices; 