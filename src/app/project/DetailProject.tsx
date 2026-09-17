'use client';
import Link from 'next/link';
import { FiGithub, FiArrowLeft, FiExternalLink } from 'react-icons/fi';
import { FaGooglePlay } from 'react-icons/fa6';
import projectsData from './projectsData';
import ProjectOverview from './components/ProjectOverview';
import MediaCarousel from '../../components/MediaCarousel';

import { useRouter } from 'next/navigation';

export default function DetailProject({ slug, isModal = false }: { slug: string, isModal?: boolean }) {
  const router = useRouter();
  const project = projectsData[slug];
  const interfaceFocusLabel = project?.interfaceFocusLabel ?? "INTERFACE FOCUS";
  const additionalScopeLabel = project?.additionalScopeLabel ?? "ADDITIONAL SCOPE";
  const showAdditionalScope = !!project?.additionalScope && String(project.additionalScope).trim() !== "";

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
    <div className="min-h-screen bg-white text-slate-900 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="w-full xl:px-12 mx-auto">

        {/* Back Link */}
        <div className="mb-6 sm:mb-8">
          {isModal ? (
            <button onClick={() => router.back()} className="inline-flex items-center text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors">
              <FiArrowLeft className="mr-2" /> Back to Projects
            </button>
          ) : (
            <Link href="/#projects" className="inline-flex items-center text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors">
              <FiArrowLeft className="mr-2" /> Back to Projects
            </Link>
          )}
        </div>

        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <p className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-2 sm:mb-3">
            {project.category}
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-4 sm:mb-6 leading-tight">
            {project.title}
          </h1>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">

          {/* Left Column - Visuals */}
          <div className="lg:col-span-7 flex flex-col gap-8 sm:gap-12">

            {project.appDisplayImages && project.appDisplayImages.length > 0 && (
              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">{project.appDisplayTitle || "Application Displays"}</h2>
                <p className="text-xs sm:text-sm text-slate-500 font-medium mb-4 sm:mb-6">{project.appDisplaySubtitle || "High-fidelity mobile client showcase & interface walkthrough"}</p>
                <MediaCarousel media={project.appDisplayImages} />
              </section>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="p-5 sm:p-7 rounded-2xl border border-slate-200/60 shadow-sm">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 sm:mb-3">{interfaceFocusLabel || "INTERFACE FOCUS"}</p>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5 sm:mb-2">{project.interfaceFocusTitle}</h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{project.interfaceFocusDesc}</p>
              </div>
              <div className="p-5 sm:p-7 rounded-2xl border border-slate-200/60 shadow-sm">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 sm:mb-3">{project.performanceLabel || "PERFORMANCE"}</p>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5 sm:mb-2">{project.performanceTitle}</h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{project.performanceDesc}</p>
              </div>
            </div>

            {project.productEvidences && project.productEvidences.length > 0 && (
              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">{project.productEvidenceTitle || "Product Evidence"}</h2>
                <p className="text-xs sm:text-sm text-slate-500 font-medium mb-4 sm:mb-6">{project.productEvidenceSubtitle || "Comprehensive mobile workflows & interactive pipeline"}</p>
                <MediaCarousel media={project.productEvidences} />
              </section>
            )}

            {/* Optional Extended Sections (e.g. TalentHub) */}
            {project.contributions && (
              <section className="border-t border-slate-200 pt-8">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6">My Contribution</h2>
                <ul className="list-disc list-outside pl-5 sm:pl-6 space-y-4 sm:space-y-6">
                  {project.contributions.map((item: any, idx: number) => (
                    <li key={idx} className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                      <span className="font-bold text-slate-900">{item.title}</span>{' '}{item.desc}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {project.systemDeployment && (
              <section className="border-t border-slate-200 pt-8">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6">System & Delivery</h2>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-4 sm:mb-6">{project.systemDeployment.desc}</p>
                <ul className="list-disc list-outside pl-5 sm:pl-6 space-y-3 sm:space-y-4">
                  {project.systemDeployment.points.map((item: any, idx: number) => (
                    <li key={idx} className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                      <span className="font-bold text-slate-900">{item.title}</span>{' '}{item.desc}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {project.achievedResults && (
              <section className="border-t border-slate-200 pt-8">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6">Delivered Outcomes</h2>
                <ul className="list-disc list-outside pl-5 sm:pl-6 space-y-4 sm:space-y-6">
                  {project.achievedResults.map((item: any, idx: number) => (
                    <li key={idx} className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                      <span className="font-bold text-slate-900">{item.title}</span>{' '}{item.desc}
                    </li>
                  ))}
                </ul>
              </section>
            )}

          </div>

          {/* Right Column - Details */}
          <div className="lg:col-span-5 flex flex-col gap-8 sm:gap-10">

            {/* Info Table */}
            <div className="border-t border-slate-200 pt-6 sm:pt-8">
              <dl className="divide-y divide-slate-100">
                <div className="py-3 sm:py-4 flex justify-between items-center gap-4">
                  <dt className="text-xs font-bold tracking-wider text-slate-400 uppercase shrink-0">PRIMARY ROLE</dt>
                  <dd className="text-xs sm:text-sm font-semibold text-slate-900 text-right">{project.primaryRole}</dd>
                </div>
                {showAdditionalScope && (
                  <div className="py-3 sm:py-4 flex justify-between items-center gap-4">
                    <dt className="text-xs font-bold tracking-wider text-slate-400 uppercase shrink-0">{additionalScopeLabel}</dt>
                    <dd className="text-xs sm:text-sm font-semibold text-slate-900 text-right">{project.additionalScope}</dd>
                  </div>
                )}
                <div className="py-3 sm:py-4 flex justify-between items-center gap-4">
                  <dt className="text-xs font-bold tracking-wider text-slate-400 uppercase shrink-0">COLLABORATION</dt>
                  <dd className="text-xs sm:text-sm font-semibold text-slate-900 text-right">{project.collaboration}</dd>
                </div>
                <div className="py-3 sm:py-4 flex justify-between items-center gap-4">
                  <dt className="text-xs font-bold tracking-wider text-slate-400 uppercase shrink-0">STATUS</dt>
                  <dd className="text-xs sm:text-sm font-semibold text-slate-900 text-right">{project.status}</dd>
                </div>
              </dl>
            </div>

            {/* Project Overview (refactored component) */}
            <ProjectOverview project={project} />

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
            <section className="pt-2 flex flex-col gap-3">

              {/* 1. Tombol Source Code */}
              {project.sourceCodeUrl && project.sourceCodeUrl !== "#" && (
                <a
                  href={project.sourceCodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 bg-white border border-slate-200 hover:border-slate-400 hover:bg-slate-50 text-slate-800 py-3 rounded-xl text-sm font-bold transition-all shadow-sm"
                >
                  <FiGithub size={18} />
                  <span>{project.sourceCodeText || "Source Code"}</span>
                </a>
              )}

              {/* 2. Tombol Website Demo */}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 bg-slate-200 border border-slate-300 hover:border-slate-400 hover:bg-slate-300 text-slate-800 py-3 rounded-xl text-sm font-bold transition-all shadow-sm"
                >
                  <FiExternalLink size={18} />
                  <span>{project.demoText || "Website Demo"}</span>
                </a>
              )}

              {/* 3. Tombol Google Play Badge */}
              {project.playStoreUrl && (
                <a
                  href={project.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-3 bg-slate-900 hover:bg-black text-white py-2.5 px-4 rounded-xl transition-all shadow-sm hover:shadow-md group border border-slate-800"
                >
                  <FaGooglePlay size={22} className="text-emerald-400 group-hover:scale-110 transition-transform" />
                  <div className="flex flex-col text-left leading-none justify-center">
                    <span className="text-[9px] uppercase tracking-wider text-slate-400 font-medium mb-0.5">
                      GET IT ON
                    </span>
                    <span className="text-sm font-bold text-white tracking-wide">
                      {project.playStoreText || "Google Play"}
                    </span>
                  </div>
                </a>
              )}

            </section>


          </div>
        </div>
      </div>
    </div>
  );
}
