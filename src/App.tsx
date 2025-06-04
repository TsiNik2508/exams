import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, Box } from '@mui/material';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import FormatsSection from './components/FormatsSection';
import WhyUsSection from './components/WhyUsSection';
import TeachersSection from './components/TeachersSection';
import ReviewsSection from './components/ReviewsSection';
import BenefitsSection from './components/BenefitsSection';
import PricesSection from './components/PricesSection';
import FAQSection from './components/FAQSection';
import TrialFormSection from './components/TrialFormSection';
import ContactSection from './components/ContactSection';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1e7dbd',
      light: '#60a5fa',
      dark: '#1d4ed8',
    },
    secondary: {
      main: '#f2aa8d',
      light: '#f8c3b0',
      dark: '#e68b6d',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    text: {
      primary: '#1e293b',
      secondary: '#64748b',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          padding: '10px 24px',
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)',
          transition: 'transform 0.2s, box-shadow 0.2s',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
          },
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column',
          minHeight: '100vh',
        }}>
          <Navbar />
          <Box sx={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={
                <>
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
                </>
              } />
            </Routes>
          </Box>
          <Footer />
          <ScrollToTop />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
