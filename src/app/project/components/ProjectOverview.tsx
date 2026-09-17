import { FiCheck } from 'react-icons/fi';

export default function ProjectOverview({ project }: { project: any }) {
  return (
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
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-4">{project.keyHighlightsTitle || "TECHNICAL ARCHITECTURE"}</h3>
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
  );
}
