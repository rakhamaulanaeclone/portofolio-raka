import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      label: 'GitHub Profile',
      icon: <FaGithub size={15} />,
      href: 'https://github.com/rakhamaulanaeclone',
      isExternal: true,
    },
    {
      label: 'LinkedIn Profile',
      icon: <FaLinkedin size={15} />,
      href: 'https://www.linkedin.com/in/sayyidhina-raka-maulana-89a402375',
      isExternal: true,
    },
    {
      label: 'Send Email',
      icon: <FaEnvelope size={15} />,
      href: 'mailto:sayyidhinarakha@gmail.com?subject=Collaboration%20Opportunity',
      isExternal: false,
    },
    {
      label: 'Instagram Profile',
      icon: <FaInstagram size={15} />,
      href: 'https://www.instagram.com/r4kha_capon?stkn=MXRnaGJrYmMwb2Ftcw==',
      isExternal: true,
    },
  ];

  return (
    <footer id="contact" className="bg-white border-t border-slate-200/60 py-10 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Deskripsi Teks - Tanpa max-width ketat supaya muat 2 baris pas */}
        <div className="text-center md:text-left flex-1 min-w-0">
          <h3 className="text-base font-semibold text-slate-700 mb-1">Let's Collaborate!</h3>
          <p className="text-[clamp(8px,2.2vw,12px)] sm:text-xs text-slate-400 whitespace-nowrap">
            I'm currently open to new opportunities in software development and innovative tech solutions. Whether you're looking for a full-stack developer,
          </p>
          <p className="text-[clamp(8px,2.2vw,12px)] sm:text-xs text-slate-400 whitespace-nowrap">
            Mobile Developer & Machine Learning Developer. I'd love to hear from you.
          </p>
        </div>

        {/* Teks CONTACT & Ikon Sosial Media */}
        <div className="flex flex-col items-center justify-center gap-2">
          <span className="text-xs font-semibold text-slate-500 tracking-wider text-center">
            Contact Me
          </span>
          <div className="flex space-x-3">
            {socialLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                aria-label={item.label}
                {...(item.isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="w-9 h-9 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:border-slate-400 transition-all"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}