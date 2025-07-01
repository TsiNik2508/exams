import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme/index';
import { Navbar, Footer, ScrollToTop, SocialFloatingMenu } from './components/common';
import React, { Suspense, lazy } from 'react';
import bgMain from './assets/background/bg-main.png';
import priceBg from './assets/background/price-bg.png';
import faqBg from './assets/background/faq-bg.png';
import summerBg from './assets/background/summer-bg.png';
import subjectBg from './assets/background/subject-bg.png';

// Ленивая загрузка страниц для улучшения производительности
const SubjectPage = lazy(() => import('./components/pages/SubjectPage'));
const SummerCoursePage = lazy(() => import('./components/pages/SummerCoursePage'));
const FAQPage = lazy(() => import('./components/pages/FAQPage'));
const PricesPage = lazy(() => import('./components/pages/PricesPage'));
const HeroSection = lazy(() => import('./components/sections/HeroSection'));
const BenefitsSection = lazy(() => import('./components/sections/BenefitsSection'));
const PricesSection = lazy(() => import('./components/sections/PricesSection'));
const ReviewsSection = lazy(() => import('./components/sections/ReviewsSection'));
const ContactSection = lazy(() => import('./components/sections/ContactSection'));
const WhyUsSection = lazy(() => import('./components/sections/WhyUsSection'));

// Компонент загрузки
const LoadingFallback = () => (
  <Box 
    sx={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '200px',
      color: '#1e7dbd'
    }}
  >
    Загрузка...
  </Box>
);

// Мемоизируем HomePage с bg-main фоном
const HomePage = React.memo(() => (
  <Box
    sx={{
      position: 'relative',
      minHeight: '100vh',
      background: `url(${bgMain})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.02)', // Затемнение 30%
        zIndex: 0,
      },
    }}
  >
    <Suspense fallback={<LoadingFallback />}>
      <HeroSection />
      <BenefitsSection />
      <WhyUsSection />
      <ReviewsSection />
      <PricesSection />
      <ContactSection />
    </Suspense>
  </Box>
));

// Компоненты для страниц с красным фоном
const SummerCoursePageWithRedBg = React.memo(() => (
  <Box sx={{ 
    background: `url(${summerBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.02)',
      zIndex: 0,
    },
  }}>
    <Suspense fallback={<LoadingFallback />}>
      <SummerCoursePage />
    </Suspense>
  </Box>
));

const FAQPageWithRedBg = React.memo(() => (
  <Box sx={{ 
    background: `url(${faqBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.02)',
      zIndex: 0,
    },
  }}>
    <Suspense fallback={<LoadingFallback />}>
      <FAQPage />
    </Suspense>
  </Box>
));

const PricesPageWithRedBg = React.memo(() => (
  <Box sx={{ 
    background: `url(${priceBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.02)',
      zIndex: 0,
    },
  }}>
    <Suspense fallback={<LoadingFallback />}>
      <PricesPage />
    </Suspense>
  </Box>
));

const SubjectPageWithRedBg = React.memo(() => (
  <Box sx={{ 
    background: `url(${subjectBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.02)',
      zIndex: 0,
    },
  }}>
    <Suspense fallback={<LoadingFallback />}>
      <SubjectPage />
    </Suspense>
  </Box>
));

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Box sx={{ 
          position: 'relative', 
          minHeight: '100vh', 
          overflow: 'hidden',
        }}>
          <Box sx={{ position: 'relative', zIndex: 1, backgroundColor: 'transparent' }}>
            <SocialFloatingMenu />
            <ScrollToTop />
            <Navbar />
            <Box component="main" sx={{ backgroundColor: 'transparent' }}>
              <Suspense fallback={<LoadingFallback />}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/summer" element={<SummerCoursePageWithRedBg />} />
                  <Route path="/faq" element={<FAQPageWithRedBg />} />
                  <Route path="/prices" element={<PricesPageWithRedBg />} />
                  <Route path="/:examType/:subject" element={<SubjectPageWithRedBg />} />
                </Routes>
              </Suspense>
            </Box>
            <Footer />
          </Box>
        </Box>
      </ThemeProvider>
    </Router>
  );
}

export default React.memo(App);
