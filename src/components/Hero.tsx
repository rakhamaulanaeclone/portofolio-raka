import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';
import { MdDownload } from 'react-icons/md';

export default function Hero() {
  return (
    <section id="about" className="min-h-screen px-4 flex items-center">
      <div className="max-w-6xl mx-auto w-full py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-20">

          {/* Left Side: Profile Card */}
          <div className="w-full md:w-5/12 flex flex-col items-center text-center">
            {/* Floating profile circle with dashed ring */}
            <div className="relative w-80 h-80 mb-10">
              {/* Outer dashed circle ring */}
              <div className="absolute inset-0 border-2 border-dashed border-blue-300/40 rounded-full animate-[spin_12s_linear_infinite]"></div>
              {/* Inner white circle as profile image area */}
              <div className="absolute inset-4 bg-white rounded-full shadow-2xl flex items-center justify-center overflow-hidden border-4 border-white">
                {/* Placeholder for profile photo */}
                <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-50 flex items-center justify-center">
                  <span className="text-slate-300 text-sm font-medium">Photo</span>
                </div>
              </div>
            </div>

            {/* Name */}
            <h1 className="text-3xl font-bold text-slate-900 mb-3">Sayyidhina Raka Maulana</h1>

            {/* Roles */}
            <p className="text-sm font-semibold text-cyan-500 mb-8 tracking-wide">
              AI Engineer <span className="text-slate-300 mx-1.5">|</span> Software Developer <span className="text-slate-300 mx-1.5">|</span> Mobile Developer
            </p>

            {/* Social Icons */}
            <div className="flex space-x-3 mb-6">
              {[
                { icon: <FaGithub size={17} />, href: '#' },
                { icon: <FaLinkedin size={17} />, href: '#' },
                { icon: <FaEnvelope size={17} />, href: '#' },
                { icon: <FaInstagram size={17} />, href: '#' },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="w-11 h-11 rounded-full bg-white shadow-sm border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:border-slate-400 hover:shadow-md transition-all duration-200"
                >
                  {item.icon}
                </a>
              ))}
            </div>

            {/* Location */}
            <div className="flex items-center space-x-2 text-slate-400 text-sm">
              <FaMapMarkerAlt size={13} />
              <span>Surabaya, Indonesia</span>
            </div>
          </div>

          {/* Right Side: About Me Text */}
          <div className="w-full md:w-7/12">
            <h2 className="text-6xl font-extrabold text-slate-900 tracking-tight mb-10 uppercase">About Me</h2>
            <p className="text-slate-600 leading-relaxed mb-10 text-lg">
              A dedicated <strong className="text-slate-900">software engineer</strong> from{' '}
              <strong className="text-slate-900">Politeknik Elektronika Negeri Surabaya (PENS)</strong> with{' '}
              <strong className="text-slate-900">3+ years of experience</strong> specializing in{' '}
              <strong className="text-slate-900">web development</strong> and{' '}
              <strong className="text-slate-900">mobile applications</strong>. With experience leading
              development teams as a <strong className="text-slate-900">Product Owner</strong>, I bridge
              the gap between cutting-edge technology and practical real-world solutions using modern
              frameworks like <strong className="text-slate-900">Next.js</strong>,{' '}
              <strong className="text-slate-900">React</strong>, and{' '}
              <strong className="text-slate-900">Node.js</strong>.
            </p>

            <button className="flex items-center space-x-2 bg-slate-900 hover:bg-slate-700 text-white px-8 py-4 rounded-xl text-sm font-semibold transition-colors shadow-md hover:shadow-lg">
              <MdDownload size={20} />
              <span>Download CV</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
