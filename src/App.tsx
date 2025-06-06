import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { theme } from './theme/index';
import { Navbar, Footer, ScrollToTop } from './components/common';
import { Background } from './components/ui';
import {
  HeroSection,
  StatsSection,
  BenefitsSection,
  TrialFormSection,
  FormatsSection,
  WhyUsSection,
  TeachersSection,
  ReviewsSection,
  PricesSection,
  FAQSection,
  ContactSection,
} from './components/sections';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Box sx={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
          <Background />
          <Box sx={{ position: 'relative', zIndex: 1, backgroundColor: 'transparent' }}>
            <Navbar />
            <Box component="main" sx={{ backgroundColor: 'transparent' }}>
              <HeroSection />
              <StatsSection />
              <BenefitsSection />
              <TrialFormSection />
              <FormatsSection />
              <WhyUsSection />
              <TeachersSection />
              <ReviewsSection />
              <PricesSection />
              <FAQSection />
              <ContactSection />
            </Box>
            <Footer />
            <ScrollToTop />
          </Box>
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
