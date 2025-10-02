import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import NavBar from './components/NavBar';
import MatrixBackground from './components/MatrixBackground';

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <MatrixBackground />


      <main className="bg-black text-white font-sans scroll-smooth">
        {/* Puedes agregar <NavBar /> aquí más adelante */}

        <NavBar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
