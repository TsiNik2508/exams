import { Box, Container, Typography, Button, Paper, Grow } from '@mui/material';
import { useParams, Link } from 'react-router-dom';
import { teachers } from '../../data/teachers';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonIcon from '@mui/icons-material/Person';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect, useRef, useCallback } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import GroupsIcon from '@mui/icons-material/Groups';
import PopupForm from '../common/PopupForm';

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

// Import review videos
import mathVideo from '../../assets/reviews/math.mp4';
import socialVideo from '../../assets/reviews/social.mp4';
import englishVideo from '../../assets/reviews/english.mp4';
import physicsVideo from '../../assets/reviews/phisics.mp4';
import historyVideo from '../../assets/reviews/history.mp4';
import informVideo from '../../assets/reviews/inform.mp4';
import biologyVideo from '../../assets/reviews/biology.mp4';
import rusVideo from '../../assets/reviews/rus.mp4';
import ogeMathVideo from '../../assets/reviews/oge-math.mp4';

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

// Map subjects to review videos
const reviewVideos: { [key: string]: string } = {
  'Математика': mathVideo,
  'Обществознание': socialVideo,
  'Английский язык': englishVideo,
  'Физика': physicsVideo,
  'История': historyVideo,
  'Информатика': informVideo,
  'Биология': biologyVideo,
  'Химия': biologyVideo, // Используем видео по биологии для химии
  'Русский язык': rusVideo,
  'Литература': rusVideo, // Используем видео по математике для литературы
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

// Функция для получения цен в зависимости от типа экзамена
const getPricingByExamType = (examType: string) => {
  switch (examType) {
    case 'ЕГЭ':
      return [
        { title: 'Группы до 8 человек', price: '4 200 ₽/мес', description: 'Эффективная групповая подготовка', features: ['8 занятий в месяц', 'Проверка ДЗ', 'Пробные ЕГЭ', 'Групповое взаимодействие'], buttonText: 'Выбрать' },
        { title: 'Пробный урок', price: '0 ₽', description: 'Знакомство и определение уровня', features: ['Длительность 45 минут', 'Рекомендации по подготовке'], buttonText: 'Записаться' },
        { title: 'Курс 1 + X', price: 'от 10 260 ₽/мес', description: 'Полное погружение', features: ['От 16 занятий в месяц', 'Проверка ДЗ', 'Пробники', 'Личные чаты с преподавателями и учениками'], buttonText: 'Выбрать' },
      ];
    case 'ОГЭ':
      return [
        { title: 'Пробный урок', price: '0 ₽', description: 'Знакомство и определение уровня', features: ['Длительность 45 минут', 'Рекомендации по подготовке'], buttonText: 'Записаться' },
        { title: 'Курс ОГЭ', price: '4 700 ₽/мес', description: 'Полный курс подготовки к ОГЭ', features: ['8 занятий в месяц', 'Проверка ДЗ', 'Групповое взаимодействие'], buttonText: 'Выбрать' },
        { title: 'Курс 1 + X', price: '9 200 ₽/мес', description: 'Полное погружение', features: ['От 16 занятий в месяц', 'Проверка ДЗ', 'Пробники', 'Личные чаты с преподавателями и учениками'], buttonText: 'Выбрать' },
      ];
    case '5-8 класс':
      return [
        { title: 'Пробный урок', price: '0 ₽', description: 'Знакомство и определение уровня', features: ['Длительность 45 минут', 'Рекомендации по подготовке'], buttonText: 'Записаться' },
        { title: 'Базовый курс', price: '3 900 ₽/мес', description: 'Основная программа для 5-8 классов', features: ['8 занятий в месяц', 'Проверка ДЗ', 'Групповое взаимодействие'], buttonText: 'Выбрать' },
        { title: 'Курс 1 + X', price: '7 600 ₽/мес', description: 'Полное погружение', features: ['От 16 занятий в месяц', 'Проверка ДЗ', 'Пробники', 'Личные чаты с преподавателями и учениками'], buttonText: 'Выбрать' },
      ];
    case 'Онлайн курс':
      return [
        { title: 'Группы до 8 человек', price: '4 200 ₽/мес', description: 'Эффективная групповая подготовка', features: ['8 занятий в месяц', 'Проверка ДЗ', 'Онлайн материалы', 'Групповое взаимодействие'], buttonText: 'Выбрать' },
        { title: 'Пробный урок', price: '0 ₽', description: 'Знакомство и определение уровня', features: ['Длительность 45 минут', 'Рекомендации по подготовке'], buttonText: 'Записаться' },
        { title: 'Курс 1 + X', price: 'от 10 260 ₽/мес', description: 'Полное погружение', features: ['От 16 занятий в месяц', 'Проверка ДЗ', 'Пробники', 'Личные чаты с преподавателями и учениками'], buttonText: 'Выбрать' },
      ];
    default:
      return [
        { title: 'Группы до 8 человек', price: '4 200 ₽/мес', description: 'Эффективная групповая подготовка', features: ['8 занятий в месяц', 'Проверка ДЗ', 'Групповое взаимодействие'], buttonText: 'Выбрать' },
        { title: 'Пробный урок', price: '0 ₽', description: 'Знакомство и определение уровня', features: ['Длительность 45 минут', 'Рекомендации по подготовке'], buttonText: 'Записаться' },
        { title: 'Курс 1 + X', price: 'от 10 260 ₽/мес', description: 'Полное погружение', features: ['От 16 занятий в месяц', 'Проверка ДЗ', 'Пробники', 'Личные чаты с преподавателями и учениками'], buttonText: 'Выбрать' },
      ];
  }
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
  },
  priceSection: {
    py: { xs: 6, md: 8 },
  },
  teacherCard: {
    background: 'transparent',
    boxShadow: 'none',
    p: 0,
  },
  teacherImage: {
    width: '100%',
    height: { xs: 'auto', md: 350, lg: 450, xl: 550 },
    objectFit: 'cover' as const,
    borderRadius: '24px',
    boxShadow: '0 8px 25px 0 rgba(30,125,189,0.15), 0 4px 12px 0 rgba(0,0,0,0.1)',
    position: 'relative',
  },
  videoCircle: {
    position: 'absolute',
    bottom: 40,
    left: 20,
    width: 120,
    height: 120,
    borderRadius: '50%',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'all 1.5s cubic-bezier(0.25, 0.8, 0.25, 1)',
    boxShadow: '0 8px 25px 0 rgba(30,125,189,0.15), 0 4px 12px 0 rgba(0,0,0,0.1)',
    zIndex: 2,
    border: '3px solid #fff',
    '&:hover': {
      transform: 'scale(1.8)',
      boxShadow: '0 12px 35px 0 rgba(30,125,189,0.25), 0 6px 20px 0 rgba(0,0,0,0.15)',
      cursor: 'none',
      '&::after': {
        content: '""',
        position: 'fixed',
        top: 'var(--mouse-y, 50%)',
        left: 'var(--mouse-x, 50%)',
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        background: 'rgba(128, 128, 128, 0.6)',
        pointerEvents: 'none',
        zIndex: 9999,
        transform: 'translate(-50%, -50%)',
      },
    },
    '& video': {
      transition: 'all 0.3s ease',
    },
  },
  videoLabel: {
    position: 'absolute',
    bottom: -45,
    left: 20,
    background: 'rgba(30,125,189,0.9)',
    color: '#fff',
    fontSize: '0.9rem',
    fontWeight: 600,
    padding: '6px 12px',
    borderRadius: '16px',
    whiteSpace: 'nowrap',
    zIndex: 2,
    display: 'flex',
    alignItems: 'center',
    gap: 1,
    transition: 'all 0.3s ease',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: -10,
      left: 20,
      width: 0,
      height: 0,
      borderLeft: '10px solid transparent',
      borderRight: '10px solid transparent',
      borderBottom: '10px solid rgba(30,125,189,0.9)',
    },
  },
  videoPreview: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  '@keyframes pulse': {
    '0%': {
      transform: 'scale(1)',
    },
    '50%': {
      transform: 'scale(1.05)',
    },
    '100%': {
      transform: 'scale(1)',
    },
  },
  reviewCard: {
    background: '#ffffff',
    borderRadius: '20px',
    p: { xs: 3, md: 4 },
    boxShadow: '0 8px 25px 0 rgba(30,125,189,0.15), 0 4px 12px 0 rgba(0,0,0,0.1)',
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
    background: '#ffffff',
    boxShadow: '0 8px 25px 0 rgba(30,125,189,0.15), 0 4px 12px 0 rgba(0,0,0,0.1)',
    border: '1px solid #e2e8f0',
    transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
    position: 'relative',
    overflow: 'hidden',
    '&:hover': {
      transform: 'translateY(-5px) scale(1.02)',
      boxShadow: '0 12px 35px 0 rgba(30,125,189,0.25), 0 6px 20px 0 rgba(0,0,0,0.15)',
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
    boxShadow: '0 8px 25px 0 rgba(30,125,189,0.15), 0 4px 12px 0 rgba(0,0,0,0.1)',
    transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
    '&:hover': {
      background: '#f2aa8d',
      transform: 'translateY(-3px)',
      boxShadow: '0 12px 35px 0 rgba(242,170,141,0.25), 0 6px 20px 0 rgba(0,0,0,0.15)',
    },
  },
  statsCard: {
    background: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: '16px',
    p: 2.5,
    textAlign: 'center',
    height: '100%',
    minHeight: 140,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 12px 35px 0 rgba(30,125,189,0.25), 0 6px 20px 0 rgba(0,0,0,0.15)',
      borderColor: '#1e7dbd'
    }
  },
  statsCardNoShadow: {
    background: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: '16px',
    p: 2.5,
    textAlign: 'center',
    height: '100%',
    minHeight: 140,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
    boxShadow: '0 8px 25px 0 rgba(30,125,189,0.15), 0 4px 12px 0 rgba(0,0,0,0.1)',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 12px 35px 0 rgba(30,125,189,0.25), 0 6px 20px 0 rgba(0,0,0,0.15)',
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
  const targetExamType = examTypeMapping[examType];
  const [isHovering, setIsHovering] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showMobileVideo, setShowMobileVideo] = useState(false);
  const videoMobileRef = useRef<HTMLVideoElement>(null);
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupCourse, setPopupCourse] = useState<string>('');

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
  
  // Определяем видео отзыв с учетом типа экзамена
  let reviewVideo = reviewVideos[subjectName];
  if (subjectName === 'Математика' && targetExamType === 'ОГЭ') {
    reviewVideo = ogeMathVideo;
  }

  // Управляем воспроизведением видео при изменении состояния наведения
  useEffect(() => {
    if (videoRef.current && reviewVideo) {
      if (isHovering) {
        videoRef.current.muted = false; // Включаем звук
        videoRef.current.play().catch(() => {
          // Игнорируем ошибки автовоспроизведения
        });
      } else {
        videoRef.current.muted = true; // Выключаем звук
        videoRef.current.pause();
        // Убираем сброс к началу - видео останется на том же месте
      }
    }
  }, [isHovering, reviewVideo]);

  const handleMouseEnter = useCallback(() => {
    setIsHovering(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (isHovering) {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    }
  }, [isHovering]);

  const handleMobileCircleClick = () => {
    if (showMobileVideo) {
      setShowMobileVideo(false);
      if (videoMobileRef.current) {
        videoMobileRef.current.pause();
      }
    } else {
      setShowMobileVideo(true);
      setTimeout(() => {
        if (videoMobileRef.current) {
          videoMobileRef.current.play();
        }
      }, 0);
    }
  };

  const handleMobileVideoEnded = () => {
    setShowMobileVideo(false);
  };

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
                  <Typography
                    variant="h4"
                    gutterBottom
                    sx={{
                      fontWeight: 700,
                      color: '#1e7dbd',
                      mt: { xs: 7, md: 0 }
                    }}
                  >
                    О курсе и преподавателе
                  </Typography>
                  
                  <Box sx={{ my: 4 }}>
                    <Typography variant="h5" sx={{ fontWeight: 600, mb: 1, color: '#1e7dbd' }}>{teacher.name}</Typography>
                    <Typography variant="body1" color="text.secondary" paragraph sx={{ fontSize: '1.1rem' }}>
                      {teacher.experience} опыта • {teacher.description}
                    </Typography>
                  </Box>

                  <Box sx={{ my: 4, p: 3, background: '#ffffff', borderRadius: '16px', boxShadow: '0 8px 25px 0 rgba(30,125,189,0.15), 0 4px 12px 0 rgba(0,0,0,0.1)' }}>
                    <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: '#1e7dbd' }}>
                      О программе курса
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph>
                      {(() => {
                        const subjectCases: { [key: string]: string } = {
                          'Математика': 'по математике',
                          'Русский язык': 'по русскому языку',
                          'Физика': 'по физике',
                          'Информатика': 'по информатике',
                          'Английский язык': 'по английскому языку',
                          'Биология': 'по биологии',
                          'Химия': 'по химии',
                          'История': 'по истории',
                          'Обществознание': 'по обществознанию',
                          'Литература': 'по литературе',
                        };
                        const subj = subjectCases[subjectName] || ('по предмету ' + subjectName.toLowerCase());
                        if (targetExamType === 'ОГЭ') {
                          return `Систематизация знаний ${subj}, отработка формата ОГЭ, решение типовых заданий, подготовка к успешной сдаче экзамена.`;
                        }
                        if (targetExamType === '5-8 класс') {
                          return `Углубленное изучение школьной программы ${subj}, устранение пробелов, развитие самостоятельности, подготовка к ВПР и олимпиадам.`;
                        }
                        if (targetExamType === 'Онлайн курс') {
                          return `Интенсивная программа ${subj} для закрепления знаний и подготовки к новому учебному году. Мини-группы, практика, поддержка преподавателя.`;
                        }
                        return teacher.courseInfo.programDescription;
                      })()}
                    </Typography>
                  </Box>

                  <Box sx={{ mt: 5 }}>
                    <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, color: '#1e7dbd' }}>
                      Что вы получите
                    </Typography>
                    <Box sx={{ 
                      display: 'grid',
                      gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
                      gap: 2,
                      mt: 3
                    }}>
                      <Box sx={{
                        background: '#ffffff',
                        border: '1px solid #e2e8f0',
                        borderRadius: '16px',
                        p: 2.5,
                        textAlign: 'center',
                        height: '100%',
                        minHeight: 140,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                        boxShadow: '0 8px 25px 0 rgba(30,125,189,0.15), 0 4px 12px 0 rgba(0,0,0,0.1)',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          boxShadow: '0 12px 35px 0 rgba(30,125,189,0.25), 0 6px 20px 0 rgba(0,0,0,0.15)',
                          borderColor: '#1e7dbd'
                        }
                      }}>
                        <GroupsIcon sx={{ color: '#f2aa8d', fontSize: 32, mb: 1 }} />
                        <Typography variant="h6" gutterBottom sx={{ color: '#f2aa8d', fontSize: '1rem', fontWeight: 600 }}>
                          Группы до 8 человек
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.85rem' }}>
                          Эффективное обучение
                        </Typography>
                      </Box>
                      <Box sx={{
                        background: '#ffffff',
                        border: '1px solid #e2e8f0',
                        borderRadius: '16px',
                        p: 2.5,
                        textAlign: 'center',
                        height: '100%',
                        minHeight: 140,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                        boxShadow: '0 8px 25px 0 rgba(30,125,189,0.15), 0 4px 12px 0 rgba(0,0,0,0.1)',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          boxShadow: '0 12px 35px 0 rgba(30,125,189,0.25), 0 6px 20px 0 rgba(0,0,0,0.15)',
                          borderColor: '#1e7dbd'
                        }
                      }}>
                        <AccessTimeIcon sx={{ color: '#f2aa8d', fontSize: 32, mb: 1 }} />
                        <Typography variant="h6" gutterBottom sx={{ color: '#f2aa8d', fontSize: '1rem', fontWeight: 600 }}>
                          90 минут
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.85rem' }}>
                          Длительность урока
                        </Typography>
                      </Box>
                      <Box sx={{
                        background: '#ffffff',
                        border: '1px solid #e2e8f0',
                        borderRadius: '16px',
                        p: 2.5,
                        textAlign: 'center',
                        height: '100%',
                        minHeight: 140,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                        boxShadow: '0 8px 25px 0 rgba(30,125,189,0.15), 0 4px 12px 0 rgba(0,0,0,0.1)',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          boxShadow: '0 12px 35px 0 rgba(30,125,189,0.25), 0 6px 20px 0 rgba(0,0,0,0.15)',
                          borderColor: '#1e7dbd'
                        }
                      }}>
                        <AutoStoriesIcon sx={{ color: '#f2aa8d', fontSize: 32, mb: 1 }} />
                        <Typography variant="h6" gutterBottom sx={{ color: '#f2aa8d', fontSize: '1rem', fontWeight: 600 }}>
                          Материалы
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.85rem' }}>
                          Авторские методички
                        </Typography>
                      </Box>
                      <Box sx={{
                        background: '#ffffff',
                        border: '1px solid #e2e8f0',
                        borderRadius: '16px',
                        p: 2.5,
                        textAlign: 'center',
                        height: '100%',
                        minHeight: 140,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                        boxShadow: '0 8px 25px 0 rgba(30,125,189,0.15), 0 4px 12px 0 rgba(0,0,0,0.1)',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          boxShadow: '0 12px 35px 0 rgba(30,125,189,0.25), 0 6px 20px 0 rgba(0,0,0,0.15)',
                          borderColor: '#1e7dbd'
                        }
                      }}>
                        <PersonIcon sx={{ color: '#f2aa8d', fontSize: 32, mb: 1 }} />
                        <Typography variant="h6" gutterBottom sx={{ color: '#f2aa8d', fontSize: '1rem', fontWeight: 600 }}>
                          1-на-1
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.85rem' }}>
                          Индивидуально
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
                <Box sx={{ position: 'relative' }}>
                <Box
                  component="img"
                  src={teacherImage}
                  alt={teacher.name}
                  sx={styles.teacherImage}
                />
                  {reviewVideo && (
                    <>
                      {/* Мобильная версия видео-кружка (только на экранах < 600px) */}
                      <Box
                        sx={{
                          position: 'absolute',
                          bottom: 10,
                          left: 0,
                          width: 120,
                          height: 120,
                          borderRadius: '50%',
                          overflow: 'hidden',
                          zIndex: 2,
                          border: '3px solid #fff',
                          background: '#000',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer',
                          '@media (min-width: 600px)': {
                            display: 'none', // Скрываем на десктопе
                          },
                        }}
                        onClick={handleMobileCircleClick}
                      >
                        <video
                          key={subjectName}
                          ref={videoMobileRef}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            display: 'block',
                            filter: !showMobileVideo ? 'brightness(0.5)' : 'none',
                            pointerEvents: 'none',
                          }}
                          controls={showMobileVideo}
                          autoPlay={showMobileVideo}
                          muted={!showMobileVideo}
                          playsInline
                          preload="metadata"
                          controlsList="nodownload nofullscreen noremoteplayback noplaybackrate"
                          disablePictureInPicture
                          disableRemotePlayback
                          onEnded={handleMobileVideoEnded}
                        >
                          <source src={reviewVideo} type="video/mp4" />
                        </video>
                        {!showMobileVideo && (
                          <PlayArrowIcon sx={{
                            color: '#fff',
                            fontSize: 56,
                            position: 'absolute',
                            left: '50%',
                            top: '50%',
                            transform: 'translate(-50%, -50%)',
                            zIndex: 3
                          }} />
                        )}
                      </Box>
                      <Box
                        sx={{
                          position: 'absolute',
                          left: 0,
                          bottom: -50,
                          background: 'rgba(30,125,189,0.9)',
                          color: '#fff',
                          fontSize: '0.85rem',
                          fontWeight: 600,
                          padding: '4px 10px',
                          borderRadius: '14px',
                          whiteSpace: 'nowrap',
                          zIndex: 2,
                          display: 'inline-flex',
                          alignItems: 'center',
                          boxShadow: '0 8px 25px 0 rgba(30,125,189,0.15), 0 4px 12px 0 rgba(0,0,0,0.1)',
                          '@media (min-width: 600px)': {
                            display: 'none', // Скрываем на десктопе
                          },
                        }}
                      >
                        Видео отзыв
                      </Box>
                      
                      {/* Десктопная версия видео-кружка (только на экранах >= 600px) */}
                      <Box
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onMouseMove={handleMouseMove}
                        sx={{
                          ...styles.videoCircle,
                          '@media (max-width: 599px)': {
                            display: 'none', // Скрываем на мобильных
                          },
                        }}
                      >
                        <video
                          key={subjectName}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          muted
                          loop
                          ref={videoRef}
                          controlsList="nodownload nofullscreen noremoteplayback noplaybackrate"
                          disablePictureInPicture
                          disableRemotePlayback
                        >
                          <source src={reviewVideo} type="video/mp4" />
                        </video>
                      </Box>
                      
                      {/* Подпись "Видео отзыв" для десктопа (только на экранах >= 600px) */}
                      <Typography sx={{
                        ...styles.videoLabel,
                        '@media (max-width: 599px)': {
                          display: 'none', // Скрываем на мобильных
                        },
                      }}>
                        Видео отзыв
                      </Typography>
                    </>
                  )}
                    </Box>
                </AnimatedBlock>
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
            {getPricingByExamType(targetExamType).map((option, index) => (
              <AnimatedBlock key={option.title} delay={index * 150}>
                <Paper
                  sx={{...styles.priceCard, borderColor: index === 1 ? '#1e7dbd' : '#e2e8f0'}}
                >
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: '#f2aa8d' }}>
                    {option.title}
                  </Typography>
                  <Typography variant="h4" sx={{ my: 2, fontWeight: 'bold', color: '#1e7dbd' }}>
                    {option.price}
                  </Typography>
                  <Typography variant="body1" color='text.secondary' sx={{ mb: 3, flexGrow: 1 }}>
                    {option.description}
                  </Typography>
                  <Box sx={{ width: '100%'}}>
                    {option.features.map((feature) => (
                      <Box key={feature} sx={{ display: 'flex', alignItems: 'flex-start', mb: 1, justifyContent: 'flex-start' }}>
                        <Box sx={{ minWidth: 28, display: 'flex', justifyContent: 'center', alignItems: 'center', pt: '2px' }}>
                          <CheckCircleIcon sx={{ color: '#1e7dbd', fontSize: 22 }} />
                        </Box>
                        <Typography variant="body2" color='text.secondary' sx={{ textAlign: 'left', pl: 1 }}>
                          {feature}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                  <Button
                    variant="contained"
                    sx={{ ...styles.button, width: '100%', mt: 4 }}
                    size="large"
                    onClick={() => {
                      setPopupCourse(option.title);
                      setPopupOpen(true);
                    }}
                  >
                    {option.buttonText}
                  </Button>
                </Paper>
              </AnimatedBlock>
            ))}
          </Box>
        </Container>
      </Box>
      <PopupForm
        open={popupOpen}
        onClose={() => setPopupOpen(false)}
        section={targetExamType || 'Курс'}
        subject={subjectName}
        course={popupCourse}
        formKey={`subject-${subjectName}`}
      />
    </Box>
  );
};

export default SubjectPage; 