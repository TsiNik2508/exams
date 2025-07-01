import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails, Divider } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SchoolIcon from '@mui/icons-material/School';
import AssignmentIcon from '@mui/icons-material/Assignment';
import GroupIcon from '@mui/icons-material/Group';
import PaymentIcon from '@mui/icons-material/Payment';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Grow, Slide } from '@mui/material';

const faqData = [
  {
    section: 'Общая информация',
    icon: <HelpOutlineIcon />,
    color: '#1e7dbd',
    items: [
      {
        q: 'Какие программы обучения вы предлагаете?',
        a: 'Подготовка к ОГЭ (9 класс)\nПодготовка к ЕГЭ (10–11 класс)\nЗанятия для 5–8 классов — помощь в учебе, углубление и закрепление знаний\nИндивидуальные занятия и мини-группы\nЛетние интенсивы и экспресс-курсы',
      },
      {
        q: 'Кто ваши преподаватели?',
        a: 'В центре работают опытные педагоги с профильным образованием, многие из них — действующие школьные учителя, эксперты ЕГЭ/ОГЭ. Мы регулярно повышаем квалификацию и следим за изменениями в экзаменационных требованиях.',
      },
      {
        q: 'Как организованы группы?',
        a: 'Занятия проходят в мини-группах до 8 человек, что позволяет уделять внимание каждому. Возможны индивидуальные уроки. Все ученики проходят бесплатное входное тестирование для подбора подходящей программы.',
      },
    ],
  },
  {
    section: 'ПОДГОТОВКА К ЕГЭ (10–11 КЛАСС)',
    icon: <SchoolIcon />,
    color: '#f2aa8d',
    items: [
      {
        q: 'Какие предметы доступны для подготовки к ЕГЭ?',
        a: 'Русский язык\nМатематика (профиль и база)\nОбществознание\nИстория\nАнглийский язык\nБиология\nХимия\nФизика\nИнформатика\nЛитература\nГеография',
      },
      {
        q: 'Как построено обучение?',
        a: 'Поэтапная проработка тем экзамена\nРегулярные пробные ЕГЭ\nРабота с типовыми заданиями и разборами сложных тем\nТренировка тайм-менеджмента на экзамене\nИндивидуальный подход — корректировка тем под слабые места',
      },
      {
        q: 'Когда лучше начинать подготовку?',
        a: 'Идеально — с начала 10 класса. Минимум — за 6–8 месяцев до экзамена, если есть хорошие базовые знания.',
      },
      {
        q: 'Можно ли присоединиться в середине года?',
        a: 'Да. Мы постоянно набираем новых учеников — подбираем курс в зависимости от уровня подготовки.',
      },
      {
        q: 'Какие результаты показывают ваши ученики?',
        a: '85% наших выпускников сдают ЕГЭ на 80+ баллов\nБолее 60% — поступают в топовые вузы Санкт-Петербурга и Москвы\nМы публикуем отзывы и статистику каждый год',
      },
    ],
  },
  {
    section: 'ПОДГОТОВКА К ОГЭ (9 КЛАСС)',
    icon: <AssignmentIcon />,
    color: '#1e7dbd',
    items: [
      {
        q: 'Какие предметы доступны?',
        a: 'Обязательные: русский язык, математика\nПо выбору: обществознание, история, физика, биология, английский и др.',
      },
      {
        q: 'Как проходит обучение?',
        a: 'Подробный разбор формата ОГЭ\nРабота с шаблонами написания сочинений и решений задач\nПостоянная практика\nМоделирование экзаменационных условий\nПоддержка и мотивация учеников, разбор типичных ошибок',
      },
      {
        q: 'Есть ли экспресс-курсы перед экзаменом?',
        a: 'Да, весной мы запускаем интенсивные программы — занятия 3–4 раза в неделю для тех, кому нужно быстро подтянуть уровень.',
      },
    ],
  },
  {
    section: 'ЗАНЯТИЯ ДЛЯ 5–8 КЛАССОВ',
    icon: <GroupIcon />,
    color: '#f2aa8d',
    items: [
      {
        q: 'Что входит в программу для 5–8 классов?',
        a: 'Подтягиваем по школьной программе (по всем основным предметам)\nУстранение пробелов\nПодготовка к ВПР и олимпиадам\nРабота с текстами, задачами, логикой\nФормируем уверенность, самостоятельность и учебную дисциплину',
      },
      {
        q: 'Какие предметы можно изучать?',
        a: 'Русский язык\nМатематика / Алгебра / Геометрия\nАнглийский язык\nФизика (с 7 класса)\nХимия (с 8 класса)\nБиология\nИстория и обществознание',
      },
      {
        q: 'Какой формат занятий?',
        a: '1–2 раза в неделю\n60–120 минут\nВозможен переход на подготовку к ОГЭ заранее (с 8 класса)',
      },
      {
        q: 'Какие цели можно достичь?',
        a: 'Повышение текущих оценок\nГлубокое понимание предмета\nПодготовка к экзаменам и контрольным\nПреодоление страха ошибок и стрессов в учебе',
      },
    ],
  },
  {
    section: 'ОРГАНИЗАЦИЯ И ОПЛАТА',
    icon: <PaymentIcon />,
    color: '#1e7dbd',
    items: [
      {
        q: 'Как записаться на занятия?',
        a: 'Через сайт: [форма заявки]\nПо телефону: [номер телефона]\nЧерез WhatsApp или Telegram\nПрийти лично в центр (по записи)',
      },
      {
        q: 'Есть ли бесплатное пробное занятие?',
        a: 'Да! Мы проводим бесплатное пробное занятие или консультацию, чтобы вы могли оценить подход и познакомиться с преподавателем.',
      },
      {
        q: 'Какие форматы обучения есть?',
        a: 'Очно (в учебных классах)\nОнлайн (через Zoom, Google meet или др.)\nИндивидуально и в мини-группах',
      },
      {
        q: 'Какие формы оплаты принимаете?',
        a: 'Наличные\nБанковская карта\nОнлайн-перевод\nАбонементы на месяц или разовая оплата',
      },
      {
        q: 'Есть ли система скидок?',
        a: 'Да!\nСкидки при оплате абонемента на пол года или год\nСкидки на второй предмет\nСкидки при обучении двух и более детей из одной семьи\nАкции и бонусы к началу учебного года',
      },
    ],
  },
  {
    section: 'ДОПОЛНИТЕЛЬНЫЕ ВОЗМОЖНОСТИ',
    icon: <EmojiEventsIcon />,
    color: '#f2aa8d',
    items: [
      {
        q: 'Проводите ли вы пробные экзамены?',
        a: 'Да. Регулярно устраиваем:\nПробные ЕГЭ и ОГЭ в реальных условиях\nРазбор с преподавателем\nОценка и рекомендации по улучшению',
      },
      {
        q: 'Есть ли летние курсы?',
        a: 'Да, летом мы предлагаем:\nКурсы по устранению пробелов\nЗанятия по подготовке к новому учебному году\nИнтенсивы по ЕГЭ/ОГЭ\nИндивидуальные занятия и развивающие программы',
      },
      {
        q: 'Вы готовите к олимпиадам?',
        a: 'Да. У нас есть отдельные программы по:\nВсероссийской олимпиаде школьников (ВОШ)\nПредметным олимпиадам\nКонференциям и проектной деятельности',
      },
    ],
  },
];

