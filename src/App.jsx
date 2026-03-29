import { Navbar } from "./layouts/Navbar";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Projects } from "./sections/Projects";
import { Education } from "./sections/Education";
import { Footer } from "./layouts/Footer";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Education />
      </main>
      <Footer />
    </div>
  );
}

export default App;
