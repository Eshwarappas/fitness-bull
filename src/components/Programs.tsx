
import React from 'react';
import { PROGRAMS_DATA } from '../../constants';
import Button from './Button';

interface ProgramCardProps {
  title: string;
  description: string;
  image: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ title, description, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-text-primary mb-2">{title}</h3>
        <p className="text-text-secondary mb-4 flex-grow">{description}</p>
        <div className="mt-auto">
          <a href="#" className="font-semibold text-possible-green hover:text-possible-green-dark">
            Know More &rarr;
          </a>
        </div>
      </div>
    </div>
  );
};

const Programs: React.FC = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Our Programs</h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Tailored programs designed by experts to meet your specific health needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROGRAMS_DATA.map((program, index) => (
            <ProgramCard key={index} {...program} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button>View All Programs</Button>
        </div>
      </div>
    </section>
  );
};

export default Programs;