const styles = {
  pageWrapper: {
    py: { xs: 12, md: 16 },
    minHeight: '100vh',
    position: 'relative',
  },
  mainTitle: {
    textAlign: 'center',
    mb: { xs: 8, md: 10 },
    position: 'relative',
    zIndex: 2,
  },
  title: {
    fontWeight: 800,
    color: '#1e7dbd',
    fontSize: { xs: '2.5rem', md: '3.5rem' },
    mb: 2,
    letterSpacing: 1,
  },
  subtitle: {
    color: '#64748b',
    fontSize: { xs: '1.1rem', md: '1.3rem' },
    maxWidth: 600,
    mx: 'auto',
    fontWeight: 400,
  },
  sectionContainer: {
    position: 'relative',
    zIndex: 2,
  },
  sectionHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
    mb: 4,
    p: 3,
    background: 'rgba(255,255,255,0.9)',
    borderRadius: '20px',
    boxShadow: '0 8px 25px 0 rgba(30,125,189,0.15), 0 4px 12px 0 rgba(0,0,0,0.1)',
    border: '1px solid rgba(30,125,189,0.1)',
    backdropFilter: 'blur(10px)',
  },
  sectionIcon: {
    p: 1.5,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 8px 25px 0 rgba(30,125,189,0.15), 0 4px 12px 0 rgba(0,0,0,0.1)',
  },
  sectionTitle: {
    fontWeight: 700,
    fontSize: { xs: '1.5rem', md: '2rem' },
    letterSpacing: 0.5,
  },
  accordion: {
    mb: 2,
    borderRadius: '16px',
    boxShadow: '0 8px 25px 0 rgba(30,125,189,0.15), 0 4px 12px 0 rgba(0,0,0,0.1)',
    background: 'rgba(255,255,255,0.95)',
    border: '1px solid rgba(30,125,189,0.1)',
    backdropFilter: 'blur(10px)',
    transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
    '&:before': { display: 'none' },
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 12px 35px 0 rgba(30,125,189,0.25), 0 6px 20px 0 rgba(0,0,0,0.15)',
      borderColor: 'rgba(30,125,189,0.2)',
    },
    '&.Mui-expanded': {
      boxShadow: '0 12px 35px 0 rgba(30,125,189,0.25), 0 6px 20px 0 rgba(0,0,0,0.15)',
      borderColor: 'rgba(30,125,189,0.3)',
    },
  },
  question: {
    fontWeight: 600,
    fontSize: { xs: '1.1rem', md: '1.2rem' },
    lineHeight: 1.4,
  },
  answer: {
    color: '#334155',
    fontSize: { xs: '1rem', md: '1.1rem' },
    whiteSpace: 'pre-line',
    lineHeight: 1.6,
  },
  sectionDivider: {
    my: 8,
    borderColor: 'rgba(30,125,189,0.2)',
    borderWidth: 2,
    borderRadius: 1,
    background: 'rgba(30,125,189,0.3)',
  },
};

