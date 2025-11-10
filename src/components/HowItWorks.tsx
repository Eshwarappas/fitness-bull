
import React from 'react';

const StepIcon: React.FC<{ path: string }> = ({ path }) => (
    <div className="bg-possible-green/10 p-4 rounded-full mb-4 inline-block">
        <svg className="w-10 h-10 text-possible-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={path}></path>
        </svg>
    </div>
);

const HowItWorks: React.FC = () => {
    const steps = [
        {
            iconPath: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
            title: "Assigned a Personal Coach",
            description: "Get a dedicated nutritionist who will guide and motivate you throughout your journey."
        },
        {
            iconPath: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
            title: "Get a Super-Personalized Diet Plan",
            description: "Your coach creates a diet plan customized for your goals, lifestyle, and preferences."
        },
        {
            iconPath: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
            title: "Achieve Your Health Goals",
            description: "Follow the plan, eat our superfoods, and see visible results in a few weeks."
        }
    ];

    return (
        <section className="bg-possible-gray py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">How It Works</h2>
                <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-12">
                    A simple, scientific, and sustainable approach to better health.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {steps.map((step, index) => (
                        <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                            <StepIcon path={step.iconPath} />
                            <h3 className="text-xl font-bold text-text-primary mb-2">{step.title}</h3>
                            <p className="text-text-secondary">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
