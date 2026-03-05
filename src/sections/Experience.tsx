import { experiences } from '@/data/profile';
import { Briefcase, ExternalLink, User, Lightbulb } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="mb-8">
      {/* Section header with decorative line */}
      <div className="flex items-center gap-4 mb-5">
        <h2 className="text-lg font-bold text-white flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-cyan-400" />
          <span>Experience</span>
        </h2>
        <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/30 via-cyan-500/10 to-transparent" />
      </div>
      
      <div className="space-y-1">
        {experiences.map((exp, index) => (
          <div key={index} className="group relative py-4 px-4 -mx-4 rounded-xl border border-transparent hover:border-cyan-500/20 hover:bg-gradient-to-r hover:from-cyan-500/[0.04] hover:to-transparent transition-all duration-300">
            {/* Header */}
            <div className="flex items-center gap-2 mb-2.5 flex-wrap">
              <span className="text-cyan-400 font-semibold text-[15px]">{exp.role}</span>
              <span className="text-gray-600">@</span>
              <span className="text-gray-200 text-[15px]">{exp.institution}</span>
              <span className="text-gray-600 text-xs font-mono ml-auto">{exp.period}</span>
            </div>
            
            {/* Details */}
            <div className="space-y-1.5 text-[13px]">
              <div className="text-gray-400 flex items-center gap-2">
                <User className="w-3.5 h-3.5 text-gray-500" />
                <span className="text-gray-500">Advisor:</span> {exp.advisor}
              </div>
              <div className="text-gray-400 flex items-center gap-2">
                <Lightbulb className="w-3.5 h-3.5 text-gray-500" />
                <span className="text-gray-500">Topic:</span> {exp.topic}
              </div>
            </div>
            
            {/* Outputs */}
            {exp.outputs && exp.outputs.length > 0 && (
              <div className="flex items-center gap-2 mt-3">
                <span className="text-gray-500 text-xs">Output:</span>
                {exp.outputs.map((output, i) => (
                  <a
                    key={i}
                    href={output.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/25 hover:bg-cyan-500/20 hover:border-cyan-500/40 transition-all"
                  >
                    <span>{output.text}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
