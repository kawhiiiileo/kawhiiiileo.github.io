import { Sidebar } from '@/sections/Sidebar';
import { MainContent } from '@/sections/MainContent';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Animated grid background */}
      <div className="fixed inset-0 cyber-grid opacity-60" />
      
      {/* Glow orbs background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-500/[0.03] rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/[0.03] rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      {/* Scanline effect */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02]"
        style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,245,255,0.03) 2px, rgba(0,245,255,0.03) 4px)'
        }}
      />
      
      {/* Main container - wider */}
      <div className="relative z-10 flex justify-center min-h-screen">
        <div className="flex w-full max-w-[1200px]">
          {/* Left Sidebar */}
          <Sidebar />
          
          {/* Main Content */}
          <MainContent />
        </div>
      </div>
    </div>
  );
}

export default App;
