import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useTheme } from '../App';

const EMAIL = 'mearegbuna@gmail.com';

const Contact: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch { /* silent */ }
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus('sending');
    emailjs.sendForm('service_qti4brs', 'template_zcqtqvf', formRef.current, 'GDghArfDYFp2hvTTV')
      .then(() => { setStatus('sent'); formRef.current?.reset(); setTimeout(() => setStatus('idle'), 4000); })
      .catch(() => { setStatus('error'); setTimeout(() => setStatus('idle'), 4000); });
  };

  const bg       = isDark ? 'bg-[#13131c]'   : 'bg-[#f0f0f8]';
  const cardBg   = isDark ? 'bg-[#16161f]'   : 'bg-white';
  const inputBg  = isDark ? 'bg-[#0e0e1a]'   : 'bg-gray-50';
  const border   = isDark ? 'border-white/10' : 'border-gray-200';
  const titleC   = isDark ? 'text-white'      : 'text-gray-900';
  const bodyC    = isDark ? 'text-gray-400'   : 'text-gray-500';
  const labelC   = isDark ? 'text-gray-400'   : 'text-gray-500';
  const inputC   = isDark ? 'text-gray-200 placeholder:text-gray-600' : 'text-gray-800 placeholder:text-gray-400';
  const locBg    = isDark ? 'bg-white/[0.04]' : 'bg-white';
  const locC     = isDark ? 'text-gray-400'   : 'text-gray-500';

  return (
    <div id="contact" className={`relative w-full py-24 px-4 ${bg} overflow-hidden transition-colors duration-300`}>
      <div className="ambient absolute bottom-[-60px] left-[-60px] w-[400px] h-[400px] rounded-full bg-indigo-600/15 blur-[100px] pointer-events-none" />
      <div className="ambient absolute top-[-40px] right-[-40px] w-[300px] h-[300px] rounded-full bg-violet-600/10 blur-[90px] pointer-events-none" style={{ animationDelay: '3.5s' }} />

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-14 text-center">
          <SectionLabel text="Contact" centered />
          <h2 className={`mt-3 text-3xl sm:text-4xl font-bold ${titleC}`}>
            Let's{' '}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Work Together
            </span>
          </h2>
          <p className={`mt-3 text-base max-w-md mx-auto leading-relaxed ${bodyC}`}>
            Open to full-time roles, freelance projects, and collaborations. Drop me a message and I'll get back to you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* Left */}
          <div className="lg:col-span-2 flex flex-col gap-4">

            {/* Status */}
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/25">
              <span className="relative flex h-3 w-3 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
              </span>
              <span className="text-emerald-400 text-sm font-semibold">Available for new opportunities</span>
            </div>

            {/* Email with copy */}
            <div className={`card-hover flex items-center gap-4 px-4 py-3.5 rounded-xl ${cardBg} border ${border} hover:border-indigo-500/40 group transition-all duration-200`}>
              <div className="w-10 h-10 rounded-lg bg-indigo-500/15 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500/25 transition-colors shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <p className={`text-xs uppercase tracking-wider font-semibold ${labelC}`}>Email</p>
                <a href={`mailto:${EMAIL}`} className={`text-sm font-medium mt-0.5 truncate block hover:text-indigo-400 transition-colors ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                  {EMAIL}
                </a>
              </div>
              <button onClick={copyEmail}
                className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center border transition-all duration-200 ${
                  copied
                    ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-400'
                    : isDark
                    ? 'bg-white/5 border-white/10 text-gray-500 hover:text-indigo-400 hover:border-indigo-500/40 hover:bg-indigo-500/10'
                    : 'bg-gray-100 border-gray-200 text-gray-400 hover:text-indigo-500 hover:border-indigo-300 hover:bg-indigo-50'
                }`}
                title={copied ? 'Copied!' : 'Copy email'}
              >
                {copied ? (
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                )}
              </button>
            </div>

            {/* LinkedIn */}
            <ContactCard isDark={isDark} cardBg={cardBg} border={border} labelC={labelC}
              icon={<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452H17.21V15.83c0-1.103-.022-2.522-1.538-2.522-1.54 0-1.776 1.2-1.776 2.44v4.704H10.66V9h3.112v1.561h.044c.434-.82 1.494-1.683 3.073-1.683 3.287 0 3.89 2.164 3.89 4.977v6.597zM5.337 7.433a1.804 1.804 0 1 1 0-3.607 1.804 1.804 0 0 1 0 3.607zM6.956 20.452H3.72V9h3.236v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.727v20.545C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.273V1.727C24 .774 23.2 0 22.222 0z"/></svg>}
              label="LinkedIn" value="linkedin.com/in/meareg-teferi" href="https://www.linkedin.com/in/meareg-teferi"
            />

            {/* GitHub */}
            <ContactCard isDark={isDark} cardBg={cardBg} border={border} labelC={labelC}
              icon={<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.42 7.86 10.95.57.1.78-.25.78-.55v-2.02c-3.2.7-3.87-1.54-3.87-1.54-.53-1.35-1.3-1.71-1.3-1.71-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.45.11-3.03 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.18-1.18 3.18-1.18.63 1.58.23 2.74.11 3.03.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.4-5.25 5.69.42.36.79 1.08.79 2.18v3.23c0 .3.21.66.79.55A11.52 11.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z"/></svg>}
              label="GitHub" value="github.com/mearegteferi" href="https://github.com/mearegteferi"
            />

            {/* Location */}
            <div className={`flex items-center gap-3 px-4 py-3 rounded-xl ${locBg} border ${border} ${locC} text-sm`}>
              <span className="text-base">📍</span>
              Addis Ababa, Ethiopia · Open to remote
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3">
            <div className={`card-hover rounded-xl ${cardBg} border ${border} p-7 shadow-xl ${isDark ? 'shadow-black/20' : 'shadow-gray-200/60'}`}>
              <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FormField label="Your Name" name="from_name" placeholder="John Doe" isDark={isDark} inputBg={inputBg} border={border} labelC={labelC} inputC={inputC} />
                  <FormField label="Email" name="from_email" type="email" placeholder="john@example.com" isDark={isDark} inputBg={inputBg} border={border} labelC={labelC} inputC={inputC} />
                </div>
                <FormField label="Subject" name="subject" placeholder="Project inquiry / Job opportunity" isDark={isDark} inputBg={inputBg} border={border} labelC={labelC} inputC={inputC} />
                <div className="flex flex-col gap-1.5">
                  <label className={`text-xs font-semibold uppercase tracking-wider ${labelC}`}>Message</label>
                  <textarea name="message" required rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    className={`w-full ${inputBg} border ${border} rounded-lg px-4 py-3 text-sm ${inputC} focus:outline-none focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/30 transition-all duration-200 resize-none`}
                  />
                </div>
                <button type="submit" disabled={status === 'sending'}
                  className={`w-full py-3 rounded-lg text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                    status === 'sent'    ? 'bg-emerald-600 text-white' :
                    status === 'error'   ? 'bg-red-600/80 text-white' :
                    'bg-indigo-600 text-white hover:bg-indigo-500 shadow-lg shadow-indigo-600/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed'
                  }`}
                >
                  {status === 'sending' && <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/></svg>}
                  {status === 'idle'    && 'Send Message'}
                  {status === 'sending' && 'Sending…'}
                  {status === 'sent'    && '✓ Message Sent!'}
                  {status === 'error'   && '✕ Failed — Try Again'}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

const SectionLabel: React.FC<{ text: string; centered?: boolean }> = ({ text, centered }) => (
  <div className={`flex items-center gap-3 ${centered ? 'justify-center' : ''}`}>
    <div className="h-px w-8 bg-gradient-to-r from-indigo-500 to-violet-500" />
    <span className="text-indigo-400 text-xs font-bold uppercase tracking-widest">{text}</span>
    {centered && <div className="h-px w-8 bg-gradient-to-l from-indigo-500 to-violet-500" />}
  </div>
);

const ContactCard: React.FC<{
  icon: React.ReactNode; label: string; value: string; href: string;
  isDark: boolean; cardBg: string; border: string; labelC: string;
}> = ({ icon, label, value, href, isDark, cardBg, border, labelC }) => (
  <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
    className={`card-hover flex items-center gap-4 px-4 py-3.5 rounded-xl ${cardBg} border ${border} hover:border-indigo-500/40 group transition-all duration-200`}>
    <div className="w-10 h-10 rounded-lg bg-indigo-500/15 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500/25 transition-colors shrink-0">
      {icon}
    </div>
    <div className="min-w-0">
      <p className={`text-xs uppercase tracking-wider font-semibold ${labelC}`}>{label}</p>
      <p className={`text-sm font-medium mt-0.5 truncate group-hover:text-indigo-400 transition-colors ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>{value}</p>
    </div>
    <span className={`ml-auto text-sm group-hover:text-indigo-400 transition-colors ${isDark ? 'text-gray-600' : 'text-gray-300'}`}>↗</span>
  </a>
);

const FormField: React.FC<{
  label: string; name: string; placeholder: string; type?: string;
  isDark: boolean; inputBg: string; border: string; labelC: string; inputC: string;
}> = ({ label, name, placeholder, type = 'text', inputBg, border, labelC, inputC }) => (
  <div className="flex flex-col gap-1.5">
    <label className={`text-xs font-semibold uppercase tracking-wider ${labelC}`}>{label}</label>
    <input type={type} name={name} required placeholder={placeholder}
      className={`w-full ${inputBg} border ${border} rounded-lg px-4 py-3 text-sm ${inputC} focus:outline-none focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/30 transition-all duration-200`}
    />
  </div>
);

export default Contact;
