import { Box, Container, Typography, Button, Paper, Grow } from '@mui/material';
import { useParams, Link } from 'react-router-dom';
import { teachers } from '../../data/teachers';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonIcon from '@mui/icons-material/Person';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { useInView } from 'react-intersection-observer';

// Import teacher images
import annaImg from '../../assets/teachers/anna.jpg';
import pavelImg from '../../assets/teachers/pavel.jpg';
import ireneImg from '../../assets/teachers/irene.jpg';
import nikitaImg from '../../assets/teachers/nikita.jpg';
import dariaSocImg from '../../assets/teachers/daria-soc.jpg';
import christinaImg from '../../assets/teachers/christina.jpg';
import alexanderImg from '../../assets/teachers/alexander.jpg';
import airatImg from '../../assets/teachers/airat.jpg';
import dariaRusImg from '../../assets/teachers/daria-rus.jpg';
import dmitryiImg from '../../assets/teachers/dmitryi.jpg';

// Map teacher names to their local images
const teacherImages: { [key: string]: string } = {
  'Анна Гавриленко': annaImg,
  'Павел Кондрашев': pavelImg,
  'Ирина Сарамбаева': ireneImg,
  'Никита Каменский': nikitaImg,
  'Дарья Александрова': dariaSocImg,
  'Кристина Горбунова': christinaImg,
  'Александр Ноговицын': alexanderImg,
  'Айрат Габараев': airatImg,
  'Дарья Солоненко': dariaRusImg,
  'Дмитрий Гусар': dmitryiImg,
};

// Маппинг URL-параметров на названия предметов
const subjectMapping: { [key: string]: string } = {
  'math': 'Математика',
  'russian': 'Русский язык',
  'physics': 'Физика',
  'informatics': 'Информатика',
  'english': 'Английский язык',
  'biology': 'Биология',
  'chemistry': 'Химия',
  'history': 'История',
  'social': 'Обществознание',
  'literature': 'Литература',
};

const examTypeMapping: { [key: string]: string } = {
  ege: 'ЕГЭ',
  oge: 'ОГЭ',
  online: 'Онлайн курс',
  middle: '5-8 класс',
};

const styles = {
  hero: {
    background: '#0d4a6b',
    color: 'white',
    pt: { xs: 10, md: 10 },
    pb: { xs: 3, md: 2 },
    position: 'relative',
    overflow: 'hidden',
    borderBottom: '1px solid rgba(255,255,255,0.2)',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
      opacity: 0.3,
    },
  },
  heroContent: {
    position: 'relative',
    zIndex: 2,
    textAlign: 'center'
  },
  teacherSection: {
    py: { xs: 6, md: 8 },
    background: '#ffffff',
  },
  priceSection: {
    py: { xs: 6, md: 8 },
    background: '#f8fafc',
  },
  teacherCard: {
    background: 'transparent',
    boxShadow: 'none',
    p: 0,
  },
  teacherImage: {
    width: '100%',
    height: { xs: 350, sm: 450, md: 550 },
    objectFit: 'cover' as const,
    borderRadius: '24px',
    boxShadow: '0 8px 24px rgba(30,125,189,0.1)',
  },
  reviewCard: {
    background: 'white',
    borderRadius: '20px',
    p: { xs: 3, md: 4 },
    boxShadow: '0 8px 24px rgba(30,125,189,0.08)',
    position: 'relative',
    border: '1px solid #e2e8f0',
  },
  priceCard: {
    p: { xs: 3, md: 4 },
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: '20px',
    background: 'white',
    boxShadow: '0 4px 16px rgba(30,125,189,0.05)',
    border: '1px solid #e2e8f0',
    transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
    position: 'relative',
    overflow: 'hidden',
    '&:hover': {
      transform: 'translateY(-5px) scale(1.02)',
      boxShadow: '0 12px 32px rgba(30,125,189,0.1)',
      borderColor: '#1e7dbd'
    },
  },
  button: {
    background: '#1e7dbd',
    color: 'white',
    px: { xs: 3, md: 4 },
    py: { xs: 1.5, md: 2 },
    borderRadius: '12px',
    fontSize: '1.1rem',
    fontWeight: 600,
    textTransform: 'none',
    boxShadow: '0 4px 16px rgba(30,125,189,0.25)',
    transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
    '&:hover': {
      background: '#f2aa8d',
      transform: 'translateY(-3px)',
      boxShadow: '0 8px 20px rgba(242,170,141,0.3)',
    },
  },
  statsCard: {
    background: '#f8fafc',
    border: '1px solid #e2e8f0',
    borderRadius: '16px',
    p: 3,
    textAlign: 'center',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 8px 20px rgba(30,125,189,0.05)',
      borderColor: '#1e7dbd'
    }
  },
};

