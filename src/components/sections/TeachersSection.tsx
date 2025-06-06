import { Box, Container, Typography, Card, CardContent, CardMedia, IconButton, Chip } from '@mui/material';
import Slider from 'react-slick';
import type { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SchoolIcon from '@mui/icons-material/School';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CalculateIcon from '@mui/icons-material/Calculate';
import CodeIcon from '@mui/icons-material/Code';
import ScienceIcon from '@mui/icons-material/Science';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PublicIcon from '@mui/icons-material/Public';
import TranslateIcon from '@mui/icons-material/Translate';
import HistoryIcon from '@mui/icons-material/History';
import PhysicsIcon from '@mui/icons-material/Science';
import { teachers } from '../../data/teachers';

interface ArrowProps {
  onClick?: () => void;
}

const NextArrow = ({ onClick }: ArrowProps) => {
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: 'absolute',
        right: -40,
        top: '50%',
        transform: 'translateY(-50%)',
        bgcolor: '#fff',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        '&:hover': {
          bgcolor: '#f8fafc',
          transform: 'translateY(-50%) scale(1.1)',
        },
        zIndex: 1,
        transition: 'all 0.3s ease',
      }}
    >
      <ArrowForwardIosIcon sx={{ color: '#1e7dbd' }} />
    </IconButton>
  );
};

const PrevArrow = ({ onClick }: ArrowProps) => {
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: 'absolute',
        left: -40,
        top: '50%',
        transform: 'translateY(-50%)',
        bgcolor: '#fff',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        '&:hover': {
          bgcolor: '#f8fafc',
          transform: 'translateY(-50%) scale(1.1)',
        },
        zIndex: 1,
        transition: 'all 0.3s ease',
      }}
    >
      <ArrowBackIosNewIcon sx={{ color: '#1e7dbd' }} />
    </IconButton>
  );
};

const getSubjectIcon = (subject: string) => {
  switch (subject.toLowerCase()) {
    case 'математика':
      return <CalculateIcon />;
    case 'информатика':
      return <CodeIcon />;
    case 'биология и химия':
      return <ScienceIcon />;
    case 'русский язык':
      return <MenuBookIcon />;
    case 'обществознание':
      return <PublicIcon />;
    case 'английский язык':
      return <TranslateIcon />;
    case 'история':
      return <HistoryIcon />;
    case 'физика':
      return <PhysicsIcon />;
    default:
      return <SchoolIcon />;
  }
};

const getSubjectColor = (index: number) => {
  const colors = ['#1e7dbd', '#f2aa8d'];
  return colors[index % 2];
};

const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        nextArrow: undefined,
        prevArrow: undefined,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        nextArrow: undefined,
        prevArrow: undefined,
      }
    }
  ]
};

