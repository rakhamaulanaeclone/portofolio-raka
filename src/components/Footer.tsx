import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-white border-t border-slate-200/60 py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        <div className="text-center md:text-left">
          <h3 className="text-base font-semibold text-slate-700 mb-1">Sayyidhina Raka Maulana</h3>
          <p className="text-xs text-slate-400">
            © {currentYear} Sayyidhina Raka Maulana • Software Developer. All rights reserved.
          </p>
        </div>

        <div className="flex space-x-3">
          {[
            { icon: <FaGithub size={15} />, href: '#' },
            { icon: <FaLinkedin size={15} />, href: '#' },
            { icon: <FaEnvelope size={15} />, href: '#' },
            { icon: <FaInstagram size={15} />, href: '#' },
          ].map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="w-9 h-9 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:border-slate-400 transition-all"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
