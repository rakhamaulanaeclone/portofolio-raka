import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TechArsenal from '@/components/TechArsenal';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <TechArsenal />
      <Experience />
      <Projects />
      <Footer />
    </main>
  );
}
