"use client";
import { useState } from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const filters = ['All', 'AI/ML', 'Mobile', 'Website'];

  const projects = [
    {
      title: "SafeStreet Vision",
      subtitle: "Road Damage & Helmet Detection System",
      description: "Deteksi AI/ML road damage and helmet detection using YOLOv8 untuk otomasi pengawasan keselamatan jalan raya secara real-time.",
      tags: ["Python", "YOLOv8", "Ultralytics", "FastAPI"],
      category: ["AI/ML", "Website"],
    },
    {
      title: "LokalKeren",
      subtitle: "SaaS Directory & E-Commerce Platform for MSMEs",
      description: "Platform direktori dan e-commerce UMKM dengan discovery cerdas dan AI untuk meningkatkan visibilitas produk lokal di pasar nasional.",
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      category: ["Website"],
    },
    {
      title: "Peminjaman Ruangan",
      subtitle: "Campus Space Reservation & Management Web App",
      description: "Sistem booking ruangan kampus dengan frontend React dan backend ASP.NET Core yang mengotomasi penjadwalan serta verifikasi izin ruangan.",
      tags: ["React", "TypeScript", "Vite", "ASP.NET Core"],
      category: ["Website"],
    },
    {
      title: "TalentHub Mobile",
      subtitle: "Cross-Platform Mobile Application for Talent Matching",
      description: "Aplikasi mobile TalentHub untuk pengalaman pengguna yang lebih dekat, interaktif, dan mulus dalam pencarian serta pengelolaan talenta industri.",
      tags: ["Flutter", "Dart", "Mobile UI", "Interaction Design"],
      category: ["Mobile"],
    }
  ];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category.includes(filter));

  return (
    <section id="projects" className="py-24 px-4 bg-silver-solid">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-3">Featured Projects</h2>
          <p className="text-slate-400 font-medium mb-10">Innovative solutions combining AI, web technologies, and robotics</p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-7 py-2 rounded-full text-sm font-semibold transition-all ${filter === f
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-white text-slate-500 border border-slate-200 hover:border-slate-400 hover:text-slate-700'
                  }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {filteredProjects.map((project, idx) => (
            <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200/70 hover:shadow-lg transition-all flex flex-col group">

              {/* Empty dark placeholder for project image */}
              <div className="w-full h-52 bg-slate-800 relative flex items-end p-4">
                <span className="text-slate-600 text-xs font-medium">Project Preview</span>
              </div>

              <div className="p-7 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-slate-700 transition-colors">{project.title}</h3>
                <p className="text-sm font-medium text-slate-400 mb-3">{project.subtitle}</p>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-7">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-3 py-1 bg-slate-50 border border-slate-200 text-slate-600 text-xs font-medium rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-col gap-3 mt-auto">
                  <button className="w-full flex items-center justify-center space-x-2 bg-slate-900 hover:bg-slate-700 text-white py-3 rounded-xl text-sm font-semibold transition-colors">
                    <span>View Project</span>
                    <FiExternalLink size={14} />
                  </button>
                  <button className="w-full flex items-center justify-center space-x-2 bg-white border border-slate-200 hover:border-slate-400 text-slate-600 py-3 rounded-xl text-sm font-semibold transition-colors">
                    <FiGithub size={14} />
                    <span>Source Code</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
