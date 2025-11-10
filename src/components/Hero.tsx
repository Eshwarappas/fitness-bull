
import React from 'react';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-cover bg-center text-white -mt-20 pt-20" style={{ backgroundImage: "url('https://picsum.photos/seed/hero-bg/1920/1080')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col lg:flex-row items-center">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg">
            Stop dieting, <br /> Start eating right
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-lg mx-auto lg:mx-0 drop-shadow-md">
            India's most loved nutrition-based healthcare company. Let's make health possible, together.
          </p>
          </div>
          <div className="py-4 mt-6 inline-block ">
           <Button className="w-full bg-brand-red hover:bg-brand-black">Book Free Consultation</Button>
          </div>
        </div>

        {/* Right Form */}
        <div className="lg:w-1/2 w-full max-w-md">
          <div className="bg-white rounded-lg shadow-2xl p-8 text-text-primary">
            <h3 className="text-2xl font-bold text-center mb-1">Book a FREE Consultation</h3>
            <p className="text-center text-text-secondary mb-6">With our expert nutritionists</p>
            <form className="space-y-4">
              <div>
                <input type="text" placeholder="Name*" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-possible-green" />
              </div>
              <div>
                <input type="tel" placeholder="Mobile Number*" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-possible-green" />
              </div>
              <div>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-possible-green bg-white text-gray-500">
                  <option>Select City*</option>
                  <option>Mumbai</option>
                  <option>Delhi</option>
                  <option>Bangalore</option>
                  <option>Chennai</option>
                </select>
              </div>
              <Button type="submit" className="w-full">Get a Callback</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
