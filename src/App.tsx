import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Works from "./components/Works";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import TechSupport from "./components/TechSupport";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Works />
        <Services />
        <Stats />
        <Contact />
      </main>
      <Footer />
      <TechSupport />
    </div>
  );
}
