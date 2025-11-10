
import React from 'react';

const FooterLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} className="text-gray-400 hover:text-white transition-colors duration-200">{children}</a>
);

const SocialIcon: React.FC<{ href: string, d: string }> = ({ href, d }) => (
    <a href={href} className="text-gray-400 hover:text-white transition-colors duration-200">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d={d} />
        </svg>
    </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          
          <div className="col-span-2 lg:col-span-1">
            <h3 className="text-2xl font-bold text-possible-green">Fitness Bull</h3>
            <p className="text-gray-400 mt-2 text-sm">Making health possible for millions.</p>
          </div>

          <div>
            <h4 className="font-semibold tracking-wider uppercase mb-4">Programs</h4>
            <ul className="space-y-2">
              <li><FooterLink href="#">Weight Loss</FooterLink></li>
              <li><FooterLink href="#">Diabetes Care</FooterLink></li>
              <li><FooterLink href="#">PCOS</FooterLink></li>
              <li><FooterLink href="#">Thyroid Care</FooterLink></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold tracking-wider uppercase mb-4">About Us</h4>
            <ul className="space-y-2">
              <li><FooterLink href="#">Our Story</FooterLink></li>
              <li><FooterLink href="#">Careers</FooterLink></li>
              <li><FooterLink href="#">Healthpedia</FooterLink></li>
              <li><FooterLink href="#">Contact</FooterLink></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold tracking-wider uppercase mb-4">Support</h4>
            <ul className="space-y-2">
              <li><FooterLink href="#">FAQ</FooterLink></li>
              <li><FooterLink href="#">Terms of Service</FooterLink></li>
              <li><FooterLink href="#">Privacy Policy</FooterLink></li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
             <h4 className="font-semibold tracking-wider uppercase mb-4">Connect</h4>
             <div className="flex space-x-4">
                <SocialIcon href="#" d="M22.46 6c-.77.35-1.6.58-2.46.67.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.22-1.95-.55v.05c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                <SocialIcon href="#" d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325 1.42-3.592 3.5-3.592.699-.002 1.396.034 2.092.105v2.42h-1.435c-1.128 0-1.348.538-1.348 1.325v1.735h2.697l-.35 2.725h-2.348V21H20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z" />
                <SocialIcon href="#" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.88-1.55 7.15c-.13.62-.57.78-1.08.48l-2.33-1.71-1.13 1.09c-.12.12-.23.23-.42.23l.16-2.38 4.36-3.95c.18-.16-.05-.25-.3-.1l-5.38 3.35-2.29-.71c-.62-.19-.65-.61.13- T.88l8.94-3.48c.52-.2.97.14.8.76z" />
             </div>
          </div>

        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Possible. All rights reserved. Clone created for educational purposes.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
