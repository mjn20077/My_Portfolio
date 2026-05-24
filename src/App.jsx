import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* ================= BACKGROUND ================= */}
      <div className="main-background"></div>
      <div className="purple-glow"></div>
      <div className="blue-glow"></div>
      <div className="pink-glow"></div>
      <div className="grid-overlay"></div>

      {/* ================= NAVBAR ================= */}
      <Navbar />

      {/* ================= SECTIONS ================= */}
      <section id="home"><Hero /></section>
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>

      {/* ================= CONTACT ================= */}
      <section id="contact">
        <Contact />
      </section>

      {/* ================= PREMIUM SECTION DIVIDER ================= */}
      <div className="relative w-full py-36 flex items-center justify-center">

        {/* glow center */}
        <div className="absolute w-[500px] h-[2px] bg-purple-500/20 blur-2xl"></div>

        {/* main line */}
        <div className="w-[80%] h-[1px] bg-gradient-to-r from-transparent via-purple-500/40 to-transparent"></div>

      </div>

      {/* ================= FOOTER ================= */}
      <br></br>
      <Footer />

    </main>
  );
}

export default App;