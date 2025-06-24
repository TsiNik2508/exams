import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme/index';
import { Navbar, Footer } from './components/common';
import { Background } from './components/ui';
import ScrollToTop from './components/common/ScrollToTop';
import React, { Suspense, lazy } from 'react';

// Ленивая загрузка страниц для улучшения производительности
const SubjectPage = lazy(() => import('./components/pages/SubjectPage'));
const SummerCoursePage = lazy(() => import('./components/pages/SummerCoursePage'));
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

// Мемоизируем HomePage
const HomePage = React.memo(() => (
  <Suspense fallback={<LoadingFallback />}>
    <HeroSection />
    <BenefitsSection />
    <WhyUsSection />
    <ReviewsSection />
    <PricesSection />
    <ContactSection />
  </Suspense>
));

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Box sx={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
          <Background />
          <Box sx={{ position: 'relative', zIndex: 1, backgroundColor: 'transparent' }}>
            <ScrollToTop />
            <Navbar />
            <Box component="main" sx={{ backgroundColor: 'transparent' }}>
              <Suspense fallback={<LoadingFallback />}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/summer" element={<SummerCoursePage />} />
                  <Route path="/:examType/:subject" element={<SubjectPage />} />
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
