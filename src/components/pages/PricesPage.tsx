import { Box, Container, Typography, Button } from '@mui/material';
import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';

const styles = {
  pageWrapper: {
    py: { xs: 4, md: 6 },
    background: '#f8f6f3',
    minHeight: '100vh',
  },
  mainTitle: {
    textAlign: 'center',
    fontWeight: 900,
    fontSize: { xs: '2.2rem', md: '3.2rem' },
    mb: 2,
    mt: 6,
    letterSpacing: 1,
    color: '#222',
    position: 'relative',
    zIndex: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
  },
  mainTitleBlue: {
    background: '#1e7dbd',
    color: '#fff',
    borderRadius: '16px',
    px: 3,
    py: 1,
    fontWeight: 900,
    fontSize: { xs: '2.2rem', md: '3.2rem' },
    boxDecorationBreak: 'clone',
    WebkitBoxDecorationBreak: 'clone',
    display: 'inline-block',
    boxShadow: '0 8px 24px rgba(30,125,189,0.25), 0 4px 12px rgba(30,125,189,0.15)',
    transform: 'rotate(-1deg)',
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '-2px',
      left: '-2px',
      right: '-2px',
      bottom: '-2px',
      background: 'linear-gradient(45deg, #1e7dbd, #2a8fd8)',
      borderRadius: '18px',
      zIndex: -1,
      opacity: 0.3,
    },
  },
  mainTitleOrange: {
    color: '#f2aa8d',
    fontWeight: 900,
    ml: 1,
    display: 'inline-block',
  },
  tickerWrapper: {
    width: '100vw',
    marginLeft: 'calc(-50vw + 50%)',
    overflow: 'hidden',
    background: '#f2aa8d',
    py: 1,
    mb: 4,
    display: 'flex',
    alignItems: 'center',
    color: '#555',
    fontWeight: 600,
    fontSize: { xs: '1.1rem', md: '1.2rem' },
    position: 'relative',
  },
  tickerText: {
    whiteSpace: 'nowrap',
    display: 'inline-block',
    animation: 'ticker 35s linear infinite',
    '@keyframes ticker': {
      '0%': { transform: 'translateX(0)' },
      '100%': { transform: 'translateX(-50%)' },
    },
  },
  courseFrame: {
    width: '100%',
    background: '#fff',
    border: '2.5px solid #1e7dbd',
    borderRadius: '24px',
    boxShadow: '0 4px 24px rgba(30,125,189,0.08)',
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    alignItems: 'center',
    justifyContent: 'space-between',
    p: { xs: 3, md: 5 },
    mb: 2,
    mt: 2,
    gap: 3,
    position: 'relative',
  },
  courseFrameOrange: {
    border: '2.5px solid #f2aa8d',
    background: '#fff7f0',
  },
  courseInfo: {
    flex: 1,
    minWidth: 200,
  },
  courseTitle: {
    fontWeight: 800,
    fontSize: { xs: '1.3rem', md: '1.7rem' },
    color: '#1e7dbd',
    mb: 1,
  },
  courseTitleOrange: {
    color: '#f2aa8d',
  },
  courseDesc: {
    color: '#222',
    fontSize: { xs: '1rem', md: '1.1rem' },
    mb: 1,
  },
  courseList: {
    pl: 0,
    mb: 2,
    listStyle: 'none',
    color: '#222',
    fontSize: '0.98rem',
  },
  coursePrice: {
    fontWeight: 900,
    fontSize: '2rem',
    color: '#1e7dbd',
    mt: 1,
    mb: 1,
  },
  coursePriceOrange: {
    color: '#f2aa8d',
  },
  courseBtn: {
    background: '#1e7dbd',
    color: '#fff',
    borderRadius: '12px',
    fontWeight: 700,
    fontSize: '1.1rem',
    px: 3,
    py: 1.2,
    boxShadow: '0 4px 16px rgba(30,125,189,0.10)',
    '&:hover': {
      background: '#f2aa8d',
      color: '#fff',
    },
    minWidth: 180,
    alignSelf: { xs: 'stretch', md: 'center' },
  },
  withFramePrice: {
    textAlign: 'right',
    fontWeight: 900,
    fontSize: '1.5rem',
    color: '#1e7dbd',
    mt: 0.5,
    mb: 2,
  },
  withFramePriceOrange: {
    color: '#f2aa8d',
  },
  benefitSection: {
    mt: 8,
    mb: 8,
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    gap: 4,
    alignItems: 'flex-start',
    justifyContent: 'center',
    position: 'relative',
  },
  benefitTitleBlock: {
    minWidth: 220,
    textAlign: 'left',
    fontWeight: 600,
    fontSize: { xs: '2rem', md: '2.5rem' },
    color: '#555',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    mt: 2,
    mb: 2,
  },
  benefitCardsWrap: {
    flex: 1,
    display: 'flex',
    flexDirection: { xs: 'column', md: 'column' },
    gap: 2,
    alignItems: 'stretch',
    justifyContent: 'flex-end',
  },
  benefitCard: {
    flex: 1,
    minWidth: 220,
    maxWidth: 340,
    background: '#1e7dbd',
    color: '#fff',
    borderRadius: '28px',
    boxShadow: '0 8px 32px rgba(30,125,189,0.13)',
    p: 3,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    transform: 'rotate(-2deg)',
    mb: { xs: 3, md: 0 },
    position: 'relative',
    lineHeight: 1.7,
    transition: 'box-shadow 0.2s, transform 0.2s',
    '&:hover': {
      boxShadow: '0 12px 36px rgba(30,125,189,0.18)',
      transform: 'scale(1.03) rotate(-2deg)',
      zIndex: 10,
    },
  },
  benefitCardWhite: {
    background: '#fff',
    color: '#222',
    border: '2px solid #1e7dbd',
    transform: 'rotate(3deg)',
  },
  benefitCardOrange: {
    background: '#fff',
    color: '#222',
    border: '2px solid #f2aa8d',
    transform: 'rotate(1.5deg)',
    boxShadow: '0 8px 32px rgba(242,170,141,0.10)',
    '&:hover': {
      boxShadow: '0 12px 36px rgba(242,170,141,0.18)',
      transform: 'scale(1.03) rotate(1.5deg)',
    },
  },
  benefitCardWide: {
    background: 'linear-gradient(90deg, #fff 80%, #f8f6f3 100%)',
    color: '#222',
    border: '2px solid #f2aa8d',
    transform: 'rotate(0.5deg)',
    width: '70%',
    maxWidth: 'none',
    mt: '-56px',
    zIndex: 2,
    borderRadius: '28px',
    boxShadow: '0 8px 32px rgba(242,170,141,0.10)',
    display: 'flex',
    alignItems: 'center',
    minHeight: 80,
    transition: 'box-shadow 0.2s, transform 0.2s',
    margin: '0 auto',
    marginLeft: 0,
    '&:hover': {
      boxShadow: '0 12px 36px rgba(242,170,141,0.18)',
      transform: 'scale(1.02) rotate(0.5deg)',
    },
  },
  benefitCardTitle: {
    fontWeight: 800,
    fontSize: '1.4rem',
    mb: 1,
    color: 'inherit',
    display: 'flex',
    alignItems: 'center',
    gap: 1,
    lineHeight: 1.2,
  },
  benefitCardAccent: {
    background: '#f2aa8d',
    color: '#fff',
    borderRadius: 6,
    px: 1,
    fontWeight: 900,
    fontSize: '1.1rem',
    ml: 1,
    display: 'inline-block',
  },
  benefitCardList: {
    pl: 0,
    mb: 1,
    listStyle: 'none',
    color: 'inherit',
    fontSize: '1rem',
  },
  benefitCardDesc: {
    color: 'inherit',
    fontSize: '1rem',
    mb: 1,
  },
  benefitCardBullet: {
    width: 10,
    height: 10,
    background: '#f2aa8d',
    borderRadius: '50%',
    display: 'inline-block',
    mr: 1,
  },
  benefitCardBulletBlue: {
    background: '#1e7dbd',
  },
  benefitCardBulletOrange: {
    background: '#f2aa8d',
  },
  benefitCardBulletBlack: {
    background: '#222',
  },
  infoBlock: {
    mt: 8,
    mb: 4,
    background: '#fff',
    borderRadius: '24px',
    boxShadow: '0 4px 24px rgba(30,125,189,0.08)',
    border: '2px solid #1e7dbd',
    p: { xs: 3, md: 5 },
    textAlign: 'center',
    fontSize: { xs: '1.1rem', md: '1.2rem' },
    color: '#222',
    fontWeight: 600,
    lineHeight: 1.7,
  },
  infoContacts: {
    mt: 2,
    color: '#1e7dbd',
    fontWeight: 700,
    fontSize: '1.1rem',
    wordBreak: 'break-all',
  },
};

