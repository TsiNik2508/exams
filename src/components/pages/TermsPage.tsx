import React from 'react';
import { Box, Container, Typography, Stack } from '@mui/material';

const sections = [
  {
    title: '1. Общие положения',
    content: [
      'Настоящее Пользовательское соглашение регулирует отношения между образовательным центром «Эрудит» и пользователем сайта.',
      'Используя сайт, вы подтверждаете согласие с данным соглашением и обязуетесь его соблюдать.'
    ]
  },
  {
    title: '2. Услуги центра',
    content: [
      'Мы предоставляем информацию о подготовке к ЕГЭ и ОГЭ, расписание занятий, описания курсов и преподавателей.',
      'Запись на занятия осуществляется по заявке через формы сайта или по телефону, указанному в контактах.'
    ]
  },
  {
    title: '3. Обязанности пользователя',
    content: [
      'Предоставлять достоверную информацию при заполнении форм обратной связи.',
      'Не распространять информацию, полученную в рамках обучения, без согласования с центром.'
    ]
  },
  {
    title: '4. Ответственность',
    content: [
      'Центр не несёт ответственности за технические перебои в работе сайта, вызванные внешними причинами.',
      'Пользователь самостоятельно несёт ответственность за соблюдение законодательства при использовании материалов сайта.'
    ]
  },
  {
    title: '5. Срок действия соглашения',
    content: [
      'Соглашение действует бессрочно и может быть изменено администрацией сайта без предварительного уведомления.',
      'Изменения вступают в силу с момента публикации на сайте.'
    ]
  }
];

const TermsPage: React.FC = () => (
  <Box
    sx={{
      minHeight: '100vh',
      background: 'linear-gradient(140deg, rgba(30,125,189,0.08), rgba(242,170,141,0.14))',
      py: { xs: 8, md: 10 },
      px: { xs: 2, md: 0 },
    }}
  >
    <Container maxWidth="md">
      <Box
        sx={{
          backgroundColor: '#fff',
          borderRadius: 5,
          boxShadow: '0 25px 60px rgba(30,125,189,0.12)',
          p: { xs: 4, md: 6 },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 800,
            color: '#1e7dbd',
            textAlign: 'center',
            fontSize: { xs: '1.9rem', sm: '2.3rem', md: '2.6rem' },
            mb: 3,
          }}
        >
          Пользовательское соглашение
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: '#64748b',
            textAlign: 'center',
            maxWidth: 620,
            mx: 'auto',
            mb: 5,
            lineHeight: 1.7,
          }}
        >
          Настоящее соглашение определяет порядок использования сайта и услуг образовательного центра «Эрудит».
          Пожалуйста, внимательно ознакомьтесь с условиями перед использованием нашего сайта.
        </Typography>

        <Stack spacing={4}>
          {sections.map(({ title, content }) => (
            <Box key={title}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  color: '#0f172a',
                  mb: 1.5,
                }}
              >
                {title}
              </Typography>
              <Stack spacing={1.2}>
                {content.map((paragraph) => (
                  <Typography key={paragraph} variant="body1" sx={{ color: '#475569', lineHeight: 1.7 }}>
                    {paragraph}
                  </Typography>
                ))}
              </Stack>
            </Box>
          ))}
        </Stack>
      </Box>
    </Container>
  </Box>
);

export default TermsPage;
