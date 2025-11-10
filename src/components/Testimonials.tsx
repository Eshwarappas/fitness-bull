
import React from 'react';
import { TESTIMONIALS_DATA } from '../../constants';

interface TestimonialCardProps {
    name: string;
    story: string;
    beforeImage: string;
    afterImage: string;
    achievement: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, story, beforeImage, afterImage, achievement }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-2">
                <img src={beforeImage} alt={`Before - ${name}`} className="w-full h-64 object-cover" />
                <img src={afterImage} alt={`After - ${name}`} className="w-full h-64 object-cover" />
            </div>
            <div className="p-6">
                <p className="text-text-secondary mb-4 italic">"{story}"</p>
                <div className="flex items-center justify-between">
                    <h4 className="font-bold text-lg text-text-primary">{name}</h4>
                    <span className="bg-possible-green/20 text-possible-green-dark font-semibold px-3 py-1 rounded-full text-sm">{achievement}</span>
                </div>
            </div>
        </div>
    );
};

const Testimonials: React.FC = () => {
    return (
        <section className="bg-possible-gray py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Inspiring Success Stories</h2>
                    <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                        Real people, real results. See how we've changed lives.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {TESTIMONIALS_DATA.map((testimonial, index) => (
                        <TestimonialCard key={index} {...testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