const TeachersSection = () => {
  return (
    <Box sx={{ py: 8, position: 'relative', overflow: 'hidden' }}>
      {/* Паттерн из кругов */}
      <Box sx={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none' }}>
        <svg width="100%" height="100%" viewBox="0 0 1200 320" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', left: 0, top: 0 }}>
          <circle cx="180" cy="60" r="48" fill="#1e7dbd" fillOpacity="0.08">
            <animate attributeName="r" values="48;52;48" dur="4s" repeatCount="indefinite" />
            <animate attributeName="fillOpacity" values="0.08;0.12;0.08" dur="4s" repeatCount="indefinite" />
          </circle>
          <circle cx="1000" cy="100" r="60" fill="#f2aa8d" fillOpacity="0.09">
            <animate attributeName="r" values="60;64;60" dur="5s" repeatCount="indefinite" />
            <animate attributeName="fillOpacity" values="0.09;0.13;0.09" dur="5s" repeatCount="indefinite" />
          </circle>
          <circle cx="300" cy="260" r="36" fill="#f2aa8d" fillOpacity="0.08">
            <animate attributeName="r" values="36;40;36" dur="4.5s" repeatCount="indefinite" />
            <animate attributeName="fillOpacity" values="0.08;0.12;0.08" dur="4.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="900" cy="220" r="42" fill="#1e7dbd" fillOpacity="0.07">
            <animate attributeName="r" values="42;46;42" dur="5.5s" repeatCount="indefinite" />
            <animate attributeName="fillOpacity" values="0.07;0.11;0.07" dur="5.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="600" cy="80" r="30" fill="#1e7dbd" fillOpacity="0.06">
            <animate attributeName="r" values="30;34;30" dur="4s" repeatCount="indefinite" />
            <animate attributeName="fillOpacity" values="0.06;0.10;0.06" dur="4s" repeatCount="indefinite" />
          </circle>
          <circle cx="700" cy="280" r="54" fill="#f2aa8d" fillOpacity="0.07">
            <animate attributeName="r" values="54;58;54" dur="5s" repeatCount="indefinite" />
            <animate attributeName="fillOpacity" values="0.07;0.11;0.07" dur="5s" repeatCount="indefinite" />
          </circle>
        </svg>
      </Box>
      <Container maxWidth="lg">
        <Typography 
          variant="h2" 
          component="h2" 
          align="center" 
          gutterBottom
          sx={{ 
            fontWeight: 700,
            color: '#1e7dbd',
            mb: 2,
            position: 'relative',
            zIndex: 2
          }}
        >
          Наши преподаватели
        </Typography>
        <Typography 
          variant="h5" 
          align="center" 
          sx={{ 
            color: '#64748b',
            mb: 6,
            maxWidth: 800,
            mx: 'auto'
          }}
        >
          Профессионалы с многолетним опытом подготовки к экзаменам
        </Typography>

        <Box sx={{ mt: 6, position: 'relative' }}>
          <Slider {...settings}>
            {teachers.map((teacher, index) => {
              const subjectColor = getSubjectColor(index);
              return (
                <Box key={teacher.id} sx={{ px: 1 }}>
                  <Card 
                    sx={{ 
                      height: 480,
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: 4,
                      boxShadow: '0 4px 24px rgba(30,125,189,0.1)',
                      transition: 'all 0.3s ease',
                      background: `linear-gradient(145deg, #ffffff 0%, ${subjectColor}10 100%)`,
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: `0 12px 32px ${subjectColor}20`,
                        '& .MuiCardMedia-root': {
                          transform: 'scale(1.05)',
                        }
                      },
                    }}
                  >
                    <Box sx={{ 
                      position: 'relative', 
                      overflow: 'hidden', 
                      borderRadius: '16px 16px 0 0',
                      height: 280
                    }}>
                      <CardMedia
                        component="img"
                        height="280"
                        image={teacher.image}
                        alt={teacher.name}
                        sx={{
                          objectFit: 'cover',
                          transition: 'transform 0.5s ease',
                        }}
                      />
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: `linear-gradient(to bottom, transparent 0%, ${subjectColor}30 100%)`,
                          opacity: 0.7,
                        }}
                      />
                      <Chip
                        icon={getSubjectIcon(teacher.subject)}
                        label={teacher.subject}
                        sx={{
                          position: 'absolute',
                          top: 16,
                          right: 16,
                          bgcolor: 'rgba(255,255,255,0.95)',
                          color: subjectColor,
                          fontWeight: 600,
                          '& .MuiChip-icon': {
                            color: subjectColor,
                          },
                        }}
                      />
                    </Box>

                    <CardContent sx={{ 
                      flexGrow: 1, 
                      p: 3,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 1
                    }}>
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          fontWeight: 700, 
                          color: subjectColor,
                          fontSize: '1.25rem',
                          lineHeight: 1.4
                        }}
                      >
                        {teacher.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ 
                          color: '#64748b',
                          flexGrow: 1,
                          lineHeight: 1.6
                        }}
                      >
                        {teacher.description}
                      </Typography>
                      <Box sx={{ 
                        display: 'flex', 
                        alignItems: 'center',
                        mt: 'auto',
                        pt: 2,
                        borderTop: `1px solid ${subjectColor}15`
                      }}>
                        <SchoolIcon sx={{ color: subjectColor, mr: 1 }} />
                        <Typography variant="body2" sx={{ color: '#64748b', fontWeight: 500 }}>
                          Опыт: {teacher.experience}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Box>
              );
            })}
          </Slider>
        </Box>
      </Container>
    </Box>
  );
};

export default TeachersSection; 