import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import WorkProcess from "./components/WorkProcess";
import Portfolio from "./components/Portfolio";
import CallToAction from "./components/CallToAction";
import Blog from "./components/Blog";
import WhatIDo from "./components/WhatIDo";
import HappyClients from "./components/HappyClients";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <About />
      <WorkProcess />
      <Portfolio />
      <CallToAction />
      <Blog />
      <WhatIDo />
      <HappyClients />
      <Testimonial />
      <Contact />
      <Footer />
    </main>
  );
}
