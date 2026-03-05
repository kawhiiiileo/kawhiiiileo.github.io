import { News } from './News';
import { Publications } from './Publications';
import { Experience } from './Experience';
import { profile } from '@/data/profile';
import { Quote, Sparkles } from 'lucide-react';

export function MainContent() {
  return (
    <main className="flex-1 min-w-0 py-8 px-10">
      {/* About / Bio */}
      <section className="mb-10">
        {/* Quote Card */}
        <div className="relative p-5 rounded-xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/[0.05] to-purple-500/[0.02]">
          {/* Corner decorations */}
          <div className="absolute top-0 left-0 w-5 h-5 border-l-2 border-t-2 border-cyan-500/40 rounded-tl-lg" />
          <div className="absolute top-0 right-0 w-5 h-5 border-r-2 border-t-2 border-cyan-500/40 rounded-tr-lg" />
          <div className="absolute bottom-0 left-0 w-5 h-5 border-l-2 border-b-2 border-cyan-500/40 rounded-bl-lg" />
          <div className="absolute bottom-0 right-0 w-5 h-5 border-r-2 border-b-2 border-cyan-500/40 rounded-br-lg" />
          
          <blockquote className="relative">
            <Quote className="absolute -top-1 -left-1 w-6 h-6 text-cyan-500/30" />
            <p className="text-gray-300 text-base italic leading-relaxed pl-6">
              {profile.quote}
            </p>
            <footer className="text-gray-500 text-sm mt-3 font-mono text-right">
              — {profile.quoteDate}
            </footer>
          </blockquote>
        </div>
        
        {/* Bio */}
        <div className="mt-6 text-gray-300 text-[15px] leading-relaxed">
          <p className="flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-cyan-400/70 flex-shrink-0 mt-0.5" />
            <span>
              I am an <span className="text-cyan-400 font-semibold">Incoming PhD</span> student (Fall 2026) in the joint program between{' '}
              <span className="text-cyan-300">Shanghai Jiao Tong University</span> (EPIC Lab) and{' '}
              <span className="text-cyan-300">HKUST (Guangzhou)</span>, working under the mentorship of Prof.{' '}
              <a href={profile.education.advisorUrl} target="_blank" rel="noopener noreferrer" className="link-cyan font-medium">
                Linfeng Zhang
              </a>.
              I am also fortunate to collaborate with Dr.{' '}
              <a href={profile.collaborators[0].url} target="_blank" rel="noopener noreferrer" className="link-cyan font-medium">
                Siteng Huang
              </a> at <span className="text-cyan-300">DAMO Academy</span>.
            </span>
          </p>
        </div>
      </section>
      
      {/* News */}
      <News />
      
      {/* Publications */}
      <Publications />
      
      {/* Experience */}
      <Experience />
    </main>
  );
}
