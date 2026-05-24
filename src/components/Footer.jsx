import { useState } from "react";

function Footer() {

  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("yourmail@example.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative py-28 px-6 md:px-12 lg:px-20 border-t border-white/10 overflow-hidden">

      {/* ================= BACKGROUND GLOW ================= */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-[-250px] left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-purple-500/20 blur-[180px] rounded-full"></div>

        <div className="absolute bottom-[-250px] right-0 w-[500px] h-[500px] bg-blue-500/20 blur-[180px] rounded-full"></div>

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent"></div>

      </div>

      {/* ================= CONTENT WRAPPER ================= */}
      <div className="relative z-10 max-w-6xl mx-auto">

        {/* ================= TOP CTA SECTION ================= */}
        <div className="text-center max-w-3xl mx-auto mb-20">

          <h2 className="text-4xl font-black">
            Let’s Build Something Great
          </h2>

          <p className="text-gray-400 mt-4 text-sm">
            Clean UI. Scalable backend. Modern web experiences.
          </p>

          <button
            onClick={() => scrollTo("contact")}
            className="mt-8 px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-full transition"
          >
            Contact Me
          </button>

        </div>

        {/* ================= GRID SECTION ================= */}
        <div className="grid md:grid-cols-4 gap-12 text-sm text-center md:text-left">

          {/* BRAND */}
          <div>
            <h3 className="text-xl font-bold tracking-widest">PORTFOLIO</h3>
            <p className="text-gray-400 mt-4">
              Full Stack Developer building modern scalable applications.
            </p>

            <button
              onClick={copyEmail}
              className="mt-6 px-4 py-2 bg-white/5 border border-white/10 rounded-xl hover:border-purple-500 transition"
            >
              {copied ? "Copied!" : "Copy Email"}
            </button>
          </div>

          {/* NAVIGATION */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>

            <ul className="space-y-3 text-gray-400">
              {["home", "about", "skills", "projects", "contact"].map((id) => (
                <li
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="cursor-pointer hover:text-white transition"
                >
                  {id.toUpperCase()}
                </li>
              ))}
            </ul>
          </div>

          {/* PROJECTS */}
          <div>
            <h4 className="text-white font-semibold mb-4">Projects</h4>

            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white cursor-pointer">School System</li>
              <li className="hover:text-white cursor-pointer">E-Commerce UI</li>
              <li className="hover:text-white cursor-pointer">REST API</li>
              <li className="hover:text-white cursor-pointer">Portfolio</li>
            </ul>
          </div>

          {/* CONNECT */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>

            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-purple-400 cursor-pointer">GitHub</li>
              <li className="hover:text-blue-400 cursor-pointer">LinkedIn</li>
              <li className="hover:text-pink-400 cursor-pointer">Email</li>
            </ul>
          </div>

        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="mt-20 border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs">

          <p>© {new Date().getFullYear()} Built with React</p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="mt-4 md:mt-0 px-4 py-2 bg-white/5 border border-white/10 rounded-full hover:border-purple-500 transition"
          >
            Back to Top ↑
          </button>

        </div>

      </div>

    </footer>
  );
}

export default Footer;