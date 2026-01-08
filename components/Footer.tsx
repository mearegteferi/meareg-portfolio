import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="w-full flex justify-center border-t border-white/10 py-12 bg-gray-900 dark:bg-[#0f0e21] shadow-inner shadow-black/20">
            <div className="w-full max-w-6xl px-4 flex flex-col items-center gap-8">
                 <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
                    <FooterLink href="#home" label="Home" />
                    <FooterLink href="#about" label="About" />
                    <FooterLink href="#experience" label="Experience" />
                    <FooterLink href="#projects" label="Projects" />
                    <FooterLink href="#contact" label="Contact" />
                </div>
                
                <div className="flex items-center gap-5">
                    <SocialIcon icon="hub" />
                    <SocialIcon icon="code" />
                    <SocialIcon icon="mail" />
                </div>

                <p className="text-gray-500 dark:text-gray-500 text-sm text-center pt-4 border-t border-white/5 w-full">
                    © Meareg Teferi. All rights reserved. Built with ❤️ and Code.
                </p>
            </div>
        </footer>
    );
};

const FooterLink: React.FC<{ href: string; label: string }> = ({ href, label }) => (
    <a className="text-gray-400 text-base font-normal hover:text-primary transition-colors duration-200" href={href}>{label}</a>
);

const SocialIcon: React.FC<{ icon: string }> = ({ icon }) => (
    <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary/20 hover:text-primary transition-colors duration-200 cursor-pointer transform hover:scale-110">
         <span className="material-symbols-outlined text-base">{icon}</span>
    </div>
);

export default Footer;