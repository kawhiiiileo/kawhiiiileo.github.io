import { Navigation } from '@/sections/Navigation';
import { MainContent } from '@/sections/MainContent';

function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navigation />
      <MainContent />
    </>
  );
}

export default App;
