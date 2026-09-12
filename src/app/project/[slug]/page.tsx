import Link from 'next/link';
import { FiGithub, FiArrowLeft, FiCheck } from 'react-icons/fi';

const projectsData: Record<string, any> = {
  'safestreet-vision': {
    category: "AI/ML • COMPUTER VISION",
    title: "SafeStreet Vision - Real-time Object Detection",
    appDisplayImage: "/safestreet-vision/app-display.png",
    interfaceFocusTitle: "Real-Time Inference",
    interfaceFocusDesc: "Access webcam directly from the browser with bilingual support (EN/ID) and dynamic bounding box labels.",
    performanceTitle: "Optimized ONNX Model",
    performanceDesc: "Exported YOLOv8 model to ONNX for fast and efficient inference on the FastAPI backend.",
    productEvidenceImage: "/safestreet-vision/metrics-dashboard.png",
    primaryRole: "Machine Learning Engineer",
    additionalScope: "Backend (FastAPI) & Frontend",
    collaboration: "Solo Portfolio Project",
    status: "Completed • V1.2",
    contextChallenge: "SafeStreet Vision is an end-to-end machine learning portfolio project designed to perform real-time object detection for road damage and motorcycle helmet usage. The primary challenge was addressing thin and low-contrast crack geometry, handling domain variation across multiple source datasets, and combining distinct tasks (road anomaly vs helmet detection) into a single efficient model.",
    processApproach: "Acting as the Machine Learning Engineer, I designed a comprehensive data pipeline to merge over 13,000 images and 35,000 annotations from various sources. I utilized YOLOv8 for model training, followed by ONNX export for optimized inference. A FastAPI backend was built to handle image and video-frame inference, seamlessly integrated with a Next.js frontend via Docker Compose.",
    resultImpact: "The model achieved an mAP@50 of 0.802 on the validation set and 0.789 on the test set across 9 classes. The system delivers rapid predictions with a max confidence delta of 0.0056 and box coordinate delta of 1.49px between PyTorch and ONNX, ensuring reliable real-time performance on deployed environments.",
    keyHighlights: [
      { title: "End-to-End CV Pipeline", desc: "Built a complete pipeline from dataset engineering and merging to YOLOv8 training and ONNX export." },
      { title: "Optimized Inference", desc: "Exported PyTorch model to ONNX, verifying robust performance and low deviation for production deployment." },
      { title: "Containerized Architecture", desc: "Orchestrated FastAPI backend and Next.js frontend using Docker Compose for seamless deployment." }
    ],
    technologies: ['Python', 'YOLOv8', 'FastAPI', 'ONNX', 'Next.js', 'Docker', 'OpenCV', 'PyTorch']
  },
  'lokalkeren': {
    category: "WEB APP • E-COMMERCE",
    title: "LokalKeren - Platform Direktori & E-commerce UMKM",
    appDisplayImage: "/lokalkeren/app-display.png",
    interfaceFocusTitle: "Discovery Cerdas AI",
    interfaceFocusDesc: "Pencarian cerdas dan filter real-time dengan rekomendasi AI kontekstual untuk membantu menemukan UMKM terdekat.",
    performanceTitle: "Full-Stack E-Commerce",
    performanceDesc: "Alur pesanan end-to-end terintegrasi dengan database PostgreSQL dan dashboard analytics untuk pengusaha UMKM.",
    productEvidenceImage: "/lokalkeren/metrics-dashboard.png",
    primaryRole: "Backend & Frontend Dev",
    additionalScope: "Scrum Master",
    collaboration: "Tim (Web In Action 2025)",
    status: "Completed",
    contextChallenge: "LokalKeren lahir untuk mengatasi visibilitas UMKM yang rendah, direktori statis yang tidak interaktif (seperti buku telepon digital), dan kesenjangan pengalaman pengguna modern yang kini membutuhkan rekomendasi cerdas serta fasilitas transaksi online terintegrasi dalam satu platform.",
    processApproach: "Kami mengubah direktori statis menjadi platform e-commerce dua sisi (B2C & B2B) secara end-to-end. Dibangun menggunakan Next.js App Router dan Prisma ORM, kami mengintegrasikan Gemini AI untuk asisten cerdas dan ringkasan ulasan, serta mengimplementasikan alur transaksi nyata ke database PostgreSQL yang dilengkapi sistem autentikasi hybrid.",
    resultImpact: "Platform ini kini memberikan pengalaman discovery cerdas (filter lokasi & jam operasional), keranjang belanja persisten dengan Zustand, checkout canggih dengan peta Leaflet, hingga Dashboard UMKM yang menampilkan analitik bisnis (pendapatan, produk terlaris) dan notifikasi real-time.",
    keyHighlights: [
      { title: "AI-Powered Discovery", desc: "Integrasi Gemini AI untuk rekomendasi personal, asisten chat kontekstual (RAG), dan ringkasan sentimen ulasan secara otomatis." },
      { title: "Full-Stack E-commerce Flow", desc: "Keranjang belanja persisten dengan Zustand, transaksi nyata terstruktur di PostgreSQL via Prisma, dan sistem pelacakan rute (Maps)." },
      { title: "Role-Based Dashboard", desc: "Autentikasi terpadu untuk pelanggan dan pengusaha dengan analitik bisnis (Recharts), manajemen pesanan real-time, dan CRUD produk." }
    ],
    technologies: ['Next.js 14', 'React', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'Gemini AI', 'Zustand']
  },
  'peminjaman-ruangan': {
    category: "WEB APP • MANAGEMENT SYSTEM",
    title: "Peminjaman Ruangan - Campus Space Reservation",
    appDisplayImage: "/peminjaman-ruangan/app-display.png",
    interfaceFocusTitle: "Smart Booking System",
    interfaceFocusDesc: "Validasi ketersediaan dan bentrokan jadwal secara cerdas untuk mencegah overlapping pemesanan ruangan.",
    performanceTitle: "Robust Architecture",
    performanceDesc: "Integrasi API terstruktur antara frontend React + Vite dengan backend ASP.NET Core dan PostgreSQL.",
    productEvidenceImage: "/peminjaman-ruangan/metrics-dashboard.png",
    primaryRole: "Backend & Frontend Dev",
    additionalScope: "API Alignment & Auth",
    collaboration: "Tim Proyek Akademik",
    status: "Completed",
    contextChallenge: "Proses peminjaman ruangan kampus membutuhkan validasi jadwal yang ketat, manajemen role pengguna, approval admin, dan sistem penyimpanan riwayat data yang solid agar tidak mudah hilang.",
    processApproach: "Membangun API menggunakan ASP.NET Core 10.0 dan Entity Framework Core, berpasangan dengan React + Vite di frontend. Saya menyelaraskan UserRole dan BookingStatus, menghubungkan autentikasi, serta mendukung API dengan validasi DTO, Swagger, CORS, dan endpoint approval status.",
    resultImpact: "Terciptanya Smart Booking System yang mencegah tabrakan jadwal dengan validasi waktu real-time. Keamanan dan integritas data (Data Safety) dipastikan dengan implementasi fitur Soft Delete pada PostgreSQL untuk menjaga rekam jejak audit peminjaman ruangan.",
    keyHighlights: [
      { title: "Smart Booking System", desc: "Validasi otomatis waktu mulai dan selesai, serta pencegahan tabrakan peminjaman di slot waktu yang sama (Availability Check)." },
      { title: "Data Safety (Soft Delete)", desc: "Mekanisme API DELETE yang hanya mengatur flag is_deleted = true tanpa menghapus baris di database, sehingga riwayat audit tetap utuh." },
      { title: "Robust Tech Stack", desc: "Arsitektur frontend React + Vite yang terhubung secara mulus ke API ASP.NET Core dan PostgreSQL via Entity Framework." }
    ],
    technologies: ['React', 'Vite', 'ASP.NET Core', 'C#', 'Entity Framework', 'PostgreSQL', 'Swagger']
  }
};

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const project = projectsData[slug];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-slate-900">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Link href="/" className="text-blue-500 hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link href="/#projects" className="inline-flex items-center text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors">
            <FiArrowLeft className="mr-2" /> Back to Projects
          </Link>
        </div>

        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-3">
            {project.category}
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
            {project.title}
          </h1>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column - Visuals */}
          <div className="lg:col-span-7 flex flex-col gap-12">
            
            <section>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-2">Application Displays</h2>
              <p className="text-sm text-slate-500 font-medium mb-6">High-fidelity web client showcase & interface walkthrough</p>
              
              {/* Image Placeholder */}
              <div className="w-full aspect-[4/3] bg-slate-50 rounded-2xl border border-slate-200/60 shadow-sm flex items-center justify-center p-4">
                <span className="text-slate-400 font-medium text-sm">{project.appDisplayImage}</span>
              </div>
            </section>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-7 rounded-2xl border border-slate-200/60 shadow-sm">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">INTERFACE FOCUS</p>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{project.interfaceFocusTitle}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{project.interfaceFocusDesc}</p>
              </div>
              <div className="p-7 rounded-2xl border border-slate-200/60 shadow-sm">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">PERFORMANCE</p>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{project.performanceTitle}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{project.performanceDesc}</p>
              </div>
            </div>

            <section>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-2">Product Evidence</h2>
              <p className="text-sm text-slate-500 font-medium mb-6">Comprehensive detection metrics & deployment interface</p>
              
              {/* Image Placeholder */}
              <div className="w-full aspect-[4/3] bg-slate-50 rounded-2xl border border-slate-200/60 shadow-sm flex items-center justify-center p-4">
                <span className="text-slate-400 font-medium text-sm">{project.productEvidenceImage}</span>
              </div>
            </section>
          </div>

          {/* Right Column - Details */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            
            {/* Info Table */}
            <div className="border-t border-slate-200 pt-8">
              <dl className="divide-y divide-slate-100">
                <div className="py-4 flex justify-between">
                  <dt className="text-xs font-bold tracking-wider text-slate-400 uppercase">PRIMARY ROLE</dt>
                  <dd className="text-sm font-semibold text-slate-900 text-right">{project.primaryRole}</dd>
                </div>
                <div className="py-4 flex justify-between">
                  <dt className="text-xs font-bold tracking-wider text-slate-400 uppercase">ADDITIONAL SCOPE</dt>
                  <dd className="text-sm font-semibold text-slate-900 text-right">{project.additionalScope}</dd>
                </div>
                <div className="py-4 flex justify-between">
                  <dt className="text-xs font-bold tracking-wider text-slate-400 uppercase">COLLABORATION</dt>
                  <dd className="text-sm font-semibold text-slate-900 text-right">{project.collaboration}</dd>
                </div>
                <div className="py-4 flex justify-between">
                  <dt className="text-xs font-bold tracking-wider text-slate-400 uppercase">STATUS</dt>
                  <dd className="text-sm font-semibold text-slate-900 text-right">{project.status}</dd>
                </div>
              </dl>
            </div>

            {/* Project Overview */}
            <section className="border-t border-slate-200 pt-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-extrabold text-slate-900">Project Overview</h2>
                <span className="px-3 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold tracking-wider uppercase rounded-full">Case Study</span>
              </div>
              
              <div className="space-y-8 text-sm text-slate-500 leading-relaxed">
                <div>
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-3">CONTEXT & CHALLENGE</h3>
                  <p>{project.contextChallenge}</p>
                </div>

                <div>
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-3">PROCESS & APPROACH</h3>
                  <p>{project.processApproach}</p>
                </div>

                <div>
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-3">RESULT & IMPACT</h3>
                  <p>{project.resultImpact}</p>
                </div>
                
                <div>
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-4">KEY ENGINEERING HIGHLIGHTS</h3>
                  <ul className="space-y-4">
                    {project.keyHighlights.map((highlight: any, idx: number) => (
                      <li key={idx} className="flex items-start">
                        <FiCheck className="text-blue-600 mt-1 mr-3 flex-shrink-0" size={16} />
                        <span><strong className="text-slate-900 font-semibold">{highlight.title}:</strong> {highlight.desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Technologies */}
            <section className="border-t border-slate-200 pt-8">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-5">TECHNOLOGIES & TOOLS</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech: string) => (
                  <span key={tech} className="px-3 py-1.5 border border-slate-200 rounded-md text-xs font-bold text-slate-600 bg-white">
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* Action */}
            <section className="pt-2">
              <a href="#" className="w-full flex items-center justify-center space-x-2 bg-white border border-slate-200 hover:border-slate-400 hover:bg-slate-50 text-slate-800 py-3 rounded-xl text-sm font-bold transition-all shadow-sm">
                <FiGithub size={18} />
                <span>Source Code</span>
              </a>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
