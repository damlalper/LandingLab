import { ThemeToggle } from './components/ThemeToggle';
import { Hero } from './sections/Hero';
import { Features } from './sections/Features';
import { Pricing } from './sections/Pricing';
import { FAQ } from './sections/FAQ';
import { Contact } from './sections/Contact';

function App() {
  return (
    <div className="app">
      <ThemeToggle />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Landing Page. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
