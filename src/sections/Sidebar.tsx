import { MapPin, Building2, GraduationCap, ExternalLink, Github, BookOpen } from 'lucide-react';
import { profile } from '@/data/profile';

export function Sidebar() {
  return (
    <aside className="w-[280px] flex-shrink-0 sticky top-0 h-screen overflow-y-auto custom-scrollbar border-r border-cyan-500/20 bg-gradient-to-b from-[#0d1117]/90 to-[#0a0a0f]/90 backdrop-blur-xl">
      <div className="p-6">
        {/* Avatar */}
        <div className="mb-6">
          <div className="relative w-32 h-32 mx-auto">
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-md" />
            {/* Avatar image */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-cyan-500/40">
              <img 
                src="/avatar.png" 
                alt={profile.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Status indicator */}
            <div className="absolute bottom-1 right-1 w-4 h-4 bg-[#0a0a0f] rounded-full flex items-center justify-center">
              <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
        
        {/* Name */}
        <div className="text-center mb-4">
          <h1 className="text-xl font-bold text-white tracking-wide">{profile.name}</h1>
          <p className="text-sm text-cyan-400/80 font-mono mt-1">{profile.nameCN}</p>
        </div>
        
        {/* Title Badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
            <GraduationCap className="w-3.5 h-3.5" />
            {profile.title}
          </span>
        </div>
        
        {/* Info */}
        <div className="space-y-3 mb-7 text-sm">
          <div className="flex items-center gap-2.5 text-gray-400">
            <Building2 className="w-4 h-4 text-cyan-500/60" />
            <span className="leading-tight">{profile.education.institution}</span>
          </div>
          <div className="flex items-center gap-2.5 text-gray-400">
            <MapPin className="w-4 h-4 text-cyan-500/60" />
            <span>Shanghai, China</span>
          </div>
        </div>
        
        {/* Links */}
        <div className="space-y-2">
          <a 
            href={profile.googleScholar}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all group border border-transparent hover:border-cyan-500/20"
          >
            <BookOpen className="w-4 h-4 text-cyan-500/60 group-hover:text-cyan-400" />
            <span>Google Scholar</span>
            <ExternalLink className="w-3.5 h-3.5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-cyan-500/60" />
          </a>
          <a 
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all group border border-transparent hover:border-cyan-500/20"
          >
            <Github className="w-4 h-4 text-cyan-500/60 group-hover:text-cyan-400" />
            <span>GitHub</span>
            <ExternalLink className="w-3.5 h-3.5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-cyan-500/60" />
          </a>
          <a 
            href={profile.education.advisorUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all group border border-transparent hover:border-cyan-500/20"
          >
            <GraduationCap className="w-4 h-4 text-cyan-500/60 group-hover:text-cyan-400" />
            <span>Advisor</span>
            <ExternalLink className="w-3.5 h-3.5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-cyan-500/60" />
          </a>
        </div>
        
        {/* Research Interests */}
        <div className="mt-7">
          <h3 className="text-xs font-bold text-cyan-400/70 uppercase tracking-widest mb-3 flex items-center gap-2">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            Research Interests
          </h3>
          <div className="space-y-2">
            {profile.researchInterests.map((interest, index) => (
              <div key={index} className="text-sm flex items-start gap-2.5">
                <span className="text-cyan-500/60 text-base">{interest.icon}</span>
                <div>
                  <span className="text-gray-300">{interest.title}</span>
                  <p className="text-xs text-gray-500 mt-0.5">{interest.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-8 pt-5 border-t border-cyan-500/10">
          <p className="text-xs text-gray-600 text-center font-mono">
            © {new Date().getFullYear()} {profile.name}
          </p>
        </div>
      </div>
    </aside>
  );
}
