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
  <Box sx={{ py: 8, position: 'relative', overflow: 'hidden' }}>
    {/* Паттерн из кругов */}
    <Box sx={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none' }}>
      <svg width="100%" height="100%" viewBox="0 0 1200 320" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', left: 0, top: 0 }}>
        <circle cx="180" cy="60" r="48" fill="#f2aa8d" fillOpacity="0.08">
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
        <circle cx="900" cy="220" r="42" fill="#f2aa8d" fillOpacity="0.07">
          <animate attributeName="r" values="42;46;42" dur="5.5s" repeatCount="indefinite" />
          <animate attributeName="fillOpacity" values="0.07;0.11;0.07" dur="5.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="600" cy="80" r="30" fill="#f2aa8d" fillOpacity="0.06">
          <animate attributeName="r" values="30;34;30" dur="4s" repeatCount="indefinite" />
          <animate attributeName="fillOpacity" values="0.06;0.10;0.06" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="700" cy="280" r="54" fill="#f2aa8d" fillOpacity="0.07">
          <animate attributeName="r" values="54;58;54" dur="5s" repeatCount="indefinite" />
          <animate attributeName="fillOpacity" values="0.07;0.11;0.07" dur="5s" repeatCount="indefinite" />
        </circle>
      </svg>
    </Box>

    <Typography variant="h4" textAlign="center" sx={{ mb: 6, fontWeight: 700, color: '#1e7dbd', position: 'relative', zIndex: 2 }}>
      Часто задаваемые вопросы
    </Typography>

    <Box sx={{ maxWidth: 800, mx: 'auto', position: 'relative', zIndex: 2 }}>
      {faqs.map((faq, index) => (
        <Accordion
          key={index}
          sx={{
            mb: 2,
            borderRadius: '8px !important',
            boxShadow: '0 4px 20px rgba(242,170,141,0.1) !important',
            '&:before': {
              display: 'none',
            },
            '&.Mui-expanded': {
              margin: '0 0 16px 0',
              backgroundColor: 'rgba(242,170,141,0.03)',
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: '#1e7dbd' }} />}
            sx={{
              '&:hover': {
                backgroundColor: 'rgba(242,170,141,0.05)',
              },
              '& .MuiAccordionSummary-content': {
                margin: '12px 0',
              },
            }}
          >
            <Typography sx={{ fontWeight: 600, color: '#f2aa8d' }}>
              {faq.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: 'rgba(242,170,141,0.02)' }}>
            <Typography sx={{ color: '#64748b', lineHeight: 1.7 }}>
              {faq.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  </Box>
);

export default FAQSection; 