import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';
import { MdDownload } from 'react-icons/md';
import ParticleBackground from './animation/ParticleBackground';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="about" className="relative min-h-screen px-4 sm:px-8 flex items-center overflow-hidden bg-white py-16 lg:py-24">
      <ParticleBackground withMask={true} />
      <div className="relative z-10 w-full max-w-[1500px] px-4 md:px-12 xl:px-20 mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 xl:gap-24">

          {/* Left Side: Profile Card */}
          <div className="w-full lg:w-5/12 flex flex-col items-center text-center">
            {/* Floating profile circle with dashed ring */}
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 xl:w-[380px] xl:h-[380px] mb-8 lg:mb-10 shrink-0">
              {/* Outer dashed circle ring */}
              <div className="absolute inset-0 border-2 border-dashed border-blue-300/40 rounded-full animate-[spin_12s_linear_infinite]"></div>
              {/* Inner white circle as profile image area */}
              <div className="absolute inset-4 bg-white rounded-full shadow-2xl flex items-center justify-center overflow-hidden border-4 border-white">
                {/* Placeholder for profile photo */}
                <Image src="/image/raka.jpeg" alt="Raka Maulana" fill className="object-cover object-top" priority />
              </div>
            </div>

            {/* Name */}
            <h1 className="text-xl sm:text-2xl xl:text-3xl 2xl:text-4xl font-extrabold text-slate-900 mb-3">Sayyidhina Raka Maulana</h1>

            {/* Roles */}
            <p className="text-xs sm:text-sm xl:text-base font-semibold text-slate-400 mb-6 lg:mb-8 tracking-wide">
              AI Engineer <span className="text-slate-300 mx-1.5">|</span> Software Developer <span className="text-slate-300 mx-1.5">|</span> Mobile Developer
            </p>

            {/* Social Icons */}
            <div className="flex space-x-3 mb-6">
              {[
                {
                  label: 'GitHub Profile',
                  icon: <FaGithub size={18} />,
                  href: 'https://github.com/rakhamaulanaeclone',
                  isExternal: true
                },
                {
                  label: 'LinkedIn Profile',
                  icon: <FaLinkedin size={18} />,
                  href: 'https://www.linkedin.com/in/sayyidhina-raka-maulana-89a402375',
                  isExternal: true
                },
                {
                  label: 'Send Email',
                  icon: <FaEnvelope size={18} />,
                  href: 'mailto:sayyidhinarakha@gmail.com?subject=Collaboration%20Opportunity',
                  isExternal: false
                },
                {
                  label: 'Instagram Profile',
                  icon: <FaInstagram size={18} />,
                  href: 'https://www.instagram.com/r4kha_capon?stkn=MXRnaGJrYmMwb2Ftcw==',
                  isExternal: true
                },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  aria-label={item.label}
                  {...(item.isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="w-11 h-11 xl:w-12 xl:h-12 rounded-full bg-white shadow-sm border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:border-slate-400 hover:shadow-md transition-all duration-200"
                >
                  {item.icon}
                </a>
              ))}
            </div>

            {/* Location */}
            <div className="flex items-center space-x-2 text-slate-400 text-sm xl:text-base">
              <FaMapMarkerAlt size={14} />
              <span>Surabaya, Indonesia</span>
            </div>
          </div>

          {/* Right Side: About Me Text */}
          <div className="w-full lg:w-7/12">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold text-slate-900 tracking-tight mb-6 lg:mb-10 uppercase">About Me</h2>
            <p className="text-slate-600 leading-relaxed mb-8 lg:mb-10 text-base sm:text-lg xl:text-xl 2xl:text-2xl">
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

            <button className="flex items-center space-x-2 bg-slate-900 hover:bg-slate-700 text-white px-8 py-4 xl:px-10 xl:py-5 rounded-xl text-sm xl:text-base font-semibold transition-colors shadow-md hover:shadow-lg">
              <MdDownload size={22} />
              <span>Download CV</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
