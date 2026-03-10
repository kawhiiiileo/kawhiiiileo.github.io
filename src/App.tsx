import { ThemeProvider } from '@/context/ThemeContext';
import { Navigation } from '@/sections/Navigation';
import { Sidebar } from '@/sections/Sidebar';
import { MainContent } from '@/sections/MainContent';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[var(--bg-primary)] transition-colors duration-300">
        {/* Dark mode ambient glow - enhanced */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden dark:block hidden">
          <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-cyan-500/[0.04] rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-blue-500/[0.04] rounded-full blur-[100px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/[0.02] rounded-full blur-[150px]" />
        </div>
        
        {/* Light mode subtle gradient */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden dark:hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/[0.03] rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-cyan-500/[0.02] rounded-full blur-[80px]" />
        </div>
        
        {/* Tech dots pattern overlay */}
        <div className="fixed inset-0 pointer-events-none tech-dots opacity-20 dark:opacity-30" />
        
        {/* Top Navigation */}
        <Navigation />
        
        {/* Main Layout */}
        <div className="relative z-10 flex justify-center py-5">
          <div className="flex w-full max-w-[1400px] gap-5 px-5">
            <Sidebar />
            <MainContent />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
