import { Box } from '@mui/material';
import Header from '../components/Header';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import WorkProcessSection from '../components/sections/WorkProcessSection';
import PortfolioSection from '../components/sections/PortfolioSection';
import CallToActionSection from '../components/sections/CallToActionSection';
import BlogSection from '../components/sections/BlogSection';
import ServicesSection from '../components/sections/ServicesSection';
import ClientsSection from '../components/sections/ClientsSection';
import TestimonialSection from '../components/sections/TestimonialSection';
import ContactSection from '../components/sections/ContactSection';
import Footer from '../components/Footer';

export default function PortfolioPage() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage: 'url(/images/background-gradient.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Header />
      <HeroSection />
      <AboutSection />
      <WorkProcessSection />
      <PortfolioSection />
      <CallToActionSection />
      <BlogSection />
      <ServicesSection />
      <ClientsSection />
      <TestimonialSection />
      <ContactSection />
      <Footer />
    </Box>
  );
}