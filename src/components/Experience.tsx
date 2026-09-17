'use client';

import React, { useEffect, useRef, useState } from 'react';
import { FaCalendarAlt, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';
import ParticleBackground from './animation/ParticleBackground';
import ScrollReveal from './ScrollReveal';

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const scrollPosition = (windowHeight / 2) - rect.top;
      const totalHeight = rect.height;

      let progress = scrollPosition / totalHeight;
      progress = Math.max(0, Math.min(1, progress));

      setLineHeight(progress * 100);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const experiences = [
    {
      title: "SafeStreet Vision",
      company: "Real-time Object Detection",
      dateRange: "May 2026 - August 2026",
      location: "Surabaya, Indonesia",
      logoUrl: "/image/student.jpg",
      iconBg: "bg-white border-slate-200",
      summary: "Development of an end-to-end YOLOv8-based machine learning pipeline for object detection to identify road damage and enhance traffic safety in real-time. The model is capable of detecting various object classes, such as potholes, road cracks, and other defects.",
      points: [
        "Designing a YOLOv8 model architecture trained on a combined and cleaned dataset of over ten thousand images featuring realistic road conditions and diverse scenarios.",
        "Evaluating model performance with an mAP@50 > 0.90 and optimizing latency using ONNX format conversion.",
        "Deploying model inference via an asynchronous FastAPI backend and automated containerization using Docker Compose."
      ],
      tags: ["Computer Vision", "MLOps", "YOLOv8", "FastAPI", "Docker", "ONNX"]
    },
    {
      title: "TalentHub",
      company: "PENS Project Team (Sindika)",
      dateRange: "April 2026 - Present",
      location: "Surabaya, Indonesia",
      role: "Mobile Developer",
      logoUrl: "/image/pens.png",
      iconBg: "bg-white border-slate-200",
      summary: "TalentHub combines candidate job discovery and recruiter vacancy publishing in a mobile-first hiring platform developed through a PENS-Sindika collaboration.",
      points: [
        "Collaborated in a cross-functional team with UI/UX designers and Backend (.NET) developers to build a three-role Applicant Tracking System (ATS) ecosystem catering to Candidates, HR Recruiters, and Hiring Managers.",
        "Engineered the complete mobile frontend architecture in Flutter, implementing secure REST API integration and highly scalable application state management utilizing the BLoC pattern.",
        "Developed end-to-end core recruitment workflows, encompassing multi-step job posting forms with debounce auto-save, dynamic job search and filtering, and a comprehensive apply flow with real-time profile eligibility validation."
      ],
      tags: ["Flutter", "Dart", "BLoC", "Dio", "Secure Storage", ".NET", "PostgreSQL", "Docker"]
    },
  ];

  return (
    <section id="experience" className="relative py-24 px-4 overflow-hidden bg-white">

      <ParticleBackground withMask={true} maskType="experience" />

      <div className="relative z-10 w-full max-w-[2000px] px-4 md:px-12 mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block px-5 py-2.5 rounded-2xl bg-white/40 backdrop-blur-[2px]">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2 sm:mb-3">Professional Experience</h2>
            <p className="text-slate-400 text-xs sm:text-sm md:text-base font-medium">Building impactful solutions across AI, robotics, and web development</p>
          </div>
        </div>

        <div ref={containerRef} className="relative w-full mx-auto py-6 sm:py-10">

          {/* Garis Tengah Background - Hanya ditampilkan di md+ karena di mobile cards full width */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-slate-100 rounded-full top-0 z-0"></div>

          {/* Garis Silver Scroll */}
          <div
            className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-slate-400 rounded-full transition-all duration-150 ease-out top-0 z-10"
            style={{ height: `${lineHeight}%` }}
          ></div>

          {/* LIST PENGALAMAN */}
          <div className="flex flex-col space-y-8 sm:space-y-12">
            {experiences.map((exp, idx) => {
              const isLeftCard = idx % 2 === 0;

              return (
                <div key={idx} className="relative flex items-start w-full">

                  {/* 
                    CARD WRAPPER 
                    Menggunakan lebar calc(50% - 3rem) di desktop memastikan ujung card tidak menyentuh garis tengah.
                    Di mobile, lebar 100% penuh dengan padding nyaman.
                  */}
                  <ScrollReveal
                    className={`w-full md:w-[calc(50%-3rem)] ${isLeftCard ? 'md:mr-auto' : 'md:ml-auto'}`}
                    delay={idx * 110}
                    direction={isLeftCard ? 'left' : 'right'}
                    distance={34}
                    scale={0.95}
                    duration={600}
                  >

                    {/* LINGKARAN LOGO - Di mobile rata kiri, di desktop mengikuti posisi card */}
                    <div className={`flex justify-start ${isLeftCard ? 'md:justify-end' : 'md:justify-start'} mb-3 sm:mb-4`}>
                      <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 ${exp.iconBg} flex items-center justify-center shadow-sm bg-white relative z-20 overflow-hidden`}>
                        {exp.logoUrl ? (
                          <img src={exp.logoUrl} alt={exp.title} className="w-full h-full object-cover" />
                        ) : null}
                      </div>
                    </div>

                    {/* ISI CARD */}
                    <div className="bg-white rounded-2xl p-5 sm:p-8 shadow-sm border border-slate-200/70 hover:shadow-md transition-shadow relative z-30">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1">{exp.title}</h3>
                      <p className="text-xs sm:text-sm font-semibold text-slate-500 mb-4 sm:mb-5">{exp.company}</p>

                      <div className="flex flex-wrap gap-x-4 sm:gap-x-8 gap-y-2 mb-4 sm:mb-5 text-xs text-slate-500">
                        <div className="flex items-center space-x-1.5">
                          <FaCalendarAlt className="text-slate-400" size={11} />
                          <span>{exp.dateRange}</span>
                        </div>
                        <div className="flex items-center space-x-1.5">
                          <FaMapMarkerAlt className="text-slate-400" size={11} />
                          <span>{exp.location}</span>
                        </div>
                        {exp.role && (
                          <div className="flex items-center space-x-1.5">
                            <FaBriefcase className="text-slate-400" size={11} />
                            <span className="font-medium text-slate-600">Role: {exp.role}</span>
                          </div>
                        )}
                      </div>

                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5">{exp.summary}</p>

                      <ul className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
                        {exp.points.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start space-x-2.5">
                            <span className="text-slate-700 mt-0.5 flex-shrink-0 text-xs">▶</span>
                            <span className="text-slate-600 text-xs sm:text-sm leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {exp.tags.map((tag, tIdx) => (
                          <span key={tIdx} className="px-2.5 sm:px-3 py-1 bg-white border border-slate-200 text-slate-600 text-[11px] sm:text-xs font-medium rounded-md">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </ScrollReveal>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}