const AnimatedSection = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box ref={ref}>
      <Slide direction="up" in={inView} timeout={500 + delay}>
        <Box>{children}</Box>
      </Slide>
    </Box>
  );
};

const FAQPage = () => (
  <Box sx={styles.pageWrapper}>
    <Container maxWidth="lg">
      <AnimatedSection>
        <Box sx={styles.mainTitle}>
          <Typography variant="h1" sx={styles.title}>
            FAQ
          </Typography>
          <Typography variant="h5" sx={styles.subtitle}>
            Ответы на часто задаваемые вопросы
          </Typography>
        </Box>
      </AnimatedSection>

      <Box sx={styles.sectionContainer}>
        {faqData.map((section, idx) => (
          <AnimatedSection key={section.section} delay={idx * 100}>
            <Box>
              <Box sx={styles.sectionHeader}>
                <Box sx={{ ...styles.sectionIcon, bgcolor: section.color, color: 'white' }}>
                  {React.cloneElement(section.icon, { sx: { fontSize: 28 } })}
                </Box>
                <Typography sx={{ ...styles.sectionTitle, color: section.color }}>
                  {section.section}
                </Typography>
              </Box>
              
              {section.items.map((item, i) => (
                <Grow in={true} timeout={500 + i * 100} key={item.q}>
                  <Accordion sx={styles.accordion}>
                    <AccordionSummary 
                      expandIcon={<ExpandMoreIcon sx={{ color: section.color }} />}
                      sx={{ '&:hover': { bgcolor: 'rgba(30,125,189,0.02)' } }}
                    >
                      <Typography sx={{ ...styles.question, color: section.color }}>
                        {item.q}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ pt: 0 }}>
                      <Typography sx={styles.answer}>
                        {item.a}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </Grow>
              ))}
              
              {idx < faqData.length - 1 && <Divider sx={styles.sectionDivider} />}
            </Box>
          </AnimatedSection>
        ))}
      </Box>
    </Container>
  </Box>
);

export default FAQPage; 