"use client";

import {
  SiNodedotjs, SiPhp, SiPython, SiC, SiCplusplus, SiDotnet,
  SiLaravel, SiFastapi, SiPostgresql, SiPrisma, SiSupabase,
  SiHtml5, SiCss, SiTypescript, SiReact, SiNextdotjs,
  SiTailwindcss, SiDart, SiFlutter, SiPytorch, SiOpencv,
  SiPandas, SiOnnx, SiDocker, SiGit
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { TbApi, TbSettings } from 'react-icons/tb';
import ScrollReveal from './ScrollReveal';

export default function TechArsenal() {
  const categories = [
    {
      title: "Backend",
      description: "Server architecture, robust APIs, data persistence, and efficient database management.",
      cols: "grid-cols-2 lg:grid-cols-3",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs className="text-green-600" size={14} /> },
        { name: "PHP", icon: <SiPhp className="text-indigo-500" size={14} /> },
        { name: "Java", icon: <FaJava className="text-orange-600" size={14} /> },
        { name: "Python", icon: <SiPython className="text-blue-500" size={14} /> },
        { name: "C", icon: <SiC className="text-blue-600" size={14} /> },
        { name: "C++", icon: <SiCplusplus className="text-blue-700" size={14} /> },
        { name: "ASP.NET Core", icon: <SiDotnet className="text-purple-600" size={14} /> },
        { name: "Laravel", icon: <SiLaravel className="text-red-500" size={14} /> },
        { name: "FastAPI", icon: <SiFastapi className="text-teal-500" size={14} /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" size={14} /> },
        { name: "Prisma ORM", icon: <SiPrisma className="text-teal-600" size={14} /> },
        { name: "Supabase", icon: <SiSupabase className="text-emerald-500" size={14} /> },
        { name: "REST API", icon: <TbApi className="text-orange-500" size={14} /> },
      ]
    },
    {
      title: "Frontend & Mobile",
      description: "Responsive web interfaces, high-performance mobile apps, and interactive user experiences.",
      cols: "grid-cols-2",
      skills: [
        { name: "HTML", icon: <SiHtml5 className="text-orange-500" size={14} /> },
        { name: "CSS", icon: <SiCss className="text-blue-500" size={14} /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-600" size={14} /> },
        { name: "React", icon: <SiReact className="text-cyan-400" size={14} /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-black" size={14} /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" size={14} /> },
        { name: "Dart", icon: <SiDart className="text-cyan-600" size={14} /> },
        { name: "Flutter", icon: <SiFlutter className="text-blue-400" size={14} /> },
      ]
    },
    {
      title: "Machine Learning & Computer Vision",
      description: "Machine learning modeling, custom computer vision solutions, and end-to-end inference pipelines.",
      cols: "grid-cols-2",
      skills: [
        { name: "PyTorch", icon: <SiPytorch className="text-orange-600" size={14} /> },
        { name: "OpenCV", icon: <SiOpencv className="text-green-500" size={14} /> },
        { name: "Pandas", icon: <SiPandas className="text-indigo-800" size={14} /> },
        { name: "YOLO", icon: <span className="text-red-500 font-bold text-[10px]">YO</span> },
        { name: "ONNX", icon: <SiOnnx className="text-blue-600" size={14} /> },
      ]
    },
    {
      title: "Infrastructure & DevOps",
      description: "Containerization, automated MLOps pipelines, and collaborative version control.",
      cols: "grid-cols-2",
      skills: [
        { name: "Docker", icon: <SiDocker className="text-blue-500" size={14} /> },
        { name: "MLOps", icon: <TbSettings className="text-teal-600" size={14} /> },
        { name: "Git", icon: <SiGit className="text-orange-500" size={14} /> },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-[#f4f7fa]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-[#0f172a] tracking-tight uppercase mb-4">Tech Arsenal</h2>
          <p className="text-slate-500 tracking-widest text-sm font-mono lowercase">tools & technologies i wield</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category, idx) => (
            <ScrollReveal key={idx} delay={idx * 70} direction="up" scale={0.95} duration={520} className="bg-[#e2e8f0] rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{category.title}</h3>
              <p className="text-sm text-slate-500 mb-8 leading-relaxed pr-4">{category.description}</p>

              <div className="border-t border-slate-300 pt-6">
                <h4 className="text-[10px] font-bold text-slate-400 tracking-[0.2em] uppercase mb-6">
                  Technologies
                </h4>
                <div className={`grid gap-y-5 gap-x-4 ${category.cols}`}>
                  {category.skills.map((skill, sIdx) => (
                    <ScrollReveal
                      key={sIdx}
                      delay={idx * 70 + 100 + sIdx * 22}
                      direction="up"
                      distance={14}
                      scale={0.98}
                      duration={220}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-slate-50 border border-slate-100 rounded flex items-center justify-center shadow-sm">
                          {skill.icon}
                        </div>
                        <span className="text-sm text-slate-700 font-medium">{skill.name}</span>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}