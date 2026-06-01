import { Navigation } from '@/sections/Navigation';
import { Sidebar } from '@/sections/Sidebar';
import { MainContent } from '@/sections/MainContent';

function App() {
  return (
    <div className="site-shell">
      <Navigation />

      <div id="main">
        <Sidebar />
        <article className="page" itemScope itemType="http://schema.org/CreativeWork">
          <div className="page__inner-wrap">
            <MainContent />
          </div>
        </article>
      </div>
    </div>
  );
}

export default App;
