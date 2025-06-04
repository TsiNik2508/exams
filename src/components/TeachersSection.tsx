import { Box, Container, Typography, Avatar, Chip, IconButton, Modal, Button } from '@mui/material';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';
import PsychologyIcon from '@mui/icons-material/Psychology';
import ScienceIcon from '@mui/icons-material/Science';
import LanguageIcon from '@mui/icons-material/Language';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import StarIcon from '@mui/icons-material/Star';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import BackgroundPattern from './BackgroundPattern';
import { useState } from 'react';

const teachers = [
  {
    id: 1,
    name: 'Анна Петрова',
    subject: 'Математика',
    experience: '10 лет',
    photo: 'https://randomuser.me/api/portraits/women/32.jpg',
    icon: <SchoolIcon />,
    badge: 'ТОП',
    badgeIcon: <EmojiEventsIcon sx={{ color: '#f2aa8d' }} />,
    badgeColor: '#f2aa8d',
    about: 'Люблю объяснять сложное простым языком. Мои ученики стабильно сдают ЕГЭ на 90+ баллов.',
    quote: 'Математика — это не страшно, а интересно!',
    socials: [
      { icon: <InstagramIcon />, url: '#' },
      { icon: <TelegramIcon />, url: '#' },
    ],
    achievements: ['Победитель конкурса "Учитель года"', 'Автор методики "Математика для всех"'],
  },
  {
    id: 2,
    name: 'Иван Смирнов',
    subject: 'Физика',
    experience: '8 лет',
    photo: 'https://randomuser.me/api/portraits/men/44.jpg',
    icon: <ScienceIcon />,
    badge: 'Эксперт ЕГЭ',
    badgeIcon: <WorkspacePremiumIcon sx={{ color: '#1e7dbd' }} />,
    badgeColor: '#1e7dbd',
    about: 'Готовлю к экзаменам по физике, люблю эксперименты и наглядные опыты.',
    quote: 'Физика — это наука о жизни!',
    socials: [
      { icon: <InstagramIcon />, url: '#' },
    ],
    achievements: ['Эксперт ФИПИ', 'Победитель олимпиады "Физтех"'],
  },
  {
    id: 3,
    name: 'Мария Иванова',
    subject: 'Русский язык',
    experience: '12 лет',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    icon: <LanguageIcon />,
    badge: 'Любимец учеников',
    badgeIcon: <StarIcon sx={{ color: '#f2aa8d' }} />,
    badgeColor: '#f2aa8d',
    about: 'Помогаю полюбить русский язык и писать без ошибок. Индивидуальный подход к каждому.',
    quote: 'Грамотность — ключ к успеху!',
    socials: [
      { icon: <TelegramIcon />, url: '#' },
    ],
    achievements: ['Автор курсов "Русский легко"', 'Победитель конкурса "Лучший педагог"'],
  },
  {
    id: 4,
    name: 'Алексей Козлов',
    subject: 'Психология',
    experience: '6 лет',
    photo: 'https://randomuser.me/api/portraits/men/22.jpg',
    icon: <PsychologyIcon />,
    badge: 'Профи',
    badgeIcon: <StarIcon sx={{ color: '#1e7dbd' }} />,
    badgeColor: '#1e7dbd',
    about: 'Помогаю ученикам поверить в себя и раскрыть потенциал. Индивидуальные консультации.',
    quote: 'Верь в себя — и всё получится!',
    socials: [
      { icon: <InstagramIcon />, url: '#' },
    ],
    achievements: ['Член ассоциации школьных психологов', 'Автор тренинга "Уверенность+"'],
  },
];

const CARD_WIDTH = 310;
const CARD_HEIGHT = 330;

