import { Box, Container, Typography, Card, CardContent, Avatar, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import StarIcon from '@mui/icons-material/Star';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

// Импортируем фотографии отзывов
import review1 from '../../assets/review/1.jpg';
import review2 from '../../assets/review/2.jpg';
import review3 from '../../assets/review/3.jpg';
import review4 from '../../assets/review/4.jpg';

const reviews = [
  {
    id: 1,
    name: 'Екатерина Смирнова',
    grade: '11 класс',
    text: 'Благодаря курсам по математике я смогла сдать ЕГЭ на 98 баллов! Преподаватели объясняют материал очень доступно и интересно.',
    rating: 5,
    photo: review1,
    subject: 'Математика',
  },
  {
    id: 2,
    name: 'Александр Петров',
    grade: '9 класс',
    text: 'Отличные курсы по физике! Теперь я понимаю предмет намного лучше, а домашние задания стали делать с удовольствием.',
    rating: 5,
    photo: review2,
    subject: 'Физика',
  },
  {
    id: 3,
    name: 'Мария Иванова',
    grade: '8 класс',
    text: 'Занимаюсь русским языком уже второй год. Результаты заметны: оценки улучшились, а грамотность стала выше.',
    rating: 5,
    photo: review3,
    subject: 'Русский язык',
  },
  {
    id: 4,
    name: 'Дмитрий Козлов',
    grade: '10 класс',
    text: 'Преподаватели находят подход к каждому ученику. Материал подается структурированно и понятно.',
    rating: 5,
    photo: review4,
    subject: 'Английский язык',
  },
];

const ReviewsSection = () => {
  return (
    <Box sx={{ py: 8, position: 'relative', overflow: 'hidden' }}>
      <Container sx={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            component="h2"
            align="center"
            sx={{ mb: 6, color: '#1e7dbd' }}
          >
            Отзывы наших учеников
          </Typography>
        </motion.div>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr' }, gap: 4 }}>
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  transition: 'all 0.3s ease-in-out',
                  background: '#fff',
                  boxShadow: '0 4px 24px rgba(30,125,189,0.1)',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 24px rgba(30,125,189,0.15)',
                  },
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: index % 2 === 0 ? '#1e7dbd' : '#f2aa8d',
                  }}
                />
                <CardContent sx={{ flexGrow: 1, pt: 4, px: 3, pb: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Avatar
                      src={review.photo}
                      alt={review.name}
                      sx={{
                        width: 64,
                        height: 64,
                        mr: 2,
                        border: '3px solid #fff',
                        boxShadow: '0 4px 12px rgba(30,125,189,0.1)',
                      }}
                    />
                    <Box>
                      <Typography variant="h6" component="h3" sx={{ fontWeight: 600, color: '#1e7dbd' }}>
                        {review.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                        {review.grade}
                      </Typography>
                      <Chip
                        label={review.subject}
                        size="small"
                        sx={{
                          bgcolor: index % 2 === 0 ? '#1e7dbd' : '#f2aa8d',
                          color: '#fff',
                          fontWeight: 500,
                          fontSize: '0.75rem',
                        }}
                      />
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    {[...Array(review.rating)].map((_, i) => (
                      <StarIcon key={i} sx={{ color: index % 2 === 0 ? '#1e7dbd' : '#f2aa8d', fontSize: 20 }} />
                    ))}
                  </Box>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                      lineHeight: 1.6,
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 1,
                      pl: 0,
                    }}
                  >
                    <FormatQuoteIcon sx={{ fontSize: 24, color: index % 2 === 0 ? '#1e7dbd' : '#f2aa8d', opacity: 0.3, mt: '2px' }} />
                    {review.text}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ReviewsSection; 