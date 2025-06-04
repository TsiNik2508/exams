import { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from '@mui/material';

const subjects = [
  {
    name: 'Математика',
    description: 'Подготовка к ЕГЭ по математике профильного уровня',
    topics: ['Алгебра', 'Геометрия', 'Тригонометрия', 'Начала анализа'],
  },
  {
    name: 'Русский язык',
    description: 'Подготовка к ЕГЭ по русскому языку',
    topics: ['Орфография', 'Пунктуация', 'Сочинение', 'Изложение'],
  },
  {
    name: 'Физика',
    description: 'Подготовка к ЕГЭ по физике',
    topics: ['Механика', 'Электродинамика', 'Оптика', 'Квантовая физика'],
  },
  {
    name: 'Информатика',
    description: 'Подготовка к ЕГЭ по информатике',
    topics: ['Программирование', 'Алгоритмы', 'Базы данных', 'Сети'],
  },
];

const EGECourses = () => {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
  });

  const handleSubjectClick = (subject: string) => {
    setSelectedSubject(subject);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedSubject(null);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log('Form submitted:', { subject: selectedSubject, ...formData });
    handleCloseDialog();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 8 }}>
        <Typography variant="h3" component="h1" gutterBottom textAlign="center">
          Курсы подготовки к ЕГЭ
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph textAlign="center">
          Выберите предмет для подготовки
        </Typography>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          {subjects.map((subject) => (
            <Grid item xs={12} md={6} key={subject.name}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="h2" gutterBottom>
                    {subject.name}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {subject.description}
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    Темы курса:
                  </Typography>
                  <Box component="ul" sx={{ pl: 2 }}>
                    {subject.topics.map((topic) => (
                      <Typography component="li" key={topic}>
                        {topic}
                      </Typography>
                    ))}
                  </Box>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{ mt: 2 }}
                    onClick={() => handleSubjectClick(subject.name)}
                  >
                    Записаться на курс
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Запись на курс {selectedSubject}</DialogTitle>
        <form onSubmit={handleFormSubmit}>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              name="name"
              label="Ваше имя"
              type="text"
              fullWidth
              variant="outlined"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <TextField
              margin="dense"
              name="phone"
              label="Номер телефона"
              type="tel"
              fullWidth
              variant="outlined"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>Отмена</Button>
            <Button type="submit" variant="contained">
              Отправить
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </Container>
  );
};

export default EGECourses; 