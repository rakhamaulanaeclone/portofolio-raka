import {
  SiDotnet, SiPostgresql, SiPrisma, SiMysql, SiSwagger,
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiFlutter,
  SiPytorch
} from 'react-icons/si';
import { TbApi, TbBrain, TbEye, TbBolt, TbDeviceMobile, TbLock, TbDatabase } from 'react-icons/tb';

export default function TechArsenal() {
  const categories = [
    {
      title: "Backend",
      badge: "CORE API",
      description: "Fondasi API, autentikasi, dokumentasi, dan database.",
      skills: [
        { name: "ASP.NET Core", icon: <SiDotnet className="text-purple-600" size={16} /> },
        { name: "REST API", icon: <TbApi className="text-orange-500" size={16} /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600" size={16} /> },
        { name: "JWT Auth", icon: <TbLock className="text-amber-500" size={16} /> },
        { name: "Prisma ORM", icon: <SiPrisma className="text-teal-600" size={16} /> },
        { name: "Swagger", icon: <SiSwagger className="text-green-500" size={16} /> },
      ]
    },
    {
      title: "Frontend & Mobile",
      badge: "CLIENT UI",
      description: "Membangun pengalaman web dan mobile yang cepat dan responsif.",
      skills: [
        { name: "React", icon: <SiReact className="text-cyan-400" size={16} /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" size={16} /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-slate-900" size={16} /> },
        { name: "Flutter", icon: <SiFlutter className="text-blue-500" size={16} /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-600" size={16} /> },
        { name: "Responsive", icon: <TbDeviceMobile className="text-slate-500" size={16} /> },
      ]
    },
    {
      title: "Artificial Intelligence",
      badge: "ML & VISION",
      description: "Pengembangan solusi computer vision dan machine learning.",
      skills: [
        { name: "YOLOv8", icon: <span className="text-pink-500 font-bold text-xs">YO</span> },
        { name: "Model Training", icon: <TbDatabase className="text-indigo-500" size={16} /> },
        { name: "Computer Vision", icon: <TbEye className="text-purple-500" size={16} /> },
        { name: "Inference", icon: <TbBolt className="text-yellow-500" size={16} /> },
        { name: "Dataset Processing", icon: <TbBrain className="text-pink-400" size={16} /> },
      ]
    }
  ];

  return (
    <section id="skills" className="pt-24 pb-64 px-4 bg-silver-solid">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-slate-900 tracking-tight uppercase mb-3">Tech Arsenal</h2>
          <p className="text-slate-400 tracking-[0.2em] text-sm uppercase font-medium">tools & technologies i wield</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-7 shadow-sm border border-slate-200/70 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-bold text-slate-900">{category.title}</h3>
                <span className="text-[10px] font-bold px-2.5 py-1 bg-slate-100 text-slate-500 rounded-md uppercase tracking-wider whitespace-nowrap">
                  {category.badge}
                </span>
              </div>
              <p className="text-sm text-slate-400 mb-7 leading-relaxed">{category.description}</p>

              <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="flex items-center space-x-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0"></span>
                    <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center">
                      {skill.icon}
                    </div>
                    <span className="text-sm text-slate-700 font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