const benefitCards = [
  {
    type: 'blue',
    title: '1000 ₽ за рекомендацию',
    desc: 'тому, кто порекомендовал, и другу, единовременная скидка 1000 рублей при покупке обучения любого предмета\n*скидка действует до 02.09.2024',
    bullets: [],
  },
  {
    type: 'orange',
    title: 'Скидка на ',
    accent: 'второй предмет',
    desc: '',
    bullets: [
      'Курсы 10–11 класс 4900 ₽ — первый предмет в месяц, 4500 ₽ — второй и последующие предметы',
      'Курсы 7–9 класс 4600 ₽ — первый, 4200 ₽ — второй и последующие',
      'Курсы 5–6 класс — 3600 ₽ — первый, 3300 ₽ — второй и последующие',
    ],
  },
  {
    type: 'white',
    title: 'Скидка 10% за разовую ',
    accent: 'оплату от 4х месяцев',
    desc: '',
    bullets: [],
  },
];

const PricesPage = () => {
  return (
    <Box sx={styles.pageWrapper}>
      <Container maxWidth="lg">
        {/* Заголовок */}
        <Box sx={styles.mainTitle}>
          <Box component="span" sx={styles.mainTitleBlue}>Стоимость</Box>
          <Box component="span" sx={styles.mainTitleOrange}>обучения</Box>
        </Box>

        {/* Бегущая строка */}
        <Box sx={styles.tickerWrapper}>
          <Box component="span" sx={styles.tickerText}>
            {Array(4).fill('Скидка до 30% на новый учебный год при оплате до 30.06.2025! • Скидка до 30% на новый учебный год при оплате до 30.06.2025! • ').join('')}
          </Box>
        </Box>

        {/* Летние курсы */}
        <Box sx={{ ...styles.courseFrame, ...styles.courseFrameOrange }}>
          <Box sx={styles.courseInfo}>
            <Typography sx={{ ...styles.courseTitle, ...styles.courseTitleOrange }}>Летний интенсив</Typography>
            <Typography sx={styles.courseDesc}>Для 5–10 класса. 2 недели, мини-группы до 8 учеников, домашние задания с проверкой, чат с преподавателем и однокурсниками.</Typography>
            <ul style={styles.courseList}>
              <li><CheckCircleIcon sx={{ color: '#f2aa8d', fontSize: 18, mr: 1 }} />Очно в СПб</li>
              <li><CheckCircleIcon sx={{ color: '#f2aa8d', fontSize: 18, mr: 1 }} />5–10 класс</li>
              <li><CheckCircleIcon sx={{ color: '#f2aa8d', fontSize: 18, mr: 1 }} />30 ак. часов (2 недели)</li>
            </ul>
          </Box>
          <Button sx={{ ...styles.courseBtn, background: '#f2aa8d', color: '#fff', '&:hover': { background: '#1e7dbd' } }}>Записаться</Button>
        </Box>
        <Box sx={{ ...styles.withFramePrice, ...styles.withFramePriceOrange }}>10 000 ₽ / курс</Box>

        {/* ЕГЭ */}
        <Box sx={styles.courseFrame}>
          <Box sx={styles.courseInfo}>
            <Typography sx={styles.courseTitle}>Подготовка к ЕГЭ 2024/2025</Typography>
            <Typography sx={styles.courseDesc}>10–11 класс. Мини-группы до 8 учеников, 1 раз в неделю по 120 минут, домашние задания с проверкой, чат с преподавателем и однокурсниками, онлайн-платформа.</Typography>
            <ul style={styles.courseList}>
              <li><CheckCircleIcon sx={{ color: '#1e7dbd', fontSize: 18, mr: 1 }} />1 раз в неделю по 120 минут</li>
              <li><CheckCircleIcon sx={{ color: '#1e7dbd', fontSize: 18, mr: 1 }} />Онлайн-платформа</li>
              <li><CheckCircleIcon sx={{ color: '#1e7dbd', fontSize: 18, mr: 1 }} />Первое занятие — бесплатно</li>
            </ul>
          </Box>
          <Button sx={styles.courseBtn}>Выбрать предмет</Button>
        </Box>
        <Box sx={styles.withFramePrice}>5 400 ₽ / мес.</Box>

        {/* С нами выгодно */}
        <Box sx={styles.benefitSection}>
          <Box sx={styles.benefitTitleBlock}>
            С нами<br />
            <Box component="span" sx={{
              background: '#f2aa8d',
              color: '#fff',
              borderRadius: '16px',
              px: 3,
              py: 1,
              fontWeight: 900,
              fontSize: { xs: '2rem', md: '2.5rem' },
              boxDecorationBreak: 'clone',
              WebkitBoxDecorationBreak: 'clone',
              display: 'inline-block',
              mt: 0.5,
              boxShadow: '0 8px 24px rgba(242,170,141,0.25), 0 4px 12px rgba(242,170,141,0.15)',
              transform: 'rotate(1deg)',
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: '-2px',
                left: '-2px',
                right: '-2px',
                bottom: '-2px',
                background: 'linear-gradient(45deg, #f2aa8d, #f5b89a)',
                borderRadius: '18px',
                zIndex: -1,
                opacity: 0.3,
              },
            }}>
              выгодно
            </Box>
          </Box>
          <Box sx={styles.benefitCardsWrap}>
            {/* Верхний ряд - два блока */}
            <Box sx={{ display: 'flex', gap: 4, position: 'relative', zIndex: 1 }}>
              {/* Карточка 1 */}
              <Box sx={{ ...styles.benefitCard, mr: -4, zIndex: 1, position: 'relative' }}>
                <Box sx={{ mb: 1 }}>
                  <HandshakeOutlinedIcon sx={{ fontSize: 56, color: '#1e7dbd', background: '#fff', borderRadius: '16px', p: 1 }} />
                </Box>
                <Typography sx={styles.benefitCardTitle}>{benefitCards[0].title}</Typography>
                {benefitCards[0].desc.split('\n').map((line, idx) => (
                  <Box key={idx} sx={{ display: 'flex', alignItems: 'flex-start', mb: 0.5 }}>
                    <Box sx={{ width: 8, height: 8, bgcolor: '#f2aa8d', borderRadius: '50%', mt: '8px', mr: 1.2, flexShrink: 0 }} />
                    <Typography sx={styles.benefitCardDesc}>{line}</Typography>
                  </Box>
                ))}
              </Box>
              {/* Карточка 2 */}
              <Box sx={{ ...styles.benefitCard, ...styles.benefitCardOrange, ml: -4, zIndex: 1, position: 'relative' }}>
                <Typography sx={{ ...styles.benefitCardTitle, color: '#1e7dbd', fontWeight: 800, fontSize: '1.25rem', mb: 0.5 }}>
                  Скидка на
                </Typography>
                <Typography sx={{
                  ...styles.benefitCardTitle,
                  color: '#1e7dbd',
                  fontWeight: 800,
                  fontSize: '1.25rem',
                  mb: 1,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                }}>
                  <Box component="span" sx={{
                    border: '2px solid #f2aa8d',
                    color: '#f2aa8d',
                    borderRadius: '8px',
                    px: 1.5,
                    py: 0.2,
                    fontWeight: 900,
                    fontSize: '1.1rem',
                    ml: 0,
                    display: 'inline-block',
                    background: '#fff',
                  }}>
                    второй предмет
                  </Box>
                </Typography>
                {benefitCards[1].bullets.map((b, i) => (
                  <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', mb: 0.5 }}>
                    <Box sx={{ width: 8, height: 8, bgcolor: '#f2aa8d', borderRadius: '50%', mt: '8px', mr: 1.2, flexShrink: 0 }} />
                    <Typography sx={{ ...styles.benefitCardDesc, color: '#444' }}>{b}</Typography>
                  </Box>
                ))}
              </Box>
            </Box>
            {/* Нижний блок - на всю ширину */}
            <Box sx={{ ...styles.benefitCard, ...styles.benefitCardWide, zIndex: 2, position: 'relative', mt: '-80px', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <Typography sx={{ ...styles.benefitCardTitle, color: '#444', fontWeight: 700, fontSize: { xs: '1.3rem', md: '1.6rem' }, mb: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                <Box sx={{ width: 12, height: 12, bgcolor: '#f2aa8d', borderRadius: '50%', mr: 1, display: 'inline-block' }} />
                Скидка 10% за разовую
              </Typography>
              <Box component="span" sx={{
                background: '#1e7dbd',
                color: '#fff',
                borderRadius: '16px',
                px: 3,
                py: 1,
                fontWeight: 900,
                fontSize: { xs: '1.4rem', md: '1.8rem' },
                boxDecorationBreak: 'clone',
                WebkitBoxDecorationBreak: 'clone',
                display: 'inline-block',
                mt: 1,
                boxShadow: '0 8px 24px rgba(30,125,189,0.25), 0 4px 12px rgba(30,125,189,0.15)',
                transform: 'rotate(-0.5deg)',
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: '-2px',
                  left: '-2px',
                  right: '-2px',
                  bottom: '-2px',
                  background: 'linear-gradient(45deg, #1e7dbd, #2a8fd8)',
                  borderRadius: '18px',
                  zIndex: -1,
                  opacity: 0.3,
                },
              }}>
                оплату от 4х месяцев
              </Box>
            </Box>
          </Box>
        </Box>

        {/* ОГЭ */}
        <Box sx={{ ...styles.courseFrame, ...styles.courseFrameOrange }}>
          <Box sx={styles.courseInfo}>
            <Typography sx={{ ...styles.courseTitle, ...styles.courseTitleOrange }}>Подготовка к ОГЭ 2024/2025</Typography>
            <Typography sx={styles.courseDesc}>9 класс. Мини-группы до 8 учеников, 1 раз в неделю по 120 минут, домашние задания с проверкой, чат с преподавателем и однокурсниками, онлайн-платформа.</Typography>
            <ul style={styles.courseList}>
              <li><CheckCircleIcon sx={{ color: '#f2aa8d', fontSize: 18, mr: 1 }} />1 раз в неделю по 120 минут</li>
              <li><CheckCircleIcon sx={{ color: '#f2aa8d', fontSize: 18, mr: 1 }} />Онлайн-платформа</li>
              <li><CheckCircleIcon sx={{ color: '#f2aa8d', fontSize: 18, mr: 1 }} />Первое занятие — бесплатно</li>
            </ul>
          </Box>
          <Button sx={{ ...styles.courseBtn, background: '#f2aa8d', color: '#fff', '&:hover': { background: '#1e7dbd' } }}>Выбрать предмет</Button>
        </Box>
        <Box sx={{ ...styles.withFramePrice, ...styles.withFramePriceOrange }}>5 400 ₽ / мес.</Box>

        {/* 5-8 класс */}
        <Box sx={styles.courseFrame}>
          <Box sx={styles.courseInfo}>
            <Typography sx={styles.courseTitle}>5–8 класс</Typography>
            <Typography sx={styles.courseDesc}>Помощь в учебе, мини-группы до 8 учеников, 1 раз в неделю по 90–120 минут, домашние задания с проверкой, чат с преподавателем и однокурсниками, онлайн-платформа.</Typography>
            <ul style={styles.courseList}>
              <li><CheckCircleIcon sx={{ color: '#1e7dbd', fontSize: 18, mr: 1 }} />1 раз в неделю по 90–120 минут</li>
              <li><CheckCircleIcon sx={{ color: '#1e7dbd', fontSize: 18, mr: 1 }} />Онлайн-платформа</li>
              <li><CheckCircleIcon sx={{ color: '#1e7dbd', fontSize: 18, mr: 1 }} />Первое занятие — бесплатно</li>
            </ul>
          </Box>
          <Button sx={styles.courseBtn}>Выбрать предмет</Button>
        </Box>
        <Box sx={styles.withFramePrice}>5 400 ₽ / мес.</Box>

        {/* Индивидуальные занятия */}
        <Box sx={styles.courseFrame}>
          <Box sx={styles.courseInfo}>
            <Typography sx={styles.courseTitle}>Индивидуальные занятия</Typography>
            <Typography sx={styles.courseDesc}>5–11 класс. Онлайн-формат, 60 минут, домашние задания с проверкой, индивидуальный подход, гибкий график, персональная программа.</Typography>
            <ul style={styles.courseList}>
              <li><CheckCircleIcon sx={{ color: '#1e7dbd', fontSize: 18, mr: 1 }} />60 минут</li>
              <li><CheckCircleIcon sx={{ color: '#1e7dbd', fontSize: 18, mr: 1 }} />Индивидуальный подход</li>
              <li><CheckCircleIcon sx={{ color: '#1e7dbd', fontSize: 18, mr: 1 }} />Персональная программа</li>
            </ul>
          </Box>
          <Button sx={styles.courseBtn}>Записаться</Button>
        </Box>
        <Box sx={styles.withFramePrice}>1 000–1 500 ₽ / занятие</Box>
      </Container>
    </Box>
  );
};

export default PricesPage; 