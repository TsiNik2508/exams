import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme/index';
import { Navbar, Footer } from './components/common';
import { Background } from './components/ui';
import SubjectPage from './components/pages/SubjectPage';
import ScrollToTop from './components/common/ScrollToTop';
import HeroSection from './components/sections/HeroSection';
import BenefitsSection from './components/sections/BenefitsSection';
import PricesSection from './components/sections/PricesSection';
import ReviewsSection from './components/sections/ReviewsSection';
import ContactSection from './components/sections/ContactSection';
import WhyUsSection from './components/sections/WhyUsSection';
import SummerCoursePage from './components/pages/SummerCoursePage';

const HomePage = () => (
  <>
    <HeroSection />
    <BenefitsSection />
    <WhyUsSection />
    <ReviewsSection />
    <PricesSection />
    <ContactSection />
  </>
);

function App() {
  return (
    <Router basename="/exams">
      <ThemeProvider theme={theme}>
        <Box sx={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
          <Background />
          <Box sx={{ position: 'relative', zIndex: 1, backgroundColor: 'transparent' }}>
            <ScrollToTop />
            <Navbar />
            <Box component="main" sx={{ backgroundColor: 'transparent' }}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/summer" element={<SummerCoursePage />} />
                <Route path="/:examType/:subject" element={<SubjectPage />} />
              </Routes>
            </Box>
            <Footer />
          </Box>
        </Box>
      </ThemeProvider>
    </Router>
  );
}

export default App;