const TeachersSection = () => {
  const [selectedTeacher, setSelectedTeacher] = useState<typeof teachers[0] | null>(null);

  return (
    <Box sx={{ py: 8, bgcolor: '#f5f9ff', position: 'relative', overflow: 'hidden' }}>
      <BackgroundPattern color="#1e7dbd" size={400} top={-100} left={-100} />
      <BackgroundPattern color="#f2aa8d" size={300} bottom={-50} right={-50} />
      <Container sx={{ position: 'relative', zIndex: 1 }}>
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
            Наши преподаватели
          </Typography>
        </motion.div>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr' },
            gap: 6,
            justifyItems: 'center',
            alignItems: 'stretch',
            py: 2,
          }}
        >
          {teachers.map((teacher, index) => (
            <motion.div
              key={teacher.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              viewport={{ once: true }}
              style={{ width: CARD_WIDTH, maxWidth: '100%' }}
            >
              <Box
                sx={{
                  height: CARD_HEIGHT,
                  width: CARD_WIDTH,
                  mx: 'auto',
                  position: 'relative',
                  bgcolor: 'white',
                  borderRadius: 7,
                  boxShadow: '0 8px 32px 0 rgba(30,125,189,0.13)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  px: 3,
                  pt: 7,
                  pb: 3,
                  overflow: 'visible',
                  border: '1.5px solid #e3f2fd',
                  transition: 'box-shadow 0.3s, transform 0.3s',
                  '&:hover': {
                    boxShadow: '0 16px 40px 0 rgba(30,125,189,0.18)',
                    transform: 'translateY(-8px) scale(1.035)',
                  },
                }}
              >
                <Avatar
                  src={teacher.photo}
                  alt={teacher.name}
                  sx={{
                    width: 92,
                    height: 92,
                    position: 'absolute',
                    top: -46,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    border: '4px solid #fff',
                    boxShadow: '0 4px 16px 0 rgba(30,125,189,0.10)',
                    bgcolor: '#f5f9ff',
                    objectFit: 'cover',
                    borderRadius: '50%',
                  }}
                />
                <Box
                  sx={{
                    mt: 3,
                    width: '100%',
                    textAlign: 'center',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    flex: 1,
                    px: 0,
                    overflow: 'hidden',
                    wordBreak: 'break-word',
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#1e7dbd', mb: 0.5, fontSize: 18, textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'normal', wordBreak: 'break-word' }}>
                    {teacher.name}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, mb: 0.5, justifyContent: 'center', flexWrap: 'wrap' }}>
                    {teacher.badge && (
                      <Chip
                        icon={teacher.badgeIcon}
                        label={teacher.badge}
                        sx={{
                          bgcolor: teacher.badgeColor,
                          color: '#fff',
                          fontWeight: 700,
                          fontSize: '0.95rem',
                          px: 1.5,
                          py: 0.5,
                          borderRadius: 2,
                          boxShadow: '0 2px 8px 0 rgba(30,125,189,0.10)',
                          letterSpacing: 0.2,
                        }}
                      />
                    )}
                    <Chip
                      icon={teacher.icon}
                      label={teacher.subject}
                      sx={{
                        bgcolor: '#1e7dbd',
                        color: 'white',
                        fontWeight: 600,
                        fontSize: '0.95rem',
                        borderRadius: 2,
                        px: 1.5,
                        py: 0.5,
                        boxShadow: '0 1px 4px 0 rgba(30,125,189,0.10)',
                        letterSpacing: 0.2,
                      }}
                    />
                  </Box>
                  <Typography sx={{ color: '#64748b', fontSize: 14, mb: 0.5 }}>{teacher.experience} опыта</Typography>
                  <Typography sx={{ color: '#f2aa8d', fontSize: 14, fontStyle: 'italic', mb: 0.5, minHeight: 18, maxWidth: 220, mx: 'auto', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    “{teacher.quote}”
                  </Typography>
                  <Box sx={{ flex: 1 }} />
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => setSelectedTeacher(teacher)}
                    sx={{
                      mt: 1.5,
                      color: '#1e7dbd',
                      borderColor: '#1e7dbd',
                      fontWeight: 500,
                      borderRadius: '50px',
                      fontSize: 13,
                      py: 0.3,
                      px: 1.5,
                      maxWidth: '100%',
                      minWidth: 0,
                      minHeight: 32,
                      letterSpacing: 0.1,
                      transition: 'all 0.2s',
                      boxShadow: 'none',
                      textTransform: 'none',
                      alignSelf: 'center',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.5,
                      '&:hover': {
                        borderColor: '#f2aa8d',
                        color: '#fff',
                        bgcolor: '#f2aa8d',
                      },
                    }}
                  >
                    <InfoOutlinedIcon sx={{ fontSize: 18, mr: 0.5 }} /> Подробнее
                  </Button>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>

      {/* Модальное окно с подробной информацией */}
      <Modal
        open={!!selectedTeacher}
        onClose={() => setSelectedTeacher(null)}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 2,
        }}
      >
        <Box
          sx={{
            bgcolor: '#fff',
            borderRadius: 4,
            p: 4,
            maxWidth: 600,
            width: '100%',
            maxHeight: '90vh',
            overflow: 'auto',
            position: 'relative',
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
          }}
        >
          {selectedTeacher && (
            <>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Avatar
                  src={selectedTeacher.photo}
                  alt={selectedTeacher.name}
                  sx={{ width: 80, height: 80, mr: 2 }}
                />
                <Box>
                  <Typography variant="h5" sx={{ color: '#1e7dbd', fontWeight: 700 }}>
                    {selectedTeacher.name}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
                    <Chip
                      icon={selectedTeacher.icon}
                      label={selectedTeacher.subject}
                      sx={{ bgcolor: '#1e7dbd', color: 'white' }}
                    />
                    {selectedTeacher.badge && (
                      <Chip
                        icon={selectedTeacher.badgeIcon}
                        label={selectedTeacher.badge}
                        sx={{ bgcolor: selectedTeacher.badgeColor, color: 'white' }}
                      />
                    )}
                  </Box>
                </Box>
              </Box>
              
              <Typography variant="h6" sx={{ color: '#1e7dbd', mb: 2 }}>
                О себе
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                {selectedTeacher.about}
              </Typography>

              <Typography variant="h6" sx={{ color: '#1e7dbd', mb: 2 }}>
                Достижения
              </Typography>
              <Box component="ul" sx={{ pl: 2, mb: 3 }}>
                {selectedTeacher.achievements.map((ach, i) => (
                  <Typography component="li" key={i} sx={{ mb: 1 }}>
                    {ach}
                  </Typography>
                ))}
              </Box>

              <Typography variant="h6" sx={{ color: '#1e7dbd', mb: 2 }}>
                Цитата
              </Typography>
              <Typography variant="body1" sx={{ fontStyle: 'italic', color: '#f2aa8d', mb: 3 }}>
                "{selectedTeacher.quote}"
              </Typography>

              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 3 }}>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  {selectedTeacher.socials.map((s, i) => (
                    <IconButton key={i} href={s.url} sx={{ color: '#1e7dbd', '&:hover': { color: '#f2aa8d' } }}>
                      {s.icon}
                    </IconButton>
                  ))}
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <AccessTimeIcon sx={{ color: '#f2aa8d' }} />
                  <Typography>Стаж: {selectedTeacher.experience}</Typography>
                </Box>
              </Box>
            </>
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default TeachersSection; 