
import React from 'react';
import { FEATURED_LOGOS } from '../../constants';

const FeaturedIn: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-xl font-semibold text-text-secondary mb-8">As Featured In</h3>
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 md:gap-x-16">
          {FEATURED_LOGOS.map((logo, index) => (
            <div key={index} className="text-gray-500 font-medium text-lg filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedIn;