const AnimatedBlock = ({ children, delay = 0 }: { children: React.ReactElement, delay?: number }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box ref={ref}>
      <Grow in={inView} style={{ transitionDelay: inView ? `${delay}ms` : '0ms' }} timeout={500}>
        {children}
      </Grow>
    </Box>
  );
};

const SubjectPage = () => {
  const { examType = 'ege', subject = '' } = useParams();
  const subjectName = subjectMapping[subject] || 'Предмет';
  const targetExamType = examTypeMapping[examType]; // Map URL param to data value

  // 1. Filter teachers by subject
  const subjectTeachers = teachers.filter(t => t.subject.split(' и ').includes(subjectName));

  // 2. Select the best teacher based on the mapped exam type
  let teacher = subjectTeachers.find(t => t.courseInfo.examType === targetExamType);
  
  let description = teacher?.courseInfo.examDescription;

  if (!teacher) {
    teacher = subjectTeachers[0]; // Fallback
    
    // Generate a description
    const examTypeMap: { [key: string]: string } = {
        'ЕГЭ': 'Единому Государственному Экзамену',
        'ОГЭ': 'Основному Государственному Экзамену',
        'Онлайн курс': 'онлайн-курсу',
        '5-8 класс': 'программе для 5-8 классов'
    };
    const subjectDativeMap: { [key: string]: string } = {
      'Математика': 'математике',
      'Русский язык': 'русскому языку',
      'Физика': 'физике',
      'Информатика': 'информатике',
      'Английский язык': 'английскому языку',
      'Биология': 'биологии',
      'Химия': 'химии',
      'История': 'истории',
      'Обществознание': 'обществознанию',
      'Литература': 'литературе',
    };
    const prep = ['Онлайн курс', '5-8 класс'].includes(targetExamType) ? 'по' : 'к';
    if (examTypeMap[targetExamType] && subjectDativeMap[subjectName]) {
      description = `Подготовка ${prep} ${examTypeMap[targetExamType]} по ${subjectDativeMap[subjectName]}`;
    } else {
      description = `Подготовка по предмету ${subjectName}`;
    }
  }

  const teacherImage = teacher ? teacherImages[teacher.name] : '';

  // Show a message if no teacher is found
  if (!teacher) {
    return (
      <Container sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h4" sx={{ mt: 4, fontWeight: 700 }}>
          Информация не найдена
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mt: 2, mb: 4 }}>
          К сожалению, мы не смогли найти информацию по вашему запросу.
          Пожалуйста, вернитесь на главную страницу и выберите другой предмет.
        </Typography>
        <Button component={Link} to="/" variant="contained" size="large" sx={styles.button}>
          На главную
        </Button>
      </Container>
    );
  }

  return (
    <Box>
      <Box sx={styles.hero}>
        <Container maxWidth="lg" sx={styles.heroContent}>
          <AnimatedBlock>
            <Box>
              <Typography variant="h3" component="h1" sx={{ mt: 2, mb: 1, fontWeight: 700, color: '#f2aa8d' }}>
                {subjectName}
              </Typography>
              <Typography variant="h6" component="p" sx={{ opacity: 0.9, fontWeight: 400, fontSize: '1.1rem' }}>
                {description}
              </Typography>
            </Box>
          </AnimatedBlock>
        </Container>
      </Box>

      {/* Teacher Section */}
      <Box sx={styles.teacherSection}>
        <Container maxWidth="lg">
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 4, md: 8 },
            alignItems: 'flex-start'
          }}>
            {/* LEFT COLUMN */}
            <Box sx={{ flex: '1 1 55%', order: { xs: 2, md: 1 } }}>
              <AnimatedBlock>
                <Box sx={styles.teacherCard}>
                  <Typography variant="h3" gutterBottom sx={{ fontWeight: 700, color: '#1e7dbd' }}>
                    О курсе и преподавателе
                  </Typography>
                  
                  <Box sx={{ my: 4 }}>
                    <Typography variant="h5" sx={{ fontWeight: 600, mb: 1, color: '#1e7dbd' }}>{teacher.name}</Typography>
                    <Typography variant="body1" color="text.secondary" paragraph sx={{ fontSize: '1.1rem' }}>
                      {teacher.experience} опыта • {teacher.description}
                    </Typography>
                  </Box>

                  <Box sx={{ my: 4, p: 3, background: '#f8fafc', borderRadius: '16px' }}>
                    <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: '#1e7dbd' }}>
                      О программе курса
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph>
                      {teacher.courseInfo.programDescription}
                    </Typography>
                  </Box>

                  <Button variant="contained" sx={styles.button}>
                    Записаться на курс
                  </Button>

                  <Box sx={{ mt: 5 }}>
                    <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, color: '#1e7dbd' }}>
                      Что вы получите
                    </Typography>
                    <Box sx={{ 
                      display: 'grid',
                      gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
                      gap: 2,
                      mt: 3
                    }}>
                      <Box sx={styles.statsCard}>
                        <AccessTimeIcon sx={{ color: '#f2aa8d', fontSize: 40, mb: 1 }} />
                        <Typography variant="h6" gutterBottom sx={{ color: '#f2aa8d' }}>
                          90 минут
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Длительность урока
                        </Typography>
                      </Box>
                      <Box sx={styles.statsCard}>
                        <PersonIcon sx={{ color: '#f2aa8d', fontSize: 40, mb: 1 }} />
                        <Typography variant="h6" gutterBottom sx={{ color: '#f2aa8d' }}>
                          1-на-1
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Индивидуально
                        </Typography>
                      </Box>
                      <Box sx={styles.statsCard}>
                        <AutoStoriesIcon sx={{ color: '#f2aa8d', fontSize: 40, mb: 1 }} />
                        <Typography variant="h6" gutterBottom sx={{ color: '#f2aa8d' }}>
                          Материалы
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Авторские методички
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </AnimatedBlock>
            </Box>

            {/* RIGHT COLUMN */}
            <Box sx={{ flex: '1 1 45%', order: { xs: 1, md: 2 }, display: 'flex', flexDirection: 'column', gap: 4 }}>
              <AnimatedBlock delay={200}>
                <Box
                  component="img"
                  src={teacherImage}
                  alt={teacher.name}
                  sx={styles.teacherImage}
                />
              </AnimatedBlock>
              {teacher.review && (
                <AnimatedBlock delay={400}>
                  <Paper sx={styles.reviewCard}>
                    <FormatQuoteIcon sx={{ position: 'absolute', top: 16, right: 16, color: 'rgba(0,0,0,0.08)', fontSize: '3rem', transform: 'scaleX(-1)' }} />
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: '#1e7dbd' }}>Отзыв ученика</Typography>
                    <Typography variant="body1" sx={{ fontStyle: 'italic', my: 2, position: 'relative', zIndex: 1 }}>
                      "{teacher.review.text}"
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                        - {teacher.review.author}
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 0.5 }}>
                        {[1, 2, 3, 4, 5].map((star) => (
                          <StarIcon key={star} sx={{ color: '#f2aa8d', fontSize: '1.2rem' }} />
                        ))}
                      </Box>
                    </Box>
                  </Paper>
                </AnimatedBlock>
              )}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Price Section */}
      <Box sx={styles.priceSection}>
        <Container maxWidth="lg">
          <AnimatedBlock>
            <Typography variant="h2" align="center" gutterBottom sx={{ mb: 6, fontWeight: 700, color: '#1e7dbd' }}>
              Стоимость обучения
            </Typography>
          </AnimatedBlock>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
              gap: 4,
            }}
          >
            {teacher.pricing.map((option, index) => (
              <AnimatedBlock key={option.title} delay={index * 150}>
                <Paper
                  sx={{...styles.priceCard, borderColor: index === 1 ? '#1e7dbd' : '#e2e8f0'}}
                >
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: '#f2aa8d' }}>
                    {option.title}
                  </Typography>
                  <Typography variant="h3" sx={{ my: 2, fontWeight: 'bold', color: '#1e7dbd' }}>
                    {option.price}
                  </Typography>
                  <Typography variant="body1" color='text.secondary' sx={{ mb: 3, flexGrow: 1 }}>
                    {option.description}
                  </Typography>
                  <Box sx={{ width: '100%'}}>
                    {option.features.map((feature) => (
                      <Box key={feature} sx={{ display: 'flex', alignItems: 'center', mb: 1, justifyContent: 'center' }}>
                        <CheckCircleIcon sx={{ mr: 1, color: '#1e7dbd' }} />
                        <Typography variant="body2" color='text.secondary'>
                          {feature}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                  <Button
                    variant="contained"
                    sx={{ ...styles.button, width: '100%', mt: 4 }}
                    size="large"
                  >
                    {option.buttonText}
                  </Button>
                </Paper>
              </AnimatedBlock>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default SubjectPage; 