import { Header } from '@/app/components/Header';
import { Hero } from '@/app/components/Hero';
import { AboutSection } from '@/app/components/AboutSection';
import { ProcessSection } from '@/app/components/ProcessSection';
import { ServicesSection } from '@/app/components/ServicesSection';
import { PortfolioSection } from '@/app/components/PortfolioSection';
import { CTASection } from '@/app/components/CTASection';
import { BlogSection } from '@/app/components/BlogSection';
import { ClientsSection } from '@/app/components/ClientsSection';
import { TestimonialSection } from '@/app/components/TestimonialSection';
import { ContactSection } from '@/app/components/ContactSection';
import { Footer } from '@/app/components/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <ProcessSection />
        <ServicesSection />
        <PortfolioSection />
        <CTASection />
        <BlogSection />
        <ClientsSection />
        <TestimonialSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
