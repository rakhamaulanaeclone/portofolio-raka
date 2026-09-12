import { FaCalendarAlt, FaMapMarkerAlt, FaGraduationCap } from 'react-icons/fa';
import { MdOutlineSlowMotionVideo } from 'react-icons/md';
import ParticleBackground from './animation/ParticleBackground';

export default function Experience() {
  const experiences = [
    {
      title: "Environmental AI Researcher",
      company: "Politeknik Elektronika Negeri Surabaya",
      dateRange: "August 2025 - Present",
      location: "Surabaya, Indonesia",
      icon: <FaGraduationCap className="text-violet-600" size={22} />,
      iconBg: "bg-violet-50 border-violet-200",
      summary: "Conducting research on AI applications for environmental monitoring, specifically mangrove health assessment using multispectral imagery and water quality data.",
      points: [
        "Conduct monthly collection of water-quality measurements and multispectral drone imagery",
        "Research and build an AI pipeline for mangrove health assessment from the collected data",
        "Apply computer vision, time-series forecasting, and LLM-based summarization (RAG)"
      ],
      tags: ["Computer Vision", "Time-Series Forecasting", "LLM", "RAG", "Drone Imagery", "Environmental Data"]
    },
    {
      title: "SafeStreet Vision",
      company: "Real-time Object Detection",
      dateRange: "May 2026 - Agustus",
      location: "Surabaya, Indonesia",
      icon: <MdOutlineSlowMotionVideo className="text-violet-500" size={22} />,
      iconBg: "bg-violet-50 border-violet-200",
      summary: "Pengembangan pipeline machine learning deteksi objek end-to-end berbasis YOLOv8 untuk pemantauan keselamatan jalan raya secara presisi.",
      points: [
        "Merancang arsitektur model YOLOv8 yang dilatih dengan dataset lebih dari 13.000 citra kondisi jalanan realistis dan beragam skenario cuaca.",
        "Mengevaluasi performa model dengan hasil mAP@50 > 0.90 serta mengoptimalkan latensi menggunakan quantisasi format ONNX.",
        "Mendeploy inferensi model via asynchronous backend FastAPI dan kontainerisasi otomatis menggunakan Docker Compose."
      ],
      tags: ["Computer Vision", "MLOps", "YOLOv8", "FastAPI", "Docker", "ONNX"]
    }
  ];

return (
    // 2. TAMBAHKAN 'relative', 'overflow-hidden', dan 'bg-white' pada tag section
    <section id="experience" className="relative py-24 px-4 overflow-hidden bg-white">
      
      {/* 3. PANGGIL KOMPONEN ANIMASI DI SINI */}
      <ParticleBackground />

      {/* 4. TAMBAHKAN 'relative z-10' pada div pembungkus konten agar konten ada di atas animasi */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-3">Professional Experience</h2>
          <p className="text-slate-400 font-medium">Building impactful solutions across AI, robotics, and web development</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {experiences.map((exp, idx) => (
            <div key={idx} className="flex flex-col items-center">
              {/* Top icon badge */}
              <div className={`w-12 h-12 rounded-full border-2 ${exp.iconBg} flex items-center justify-center mb-4 shadow-sm`}>
                {exp.icon}
              </div>

              {/* Card */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200/70 hover:shadow-md transition-shadow w-full">
                <h3 className="text-xl font-bold text-slate-900 mb-1">{exp.title}</h3>
                <p className="text-sm font-semibold text-slate-500 mb-5">{exp.company}</p>

                <div className="flex flex-wrap gap-x-8 gap-y-2 mb-5 text-xs text-slate-500">
                  <div className="flex items-center space-x-1.5">
                    <FaCalendarAlt className="text-slate-400" size={11} />
                    <span>{exp.dateRange}</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <FaMapMarkerAlt className="text-slate-400" size={11} />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed mb-5">{exp.summary}</p>

                <ul className="space-y-3 mb-8">
                  {exp.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start space-x-2.5">
                      <span className="text-slate-700 mt-0.5 flex-shrink-0 text-xs">▶</span>
                      <span className="text-slate-600 text-sm leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-3 py-1 bg-white border border-slate-200 text-slate-600 text-xs font-medium rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
