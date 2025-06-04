import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import FormatsSection from '../components/FormatsSection';
import TrialFormSection from '../components/TrialFormSection';
import WhyUsSection from '../components/WhyUsSection';
import ReviewsSection from '../components/ReviewsSection';
import PricesSection from '../components/PricesSection';
import BenefitsSection from '../components/BenefitsSection';
import TeachersSection from '../components/TeachersSection';
import FAQSection from '../components/FAQSection';
import SectionWave from '../components/SectionWave';

const Home = () => (
  <>
    <HeroSection />
    <StatsSection />
    <FormatsSection />
    <TrialFormSection />
    <WhyUsSection />
    <SectionWave color="#fff" direction="down" />
    <ReviewsSection />
    <PricesSection />
    <BenefitsSection />
    <TeachersSection />
    <FAQSection />
  </>
);

export default Home; 