"use client";
import { useState } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import Link from 'next/link';
import ScrollReveal from './ScrollReveal';

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const filters = ['All', 'AI/ML', 'Mobile', 'Website'];

  const projects = [
    {
      title: "SafeStreet",
      slug: "safestreet-vision",
      subtitle: "Road Damage Detection",
      typeLabel: "COMPUTER VISION",
      role: "AI/ML Engineer",
      description: "An end-to-end computer vision system designed to monitor road infrastructure for safety in real-time.",
      tags: ["Python", "YOLOv8", "FastAPI", "ONNX", "OpenCV", "PyTorch"],
      category: ["AI/ML", "Website"],
    },
    {
      title: "LokalKeren",
      slug: "lokalkeren",
      subtitle: "Platform Direktori & E-commerce",
      typeLabel: "ECOMMERCE PLATFORM",
      role: "Full Stack Developer",
      description: "More than just a directory. A dynamic e-commerce ecosystem for discovering, transacting with, and managing local small businesses (UMKM).",
      tags: ["React", "Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
      category: ["Website"],
    },
    {
      title: "RoomBook",
      slug: "peminjaman-ruangan",
      subtitle: "Sistem Peminjaman Ruangan",
      typeLabel: "MANAGEMENT SYSTEM",
      role: "Backend Developer",
      description: "Aplikasi manajemen ruangan dengan Smart Booking System, integrasi API React & ASP.NET Core, dan mekanisme keamanan data Soft Delete.",
      tags: ["React", "ASP.NET Core", "PostgreSQL"],
      category: ["Website"],
    },
    {
      title: "TalentHub",
      slug: "talenthub-mobile",
      subtitle: "Mobile Applicant Tracking System",
      typeLabel: "RECRUITMENT PLATFORM",
      role: "Mobile Developer",
      description: "A mobile-first Applicant Tracking System (ATS) that streamlines the hiring process by seamlessly connecting candidate job discovery with comprehensive HR vacancy management.",
      tags: ["Flutter", "Dart", "REST API"],
      category: ["Mobile"],
    }
  ];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category.includes(filter));

  return (
    // Background diatur mirip abu-abu dengan motif kertas grid halus (opsional, diwakili warna solid dsini)
    <section id="projects" className="py-24 px-4 bg-[#f8f9fa] min-h-screen">
      <div className="w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Featured Projects
          </h2>
          <p className="text-slate-500 font-medium mb-12">
            Innovative solutions combining AI, web technologies, and robotics
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${filter === f
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white text-slate-500 hover:text-slate-900 shadow-sm'
                  }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {filteredProjects.map((project, idx) => (
            <ScrollReveal
              key={idx}
              delay={idx * 110}
              direction="up"
              distance={26}
              className="bg-[#edf2f7] rounded-3xl p-8 flex flex-col gap-6 hover:shadow-lg transition-all duration-300 group border border-slate-200/50"
            >

              {/* Card Header (Number & Type Label) */}
              <div className="flex justify-between items-start mb-2">
                <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold shadow-sm">
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500 max-w-[120px] text-right leading-relaxed">
                  {project.typeLabel}
                </span>
              </div>

              {/* Title & Subtitle */}
              <div>
                <h3 className="text-4xl font-bold text-slate-900 tracking-tight mb-2">
                  {project.title}
                </h3>
                <p className="text-lg text-slate-600 font-medium">
                  {project.subtitle}
                </p>
              </div>

              {/* Role Section */}
              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-1">
                  My Role
                </p>
                <p className="text-sm font-semibold text-slate-700">
                  {project.role}
                </p>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-500 leading-relaxed font-medium">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-4 py-1.5 rounded-full border border-slate-300 bg-transparent text-slate-600 text-xs font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Footer / Link */}
              <div className="mt-auto pt-8">
                <Link
                  href={`/project/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-slate-900 font-bold text-sm group-hover:text-black transition-colors"
                >
                  <span className="border-b border-slate-900 pb-0.5">View project</span>
                  <FiArrowUpRight
                    size={18}
                    className="transform transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </div>

            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}