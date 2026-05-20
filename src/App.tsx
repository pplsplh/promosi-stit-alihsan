import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProgramsSection from './components/ProgramsSection';
import FeaturesSection from './components/FeaturesSection';
import NewsSection from './components/NewsSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import SectionDivider from './components/SectionDivider';

function App() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <SectionDivider />
      <AboutSection />
      <SectionDivider />
      <ProgramsSection />
      <SectionDivider />
      <FeaturesSection />
      <SectionDivider />
      <NewsSection />
      <SectionDivider />
      <TestimonialsSection />
      <SectionDivider />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
