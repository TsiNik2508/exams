import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqs = [
  {
    question: 'Как проходят занятия?',
    answer: 'Занятия проходят в группах до 8 человек, с использованием авторских материалов и интерактивных заданий. Преподаватели обеспечивают индивидуальный подход к каждому ученику.',
  },
  {
    question: 'Можно ли получить пробный урок?',
    answer: 'Да, мы предоставляем бесплатный пробный урок, чтобы вы могли оценить качество обучения и познакомиться с преподавателем.',
  },
  {
    question: 'Какие документы нужны для записи?',
    answer: 'Для записи на курсы необходимо предоставить паспорт и заполнить анкету. Дополнительные документы не требуются.',
  },
  {
    question: 'Есть ли скидки для постоянных клиентов?',
    answer: 'Да, мы предлагаем скидки для постоянных клиентов, а также специальные акции и бонусы при оплате за несколько месяцев вперед.',
  },
];

const FAQSection = () => (
  <Box sx={{ py: 8, background: 'linear-gradient(135deg, #f5f6fa 60%, #e3f2fd 100%)', position: 'relative', overflow: 'hidden' }}>
    {/* Паттерн из кругов */}
    <Box sx={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none' }}>
      <svg width="100%" height="100%" viewBox="0 0 1200 320" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', left: 0, top: 0 }}>
        <circle cx="180" cy="60" r="32" fill="#1e7dbd" fillOpacity="0.07" />
        <circle cx="1000" cy="100" r="40" fill="#f2aa8d" fillOpacity="0.09" />
        <circle cx="300" cy="260" r="24" fill="#f2aa8d" fillOpacity="0.08" />
        <circle cx="900" cy="220" r="30" fill="#1e7dbd" fillOpacity="0.07" />
      </svg>
    </Box>
    <Typography variant="h4" textAlign="center" sx={{ mb: 4, fontWeight: 700, color: '#1e7dbd', zIndex: 2, position: 'relative' }}>Часто задаваемые вопросы</Typography>
    <Box sx={{ maxWidth: 800, mx: 'auto', position: 'relative', zIndex: 2 }}>
      {faqs.map((faq, i) => (
        <Accordion
          key={i}
          sx={{
            background: '#fff',
            borderRadius: 2,
            boxShadow: '0 4px 24px 0 rgba(30,125,189,0.13)',
            mb: 2,
            '&:before': { display: 'none' },
            '&:hover': {
              boxShadow: '0 8px 32px 0 rgba(30,125,189,0.18)',
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: '#1e7dbd' }} />}
            sx={{ fontWeight: 700, color: '#1e7dbd' }}
          >
            <Typography variant="h6">{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: '#222831', fontSize: 16 }}>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  </Box>
);

export default FAQSection; 