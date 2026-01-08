import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
    const formRef = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (!formRef.current) return;

        emailjs.sendForm(
            'service_qti4brs',      // Your Service ID
            'template_zcqtqvf',     // Your Template ID
            formRef.current,
            'GDghArfDYFp2hvTTV'     // Your Public Key
        )
        .then(() => {
            alert('Message sent successfully 🚀');
            formRef.current?.reset();
        })
        .catch((error) => {
            alert('Failed to send message ❌');
            console.error(error);
        });
    };

    return (
        <div id="contact" className="w-full py-32 bg-[#030014] relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute bottom-0 left-[-10%] w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

                    {/* Left Column */}
                    <div className="lg:col-span-2 flex flex-col justify-between space-y-8">
                        <div>
                            <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
                                Let's <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Connect.</span>
                            </h2>
                            <p className="text-gray-400 text-lg mt-6 leading-relaxed">
                                Have a project in mind? Looking for a partner to help build your next big idea? I am currently <span className="text-white font-semibold">open</span> to new opportunities.
                            </p>
                        </div>

                        {/* Status */}
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>
                            <span className="text-green-400 font-mono text-xs font-bold uppercase tracking-wider">Available for work</span>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-4 pt-4">
                            <a href="mailto:mearegbuna@gmail.com" className="group flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-purple-600 transition-colors duration-300">
                                    <span className="material-symbols-outlined">mail</span>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-wider">Email Me</p>
                                    <p className="text-lg font-bold">mearegbuna@gmail.com</p>
                                </div>
                            </a>

                            <a
                                href="https://www.linkedin.com/in/meareg-teferi"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-4 text-gray-300 hover:text-white transition-colors"
                            >
                                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center 
                                                group-hover:bg-cyan-600 transition-colors duration-300">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452H17.21V15.83c0-1.103-.022-2.522-1.538-2.522-1.54 0-1.776 1.2-1.776 2.44v4.704H10.66V9h3.112v1.561h.044c.434-.82 1.494-1.683 3.073-1.683 3.287 0 3.89 2.164 3.89 4.977v6.597zM5.337 7.433a1.804 1.804 0 1 1 0-3.607 1.804 1.804 0 0 1 0 3.607zM6.956 20.452H3.72V9h3.236v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.727v20.545C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.273V1.727C24 .774 23.2 0 22.222 0z"/>
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-wider">LinkedIn</p>
                                    <p className="text-lg font-bold">@meareg-teferi</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="lg:col-span-3 bg-white/[0.02] backdrop-blur-sm border border-white/5 rounded-3xl p-8 md:p-12 relative">
                        <div className="absolute top-0 right-0 p-6 opacity-20">
                            <span className="material-symbols-outlined text-6xl text-white">edit_note</span>
                        </div>

                        <form ref={formRef} onSubmit={sendEmail} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <FloatingInput label="Your Name" placeholder="John Doe" name="from_name" />
                                <FloatingInput label="Email Address" placeholder="john@example.com" type="email" name="from_email" />
                            </div>

                            <FloatingInput label="Subject" placeholder="Project Inquiry" name="subject" />

                            <div className="group relative">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1 mb-2 block">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-purple-500 transition-colors resize-none h-32 placeholder:text-gray-700"
                                    placeholder="Tell me about your goals..."
                                ></textarea>
                                <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-purple-500 transition-all duration-300 group-focus-within:w-full"></div>
                            </div>

                            <button className="group relative w-full sm:w-auto overflow-hidden rounded-xl bg-white text-black font-bold py-4 px-8 text-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300">
                                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-white transition-colors">
                                    Send Message <span className="material-symbols-outlined text-lg">send</span>
                                </span>
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

const FloatingInput: React.FC<{ label: string; placeholder: string; type?: string; name: string }> = ({ label, placeholder, type = "text", name }) => (
    <div className="group relative">
        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1 mb-2 block">{label}</label>
        <input
            type={type}
            name={name}
            required
            className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors placeholder:text-gray-700"
            placeholder={placeholder}
        />
        <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-cyan-400 transition-all duration-300 group-focus-within:w-full"></div>
    </div>
);

export default Contact;
