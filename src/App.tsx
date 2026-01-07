import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AboutMe } from "@/components/AboutMe";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { Footer } from "@/components/Footer";

function App() {
  return (
    <div className="relative min-h-screen">
      <Header />
      <main>
        <Hero />
        <AboutMe />
        <ProjectsGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;
