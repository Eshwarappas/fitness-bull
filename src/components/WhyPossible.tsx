
import React from 'react';
import { WHY_POSSIBLE_POINTS } from '../../constants';

const CheckIcon = () => (
    <svg className="w-6 h-6 text-white bg-possible-green rounded-full p-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
    </svg>
);

const WhyPossible: React.FC = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2">
                    <img src="https://picsum.photos/seed/whyus/600/500" alt="Healthy food and consultation" className="rounded-lg shadow-2xl"/>
                </div>
                <div className="lg:w-1/2">
                    <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">Why Choose Possible?</h2>
                    <p className="text-lg text-text-secondary mb-8">
                        We combine the power of nutritious food, personal coaching, and technology to help you achieve your health goals in a way that lasts.
                    </p>
                    <div className="space-y-6">
                        {WHY_POSSIBLE_POINTS.map((point, index) => (
                            <div key={index} className="flex items-start">
                                <CheckIcon />
                                <div>
                                    <h4 className="font-bold text-lg text-text-primary">{point.title}</h4>
                                    <p className="text-text-secondary">{point.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyPossible;
