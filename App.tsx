
import React from 'react';
import Header from './src/components/Header';
import Hero from './src/components/Hero';
import HowItWorks from './src/components/HowItWorks';
import Programs from './src/components/Programs';
import Testimonials from './src/components/Testimonials';
import FeaturedIn from './src/components/FeaturedIn';
import WhyPossible from './src/components/WhyPossible';
import Footer from './src/components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white font-sans text-text-primary">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Programs />
        <Testimonials />
        <WhyPossible />
        <FeaturedIn />
      </main>
      <Footer />
    </div>
  );
};

export default App;
